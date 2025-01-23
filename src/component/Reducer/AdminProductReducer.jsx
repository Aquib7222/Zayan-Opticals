export const initialState = JSON.parse(localStorage.getItem("productForm")) || [];

export const AdminProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const updatedAddState = [...state, action.payload];
      localStorage.setItem("productForm", JSON.stringify(updatedAddState));
      return updatedAddState;

    case "DELETE_PRODUCT":
      const updatedDeleteState = state.filter((_, index) => index !== action.payload);
      localStorage.setItem("productForm", JSON.stringify(updatedDeleteState));
      return updatedDeleteState;

    default:
      return state;
  }
};
