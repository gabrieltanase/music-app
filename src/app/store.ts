import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from "../components/search/searchSlice";
import albumsReducer from "../components/albums/albumsSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    albums: albumsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
