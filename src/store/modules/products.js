const products = {
  state: [
    {
      brand: 'Nike',
      amount: 3000,
    },
    {
      brand: 'Puma',
      amount: 300,
    },
    {
      brand: 'Nero',
      amount: 5000,
    },
  ],
  reducer(products, payload) {
    return [...products]
  },
}

export default products
