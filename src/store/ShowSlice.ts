import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type ShowState = {
    show: number,
    next :number
}
const initialState:ShowState = {
    show: 1,
    next: 0,
}

export const ShowSlice = createSlice({
    name: "Show",
    initialState,
    reducers: {
        addShow:(state , action:PayloadAction<ShowState>)=>{
            if(state.show == 5 && action.payload.show >0)
                state.show = 5
            if(state.show == 1 && action.payload.show < 0)
                state.show = 1
            else if (action.payload.next == 1 && action.payload.show > 0)
                state.show += action.payload.show;
        },
        addNext:(state , action:PayloadAction<boolean>) => {
            if(action.payload)
                state.next = 1;
        },
    }
}) 

export default ShowSlice.reducer;
export const {addShow , addNext} = ShowSlice.actions