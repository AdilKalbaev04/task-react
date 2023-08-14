import { flatSlice, restoApi } from "./reducers/restoraunt.reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [restoApi.reducerPath]: restoApi.reducer,
    flat: flatSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restoApi.middleware),
});
