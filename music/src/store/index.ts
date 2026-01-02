import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./modules/counter";
import { TypedUseSelectorHook, useSelector ,useDispatch,shallowEqual} from "react-redux";

const store = configureStore({
  reducer: {
    counter: couterReducer,
  },
});

type GetstateFnType= typeof store.getState;
type IrootState = ReturnType<GetstateFnType>;
type DispatchType = typeof store.dispatch;



// useAppSelector的hooks
export const useAppSelector:TypedUseSelectorHook<IrootState> = useSelector;
export const useAppDispatch:()=>DispatchType = useDispatch;
export const shallowEqualApp = shallowEqual;
export default store;