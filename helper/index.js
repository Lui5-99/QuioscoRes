export const formatearDinero = (cantidad) => {
  return cantidad.toLocaleString("en-ES", {
    style: "currency",
    currency: "MXN",
  });
};
