'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs" 
import { Select, MenuItem } from "@mui/material"

export default function DateReserve() {
    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            
            <Select variant="standard" name="hospital" id="hospital" className="py-6 h-[2em] w-[200px]">
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>
            </LocalizationProvider>

        </div>
    )
}