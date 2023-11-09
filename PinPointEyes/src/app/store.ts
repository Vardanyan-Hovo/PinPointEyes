import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "../features/SliceUser/SliceUser"

export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState> // type RootState = { counter: IUserState;}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
