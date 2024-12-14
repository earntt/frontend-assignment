import DateReserve from "@/components/DateReserve"
import { TextField } from "@mui/material"

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-center text-2xl font-bold text-slate-600 underline decoration-sky-500 pt-5">  
                Vaccine Booking
            </div>

            <div className="flex flex-row items-center w-fit space-x-5">
                <TextField variant="standard" label="Name-Lastname" name="nameLastname" id="nameLastname" placeholder="Name-Lastname"/>
                <TextField variant="standard" label="Citizen ID" name="citizenId" id="citizenId" placeholder="Citizen ID"/>
            </div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Vaccination Location and Date
                    <DateReserve/>
                </div>
            </div>

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" name="bookvaccine" id="bookvaccine" value="Book Vaccine">
                Book Vaccine
            </button>
        </main>
    )
}