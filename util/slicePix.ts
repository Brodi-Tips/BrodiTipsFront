const slicePix = (pix: string) =>
  [...pix].reverse().slice(0, 25).reverse().join("");

export default slicePix;
