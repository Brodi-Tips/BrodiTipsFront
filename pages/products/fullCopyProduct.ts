import { getPrices } from "../../util/getPrices";

const basePrice = 244.99 * 6;

const finalPrice30Days = 750.99;
const finalPrice90Days = 1750.99;
const finalPrice180Days = 4200.99;

const prices30Days = getPrices(basePrice, finalPrice30Days, 30);
const prices90Days = getPrices(basePrice * 3, finalPrice90Days, 90);
const prices180Days = getPrices(basePrice * 6, finalPrice180Days, 180);

export const fullCopyProduct = {
  finalPrice30Days,
  finalPrice90Days,
  finalPrice180Days,
  prices30Days,
  prices90Days,
  prices180Days,
};
