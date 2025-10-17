export const cart = [
  {
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    qty:2,
  },
  {
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    qty:1,
  }
];

export function addToCart(productId) {
  let matchingitem;
  cart.forEach((cartitem) => {
    if (productId === cartitem.productId) {
      matchingitem = cartitem;
    }
  });

  if (matchingitem) {
    matchingitem.qty++;
  } else {
    cart.push({
      productId: productId,
      qty: 1,
    });
  }
}