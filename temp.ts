import { NewVersinRootWrap } from "styled/layout/NewVersinRootWrap.styled";
import { SubsWrap } from "features/contracts/step1/SubsWrap";
import { BottomWrap } from "components/elements/bottom";
import { BtnPureButton } from "components/styled/common/Btns.styled";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import {
  bjCodeSelector,
  cpogGoodCodeSelector,
  insuCodeSelector,
  prdStrtDtSelector,
  productNmSelector,
  setBjCode,
  setCpogGoodCode,
  setInsuCode,
  setPrdStrtDt,
  setProductNm,
  setUSskey,
  sskeySelector,
} from "slices/contracts";
import { insertOscManageStep } from "apis/contracts";
import { useEffect, useMemo } from "react";
import { RoutingHeader } from "components/RoutingHeader";
import JoinStopPop from "components/elements/joinStopPop";
import { useState } from "react";
import { isNativeSelector } from "slices/userAgent";
import { NativeBridge } from "utils/nativeBridge";
import {
  numSelector,
  queueKeySelector,
  setNum,
  setProductCode,
  setQueueKey,
} from "slices/queue";
import { TIMER_PERIOD } from "constants/queue";
import {
  GA_PRODUCT_TITLE,
  GA_PRODUCT_TITLE_VIRTUAL_URL,
} from "../../../public/constant";

const QUEUE_API_HOST = process.env.NEXT_PUBLIC_EVENT_QUEUE_API_HOST;
const QUEUE_FRONTEND_HOST = process.env.NEXT_PUBLIC_EVENT_QUEUE_FRONTEND_HOST;
const LEGACY = process.env.NEXT_PUBLIC_ONSURE_API_HOST;
const isQueueEnabled = process.env.NEXT_PUBLIC_QUEUE_ENABLED === "true";

/**
 * prevStep: 상품 상세 페이지(가입하기)
 * currentStep: STEP1, 상품 정보(가입혜택, 정기혜택, 만기혜택), 가입 시 안내사항
 */
const Step1 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isNative = useSelector(isNativeSelector);
  const [cancelPopShow, setCancelPopShow] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const sskey = useSelector(sskeySelector);
  const insuCode = useSelector(insuCodeSelector) || "";
  const cpogGoodCode = useSelector(cpogGoodCodeSelector);
  const bjCode = useSelector(bjCodeSelector);
  const productNm = useSelector(productNmSelector);
  const prdStrtDt = useSelector(prdStrtDtSelector);

  const queueKeyFromStore = useSelector(queueKeySelector);
  const num = useSelector(numSelector);

  useEffect(() => {
    fetch(`${QUEUE_API_HOST}/equeue/connect/selectExecuteOnOff`, {
      method: "POST",
    })
      .then((response) => response.text())
      .then((isOn) => {
        if (isOn === "false") {
          setIsOn(false);
          dispatch(setQueueKey("SWITCH-OFF"));
        } else {
          setIsOn(true);
        }
      });
  }, [dispatch]);

  useEffect(() => {
    if (!isOn) return;
    const query = router.query;
    const sskeyFromQueryParams = (query.sskey as string) || sskey;
    console.log(sskeyFromQueryParams);
    if (!router.isReady || !sskeyFromQueryParams) return;

    fetch(`${QUEUE_API_HOST}/equeue/connect/selectCustom`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sskey: sskeyFromQueryParams,
      }),
    })
      .then((res) => res.json())
      .then(({ returnCode, returnData }) => {
        if (returnCode === "1000") {
          dispatch(setUSskey({ input: returnData.sskey }));
          dispatch(setInsuCode({ input: returnData.CMScode }));
          dispatch(setProductCode(returnData.CMScode));
          dispatch(setCpogGoodCode({ input: returnData.cpogGoodCode }));
          dispatch(setBjCode({ input: returnData.bjCode }));
          dispatch(setProductNm({ input: returnData.productNm }));
          dispatch(setPrdStrtDt({ input: returnData.prdStrtDt }));
        }
        if (returnCode === "3000") {
          if (insuCode) {
            router.push(`/products/subscriptions/${insuCode}`);
          } else {
            if (isNative) {
              NativeBridge.call(
                "wallet",
                "webClose",
                "callbackNativeResponse",
                {}
              );
            } else {
              window.parent.postMessage(
                { homeURL: "/m/homepage/main.do" },
                `${LEGACY}`
              );
            }
          }
        }
      });
  }, [router, dispatch, sskey, insuCode, isNative, isOn]);

  const hasAllData = useMemo(() => {
    return (
      !!sskey &&
      !!insuCode &&
      !!cpogGoodCode &&
      !!bjCode &&
      !!productNm &&
      !!prdStrtDt
    );
  }, [sskey, insuCode, bjCode, productNm, prdStrtDt, cpogGoodCode]);

  useEffect(() => {
    if (!hasAllData || !router.isReady) return;
    const query = router.query;
    const queueKey = (query.queueKey as string) || queueKeyFromStore;
    let intervalId: number | null = null;

    // 최초 step1 진입
    if (!queueKeyFromStore && !queueKey) {
      if (!isOn) return;
      window.location.href = `${QUEUE_FRONTEND_HOST}/?productCode=${insuCode}&sskey=${sskey}`;
    } else {
      // queryParams로 key를 받아오거나, 기존에 redux에 저장된 key가 있는 경우
      dispatch(setQueueKey(queueKey));

      if (num) {
        intervalId = window.setInterval(() => {
          fetch(`${QUEUE_API_HOST}/equeue/connect/createWorking`, {
            method: "POST",
            body: JSON.stringify({ key: queueKey, num }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((result) => {
              if (result.returnCode === "3000") {
                dispatch(setNum(null));
                dispatch(setQueueKey(null));
                window.location.href = `${QUEUE_FRONTEND_HOST}/?productCode=${insuCode}&sskey=${sskey}`;
              }
            });
        }, TIMER_PERIOD);
      } else {
        fetch(`${QUEUE_API_HOST}/equeue/connect/createWorking`, {
          method: "POST",
          body: JSON.stringify({ key: queueKey }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.returnCode === "1000") {
              const { num } = result.returnData;
              dispatch(setNum(queueKey === "SWITCH-OFF" ? "SWITCH-OFF" : num));
              intervalId = window.setInterval(() => {
                fetch(`${QUEUE_API_HOST}/equeue/connect/createWorking`, {
                  method: "POST",
                  body: JSON.stringify({ key: queueKey, num }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((response) => response.json())
                  .then((result) => {
                    if (result.returnCode === "3000") {
                      dispatch(setNum(null));
                      dispatch(setQueueKey(null));
                      window.location.href = `${QUEUE_FRONTEND_HOST}/?productCode=${insuCode}&sskey=${sskey}`;
                    }
                  });
              }, TIMER_PERIOD);
            }
            if (result.returnCode === "3000") {
              dispatch(setNum(null));
              dispatch(setQueueKey(null));
              window.location.href = `${QUEUE_FRONTEND_HOST}/?productCode=${insuCode}&sskey=${sskey}`;
            }
          });
      }
    }

    return () => {
      if (intervalId) window.clearInterval(intervalId);
    };

    // eslint-disable-next-line
  }, [router, dispatch, hasAllData, isOn]);

  useEffect(() => {
    window.GAInit(
      "first_mob",
      "구독보험_가입시작_" + GA_PRODUCT_TITLE[insuCode],
      GA_PRODUCT_TITLE_VIRTUAL_URL[insuCode] + "/contractStep1.do",
      insuCode,
      ""
    );
  });

  useEffect(() => {
    if (!sskey) return;
    insertOscManageStep(sskey, "1").then((res) => {
      if (res.serverSideSuccessYn === "Y") {
        console.log("-- step1 osc succeed");
      } else {
        console.log("-- step1 osc failed");
        console.log(res.errorMessage);
      }
    });
  }, [sskey]);

  const handleClickBackButton = () => {
    if (isNative) {
      window.NativeBridgeOS = NativeBridge;
      window.NativeBridgeOS.call(
        "wallet",
        "webClose",
        "callbackNativeResponse",
        {}
      );
    } else {
      router.push(`/products/subscriptions/${insuCode}`);
    }
  };

  const onClickConfirm = () => {
    router.push("/contracts/step2");
  };

  return (
    <>
      <NewVersinRootWrap
        wrapBgColor="white"
        useFixedBotBtn
        logFixBotBtn
        fixHeader
      >
        <RoutingHeader
          handleClickBackBtn={handleClickBackButton}
          setCancelPopShow={setCancelPopShow}
          leftOnly={true}
        />
        <SubsWrap />
        <BottomWrap>
          <BtnPureButton className="btn-size-l" onClick={onClickConfirm}>
            시작하기
          </BtnPureButton>
        </BottomWrap>
        {cancelPopShow && <JoinStopPop setCancelPopShow={setCancelPopShow} />}
      </NewVersinRootWrap>
    </>
  );
};

export default Step1;
