const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "abcxyz",
      quantity: 2,
      unitPrice: 12,
      totalPrice: 24,
    },
  ],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

// Export the ACTIONS
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

// Export the REDUCER
export default cartSlice.reducer;