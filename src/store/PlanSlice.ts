/** @format */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type plan = {
    plan: "monthly" | "yearly",
    price:number
};
const initialState:plan = {
    plan: "monthly",
    price: 0
}

export const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        setPlan: (state, action: PayloadAction<"monthly" | "yearly">) => {
        state.plan = action.payload;
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.price = action.payload
        },
    },
}); 

export default planSlice.reducer;
export const {setPlan , setPrice }= planSlice.actions 