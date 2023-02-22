export const getPrices = (
  initialPrice: number,
  finalPrice: number,
  days: number
) => {
  const [price, priceCents] = String(finalPrice).split(".") as unknown as [
    string,
    string
  ];

  const fromPrice = String(initialPrice).split(".").join(",");

  const discount = `-${Math.round(
    ((initialPrice - finalPrice) / initialPrice) * 100
  )}%`;

  const [priceSmall, priceSmallCents] = String(
    (finalPrice / days).toFixed(2)
  ).split(".") as unknown as [string, string];

  return {
    price,
    priceCents,
    fromPrice,
    discount,
    priceSmall,
    priceSmallCents,
  };
};
