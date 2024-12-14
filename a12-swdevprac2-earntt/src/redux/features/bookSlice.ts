import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//build initial state
type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = {bookItems: []};
export const bookSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addBooking : (state, action: PayloadAction<BookingItem>) => {
            if(state.bookItems.length  > 1){
                state.bookItems.shift();
            }
            state.bookItems.push(action.payload);
        },
        removeBooking: (state, action: PayloadAction<string>) => {
            const ID = action.payload;
            const remainItems = state.bookItems.filter(obj => obj.id !== ID);
            state.bookItems = remainItems;
        }
    }
})

export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer