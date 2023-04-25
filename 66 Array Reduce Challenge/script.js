const numbers = [1, 2, 3, 4];

const numMultiply = numbers.reduce((acc, cur) => acc * cur);

// console.log(numMultiply);

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 }
];

const cartPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

console.log(cartPrice);
