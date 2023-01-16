const validateRoute = (
  identificator: string,
  product: string,
  router: string
) => {
  if (identificator.length > 0 && product.length > 0) {
    const re = /[^a-z0-9]/gi;
    if (re.test(identificator)) {
      const idRemovedSpecial = identificator.replace(/[^a-z0-9]/gi, "");

      // router.push(`/${product}/${idRemovedSpecial}`);
    }
  }
};

export default validateRoute;
