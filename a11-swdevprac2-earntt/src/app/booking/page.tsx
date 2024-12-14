'use client'
import { MenuItem, Select, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { addBooking } from "@/redux/features/bookSlice";

export default function Home() {

    const dispatch = useDispatch<AppDispatch>()

    const [name,setName] = useState<string|null>(null)
    const [lastname,setLastName] = useState<string|null>(null)
    const [cid,setCid] = useState<string|null>(null)
    const [hospital,setHospital] =useState('Chula')
    const [pickupDate,setPickupDate] = useState<Dayjs|null>(null);

    const makeBooking = ()=>{
        if(name && lastname && cid && hospital && pickupDate){
        const item: BookingItem={
            name : name,
            surname : lastname,
            id : cid,
            hospital : hospital,
            bookDate : dayjs(pickupDate).format("YYYY/MM/DD")
        }
        dispatch(addBooking(item))
        }
    }

    return (
        <main className="bg-slate-100 m-5 p-5">
        <div className="bg-blue-100 rounded-lg 
        w-full px-10 py-5 flex flex-col justify-center m-7">

            <TextField id="Name" label="Name-Lastname" name="Name-Lastname" variant="standard" className="my-10"
            onChange={(e)=>{setName(e.target.value)}}/>

            <TextField id="LName" label="Lastname" name="Lastname" variant="standard" className="my-10"
            onChange={(e)=>{setLastName(e.target.value)}}/>

            <TextField id="cid" label="Citizen ID" name="Citizen ID" variant="standard" className="my-10"
            onChange={(e)=>{setCid(e.target.value)}}/>

            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker className="bg-white my-5" value={pickupDate}
                onChange={(value)=>{setPickupDate(value);}}/>
            </LocalizationProvider>

            <Select variant="standard" name="hospital" id="hospital" value={hospital}
            className="my-5" onChange={(e)=>{setHospital(e.target.value);}}>
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>

        </div>
        <div className="flex items-center justify-end">
        <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-lg w-1/4 h-[6vh] m-7"
        onClick={makeBooking}>Book Vaccine</button>
        </div>
      </main>
    )
}