import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import { cartSliceReducer } from "./slices/cartSlice";

const rootReducer = combineReducers({
  cart: cartSliceReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
