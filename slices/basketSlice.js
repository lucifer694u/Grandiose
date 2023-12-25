import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      if (index >= 0) {
        // Create a new array without the removed item
        return {
          ...state,
          items: [
            ...state.items.slice(0, index),
            ...state.items.slice(index + 1),
          ],
        };
      } else {
        console.warn(
          `Can't remove from basket (id:${action.payload.id}) as it is not in the basket`
        );
        return state;
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export const selectTotal = (state) => {
  const total = state.basket.items.reduce((total, item) => {
    const price = typeof item.price === "number" ? item.price : 0;

    return total + price;
  }, 0);

  return total;
};

export default basketSlice.reducer;
