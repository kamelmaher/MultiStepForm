import { configureStore } from "@reduxjs/toolkit";
import ShowSlice from "./ShowSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import planSlice from "./PlanSlice";


export const store = configureStore({
    reducer:{
        show:ShowSlice,
        plan: planSlice
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;