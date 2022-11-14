```json
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
  "totalPayment" : 21000
}
```