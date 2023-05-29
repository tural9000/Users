import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from './api/api';


const reducers = combineReducers({
  [api.reducerPath]: api.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
//   devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>

