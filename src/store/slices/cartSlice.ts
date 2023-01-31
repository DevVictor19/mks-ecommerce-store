import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../components/ProductCard";

export interface StateProduct extends Product {
  quantity: number;
}

export interface CartState {
  products: StateProduct[];
  totalItems: number;
  totalAmount: number;
}

const initialState: CartState = {
  products: [],
  totalItems: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const enteredProduct = action.payload;

      const repeatedProduct = state.products.find(
        (product) => product.id === enteredProduct.id
      );

      if (repeatedProduct) {
        repeatedProduct.quantity += 1;
      } else {
        state.products.push({ ...enteredProduct, quantity: 1 });
      }

      state.totalItems += 1;
      state.totalAmount += +enteredProduct.price;
    },
    incrementProduct: (state, action: PayloadAction<{ id: number }>) => {
      const enteredId = action.payload.id;

      const targetProduct = state.products.find(
        (product) => product.id === enteredId
      );

      if (!targetProduct) {
        throw new Error(
          `Product of id:${enteredId} does not exists in cart to be incremented`
        );
      }

      targetProduct.quantity += 1;

      state.totalItems += 1;
      state.totalAmount += +targetProduct.price;
    },
    decrementProduct: (state, action: PayloadAction<{ id: number }>) => {
      const enteredId = action.payload.id;

      const targetProduct = state.products.find(
        (product) => product.id === enteredId
      );

      if (!targetProduct) {
        throw new Error(
          `Product of id:${enteredId} does not exists in cart to be decremented`
        );
      }

      if (targetProduct.quantity === 1) {
        const updatedProductsState = state.products.filter(
          (product) => product.id !== enteredId
        );

        state.products = updatedProductsState;
      } else {
        targetProduct.quantity -= 1;
      }

      state.totalItems -= 1;
      state.totalAmount -= +targetProduct.price;
    },
    removeProduct: (state, action: PayloadAction<{ id: number }>) => {
      const enteredId = action.payload.id;

      const targetProduct = state.products.find(
        (product) => product.id === enteredId
      );

      if (!targetProduct) {
        throw new Error(
          `Product of id:${enteredId} does not exists in cart to be removed`
        );
      }

      const updatedProductsState = state.products.filter(
        (product) => product.id !== enteredId
      );

      state.products = updatedProductsState;

      state.totalItems -= targetProduct.quantity;
      state.totalAmount -= +targetProduct.price * targetProduct.quantity;
    },
  },
});

export const { addProduct, incrementProduct, decrementProduct, removeProduct } =
  cartSlice.actions;

export const cartSliceReducer = cartSlice.reducer;
