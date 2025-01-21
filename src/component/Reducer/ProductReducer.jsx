// const ProductReducer = (state, action) => {
//   if (action.type === "VIEW_PRODUCT") {
//     let { products } = action.payload;
//     const QuickViewProduct = {
//       id: products.id,
//       name: products.name,
//       price: products.price,
//       image: products.image,
//       quantities: 1, // Default quantity set to 1
//     };

//     return {
//       ...state,
//       products: [...state.cart, QuickViewProduct],
//     };
//   }
// };
// export default ProductReducer;
