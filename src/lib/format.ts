export function formatPrice(price: number) {
  return (price).toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
  });
}
