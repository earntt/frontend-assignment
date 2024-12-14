'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs" 
import { Select, MenuItem } from "@mui/material"
import { useState } from "react"

export default function DateReserve() {

    const [reserveDate, setReserveDate] = useState(null);
    const [location, setLocation] = useState('Chula');

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            
            <Select variant="standard" value={location} name="hospital" id="hospital" 
            className="py-6 h-[2em] w-[200px]" 
            onChange={ (e)=>setLocation(e.target.value)}>
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={reserveDate} onChange={ (value)=>setReserveDate(value) }/>
            </LocalizationProvider>

        </div>
    )
}