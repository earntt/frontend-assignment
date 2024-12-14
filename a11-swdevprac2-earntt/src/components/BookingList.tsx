"use client"

import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList(){
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    if(bookItems.length===0){
        return <div className="text-center font-sans text-xl"> No Vaccine Booking</div>
    }
    return (
        <>
        {
            bookItems.map((bookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                key={bookingItem.name}>
                    <div className="text-xl">
                        Name : {bookingItem.name}
                    </div>
                    <div className="text-xl">
                        Lastname : {bookingItem.surname}
                    </div>
                    <div className="text-xl">
                        Citizen ID : {bookingItem.id}
                    </div>
                    <div className="text-xl">
                        Hospital : {bookingItem.hospital}
                    </div>
                    <div className="text-xl">
                        Date : {bookingItem.bookDate}
                    </div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-lg"
                    onClick={()=>dispatch(removeBooking(bookingItem.id))}>Remove from Booking</button>
                    </div>
            ))
        }
        </>
    )
}