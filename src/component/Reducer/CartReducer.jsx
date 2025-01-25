// const CartReducer= (state,action) =>{
  
//     //add product in cart
//     if (action.type === "ADD_TO_CART") {
//         let { id, sunglasses,amount } = action.payload;
    
//         // Check if the product already exists in the cart
//         const existingProduct = state.cart.find((item) => item.id === id);
    
//         if (existingProduct) {
//           // If product exists, update its quantity
//           const updatedCart = state.cart.map((item) =>
//             item.id === id
//               ? { ...item, quantities: item.quantities + 1 } // Increment quantity
//               : item
//           );
    
//           return {
//             ...state,
//             cart: updatedCart,
//           };
//         } else {
//           // If product doesn't exist, add it with quantity 1
//           const cartProduct = {
//             id: sunglasses.id,
//             name: sunglasses.name,
//             price: sunglasses.price,
//             amount,
//             image:sunglasses.image,
//             // quantities: 1, // Default quantity set to 1
//           };
    
//           return {
//             ...state,
//             cart: [...state.cart, cartProduct],
//           };
//         }
//       }
    
//     if(action.type==="REMOVE_FROM_CART"){
//         let updatedCart = state.cart.filter((curItem)=> curItem.id !== action.payload.id);
//         return {
//             ...state,
//             cart: updatedCart,
//         };
//     }
//     //remove all from cart
//     if(action.type==="REMOVE_ALL_FROM_CART"){
//       return {
//         ...state,
//         cart:[],
//       };
//     }
//     if (action.type === "UPDATE_QUANTITY") {
//         // Update quantity of a product
//         const { id, quantities } = action.payload;
//         const updatedCart = state.cart.map((item) =>
//           item.id === id ? { ...item, quantities } : item
//         );
    
//         return {
//           ...state,
//           cart: updatedCart,
//         };
//       }
//     if (action.type === "CART_TOTAL_PRICE") {
//         // Calculate the total price (subtotal of all items)
//         let total_amount = state.cart.reduce((initialVal, curElem) => {
//           let { price, quantities } = curElem;
          
//           console.log(quantities)
          
//           return initialVal + price * quantities;
//         }, 0);
    
//         return {
//           ...state,
//           total_amount,
//         };
//       }
    
//     return state;
// };
// export default CartReducer;

const cartReducer = (state, action) => {
  switch (action.type) {
    // case "ADD_TO_CART": {
    //   const { id, sunglasses, amount } = action.payload;
    //   const existingProduct = state.cart.find((item) => item.id === id);

    //   if (existingProduct) {
    //     const updatedCart = state.cart.map((item) => 
    //       item.id === id ? { ...item, quantity: item.quantity + amount } : item
    //     );
    //     return { ...state, cart: updatedCart };
    //   } else {
    //     const newItem = {
    //       ...sunglasses,
    //       id: id,
    //       quantity: Number(amount) || 1,
    //     };
    //     return { ...state, cart: [...state.cart, newItem] };
    //   }
    // }

    case "ADD_TO_CART": {
      const { id, sunglasses, amount } = action.payload;
      console.log('Adding to cart:', { id, sunglasses, amount });
    
      const existingProduct = state.cart.find((item) => item.id === id);
    
      if (existingProduct) {
        const updatedCart = state.cart.map((item) => 
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        );
        return { ...state, cart: updatedCart };
      } else {
        const newItem = {
          ...sunglasses,
          id: id,
          quantity: Number(amount) || 1, // Ensure it's a number
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case "UPDATE_CART_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Number(action.payload.quantity) || 1 }
          : item
      );
      return { ...state, cart: updatedCart };
    }

    case "REMOVE_FROM_CART": {
      const filteredCart = state.cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart: filteredCart };
    }

    case "REMOVE_ALL_FROM_CART": {
      return { ...state, cart: [] };
    }

    case "CART_TOTAL_PRICE": {
      let totalAmount = 0;
      let totalItem = 0;

      state.cart.forEach((item) => {
        totalAmount += item.price * (item.quantity || 1);
        totalItem += item.quantity || 1;
      });

      return {
        ...state,
        total_amount: Number(totalAmount) || 0,
        total_item: Number(totalItem) || 0,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
