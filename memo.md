### SNS 로그인

```tsx
account: {
  provider: "kakao" | "apple" | "naver",
  access_token: string;
},
token: {
  email: string;
}
```

### KAKAO 로그인

```tsx
  account: {
    provider: 'kakao',
    type: 'oauth',
    providerAccountId: '2371768282',
    access_token: 'DKv3F-f4cpJtFExkNADLOmTnBEmO31H83HokBXh6Cj11mgAAAYKM0B5r',
    token_type: 'bearer',
    refresh_token: 'tWlqvcwwPwaUyuTD8dPulp-mP-sUoTQZjeGMxrMHCj11mgAAAYKM0B5p',
    expires_at: 1660241424,
    scope: 'birthday account_email gender',
    refresh_token_expires_in: 5183999
  },
  token: {
    name: undefined,
    email: 'unuyh@kakao.com',
    picture: undefined,
    sub: '2371768282'
  },
  user: {
    id: '2371768282',
    name: undefined,
    email: 'unuyh@kakao.com',
    image: undefined
  }
```

### APPLE

```tsx
   account: {
    provider: 'apple',
    type: 'oauth',
    providerAccountId: '001084.2060f3ff112340b7b47d2114d0f8c63b.1451',
    access_token: 'ae3cd1ddabb5945dbbc3d300c3b77cf75.0.srqyu.SVCfnkaa6kFWMrr4unPo0g',
    token_type: 'Bearer',
    expires_at: 1660237395,
    refresh_token: 'r68eecbb3c3954194903fc32c059f0dc9.0.srqyu.J4mM5tRMlyxF59cdkJ1-sg',
    id_token: 'eyJraWQiOiJmaDZCczhDIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoia3IuY28uc3VwZXJraXRjaGVuLmRldi13d3cuc3dhIiwiZXhwIjoxNjYwMzIwMTk1LCJpYXQiOjE2NjAyMzM3OTUsInN1YiI6IjAwMTA4NC4yMDYwZjNmZjExMjM0MGI3YjQ3ZDIxMTRkMGY4YzYzYi4xNDUxIiwiYXRfaGFzaCI6Im9WVFBFcmFqd1pMclVTa253Q21MUEEiLCJlbWFpbCI6IjEwMzFraHdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJ0cnVlIiwiYXV0aF90aW1lIjoxNjYwMjMzNzkzLCJub25jZV9zdXBwb3J0ZWQiOnRydWV9.ZGar02mcNK1pD5HEB1Gf_8STdfglE5h4JG3NhadGpAAfEIxi3kNztg92mmawsK6Drn7n5xLwnDYjJsxE5hIgY-bjdyLtr5dsMxOVMw1fglx7IZIOomikaG6U7miqAewvUJlS3et6TTTwoNjztLjS2Ee6Pk_L0p6AkMBTevFrG95HVRzXhRUXDB_9rJgp47C1XALPArSRvct1JtgAwmcKsc8_e4GoGmJMOCSP3mBCGYDJr6tiR05fkZMGHo-9-MRsUpTv080XEgOpp8lv5bTLE03si3bWT_ik2jm1vnk8HUccrV3LyXVobuRuSkGp4bU5LtIypMJmTw_-VRdR7u0UKw'
  },
  token: {
    name: undefined,
    email: '1031khw@gmail.com',
    picture: null,
    sub: '001084.2060f3ff112340b7b47d2114d0f8c63b.1451'
  },
  user: {
    id: '001084.2060f3ff112340b7b47d2114d0f8c63b.1451',
    name: undefined,
    email: '1031khw@gmail.com',
    image: null
  }
```

### NAVER

```tsx
  account: {
    provider: 'naver',
    type: 'oauth',
    providerAccountId: '6tH7uXXC2cBl-Xp7duoLfUQBm0LSZEhCwMYi9U5bbbE',
    access_token: 'AAAANkKCmboP3L69hHpxIxztxgdpxn8docvtwL3CZHURoVznPRhoWz4cvpyA82KCzC0-x2oKTdQ98vZSYeSAXevZp3o',
    refresh_token: '9iswhYEsA1mKg2wzU08vHp3NYQmh5LOHneAST0S0n6XY9k6dvwpHwisUwUL2WOBhiiLdcAN8g4G1MqCAuF5L82Pa3c89hqa0NrN9VJjD9gkBg01DOaZmqySv8rknseIlYmz',
    token_type: 'bearer',
    expires_at: 1660237985
  },
  token: {
    name: undefined,
    email: 'eliga_@naver.com',
    picture: undefined,
    sub: '6tH7uXXC2cBl-Xp7duoLfUQBm0LSZEhCwMYi9U5bbbE'
  },
  user: {
    id: '6tH7uXXC2cBl-Xp7duoLfUQBm0LSZEhCwMYi9U5bbbE',
    name: undefined,
    email: 'eliga_@naver.com',
    image: undefined
  }
```

### EMAIL 로그인

```
{
  account: undefined,
  token: {
    accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uSWQiOiIzODcyZjhkOC05YzdkLTRlZjItYjNlOC02Nzg1YzA1ZjFjNGUiLCJpZCI6MTAwMDA0MzI5LCJ1c2VybmFtZSI6ImtodzEwMzFAZ21haWwuY29tIiwibmFtZSI6Iuq5gO2YhOyasCIsImdyYWRlIjoiQkFTSUMiLCJpc3MiOiJTVVBFUl9LSVRDSEVOIiwiZXhwIjoxNjYwMjIwODYwfQ.1gNicKf0HzJl3kjcgIA-UahMBHkJVWxdF_53TTGVNBg',
    expires: '2022-08-11T12:27:40.310Z',
    refreshToken: 'eyJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uSWQiOiIzODcyZjhkOC05YzdkLTRlZjItYjNlOC02Nzg1YzA1ZjFjNGUiLCJpZCI6MTAwMDA0MzI5LCJpc3MiOiJTVVBFUl9LSVRDSEVOIiwiZXhwIjoxNjc1NzcyNTYwfQ.oSHEtw0hOO606n11T-ESVmu9iCTwX0e23lI7K7agj6k',
    user: {
      sessionId: '3872f8d8-9c7d-4ef2-b3e8-6785c05f1c4e',
      id: 100004329,
      username: 'khw1031@gmail.com',
      name: '김현우',
      grade: 'BASIC',
      iss: 'SUPER_KITCHEN',
      exp: 1660220860
    },
    iat: 1660220560,
    exp: 1662812560,
    jti: 'edc99285-c778-4883-bc35-5925abd698c7'
  },
  user: undefined
}
```


주문 API mock

```
{
  "productsToPurchase" : [ {
    "productId" : 100000100001,
    "productName" : "양념어묵볶음",
    "productImageUrl" : "https://dev-cdn.superkitchen.kr/image/goods/3903587661695597.png",
    "count" : 2,
    "productTotalPrice" : 20000
  }, {
    "productId" : 10000000001,
    "productName" : "옵션 상품 1",
    "productImageUrl" : "https://dev-cdn.superkitchen.kr/image/goods/3903587661695597.png",
    "count" : 1,
    "productTotalPrice" : 10000,
    "mandatoryOptionId" : 1
  } ],
  "shippingInfo" : {
    "recipientName" : "김슈키",
    "recipientContactInfo" : "010-1234-1234",
    "recipientAddress" : "서울시 강남구 도산대로 207 11층",
    "extraRequest" : "문앞 / 공동현관 출입번호 0000"
  },
  "coupon" : {
    "catalogCoupons" : [ {
      "id" : 1,
      "name" : "상품 쿠폰 1",
      "discountPrice" : 3000,
      "productId" : 100000100001
    } ],
    "cartCoupon" : {
      "id" : 2,
      "name" : "장바구니 쿠폰 1",
      "discountPrice" : 2000
    },
    "shippingCoupon" : {
      "id" : 3,
      "name" : "배송비 쿠폰 1",
      "discountPrice" : 3000
    }
  },
  "pointsUsed" : 1000,
  "totalPayment" : 21000,
  "paymentMethod" : "CREDIT_CARD"
}
```

```
import { useLayoutEffect, useState } from "react";

export function useWindowHeight() {
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    function updateHeight() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return height;
}
```