import { getPrices } from "../../util/getPrices";

const basePrice = 244.99 * 3;

const finalPrice30Days = 299.99;
const finalPrice90Days = 750.99;
const finalPrice180Days = 1699.99;

const prices30Days = getPrices(basePrice, finalPrice30Days, 30);
const prices90Days = getPrices(basePrice * 3, finalPrice90Days, 90);
const prices180Days = getPrices(basePrice * 6, finalPrice180Days, 180);

export const basicProduct = {
  finalPrice30Days,
  finalPrice90Days,
  finalPrice180Days,
  prices30Days,
  prices90Days,
  prices180Days,
};
