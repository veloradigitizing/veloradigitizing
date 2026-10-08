/**
 * Merchant-level offer details shared by every /store/[slug] Product schema.
 *
 * Google Search Console "Merchant listings" reports flag offers that lack
 * `shippingDetails`, `validFrom` and `hasMerchantReturnPolicy`. Store items are
 * digital files delivered by email, so shipping is free with zero transit time
 * and the return policy mirrors the 14-day satisfaction guarantee in the
 * store FAQ (see STORE_FAQS in app/components/faq-data.ts).
 */

const BASE_URL = "https://www.veloradigitizing.com";

/** Countries the store sells to. Used for both shipping and return policy. */
export const MERCHANT_COUNTRIES = ["US", "CA", "GB", "AU", "DE", "FR", "NL", "IE", "NZ"];

/** Date the current store pricing took effect (ISO 8601). */
export const OFFER_VALID_FROM = "2026-01-01";

/** Date the current store pricing is guaranteed until (ISO 8601). */
export const OFFER_VALID_UNTIL = "2027-12-31";

/** Number of days a buyer has to request a refund or exchange. */
export const RETURN_WINDOW_DAYS = 14;

export const SHIPPING_DETAILS = {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: 0,
    currency: "USD",
  },
  shippingDestination: MERCHANT_COUNTRIES.map((country) => ({
    "@type": "DefinedRegion",
    addressCountry: country,
  })),
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 0,
      maxValue: 1,
      unitCode: "DAY",
    },
    transitTime: {
      "@type": "QuantitativeValue",
      minValue: 0,
      maxValue: 0,
      unitCode: "DAY",
    },
  },
} as const;

export const RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: MERCHANT_COUNTRIES,
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: RETURN_WINDOW_DAYS,
  returnFees: "https://schema.org/FreeReturn",
  refundType: "https://schema.org/FullRefund",
  merchantReturnLink: `${BASE_URL}/store#faq`,
} as const;
