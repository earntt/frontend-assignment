import DateReserve from "@/components/DateReserve"
import { TextField } from "@mui/material"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"

export default async function Booking() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-center text-2xl font-bold text-slate-600 underline decoration-sky-500 pt-5">  
                Vaccine Booking
            </div>

            <div className="text-2xl pt-5">
                {profile.data.name}
            </div>
            <table className="table-auto border-separate border-spacing-3">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{profile.data.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{profile.data.email}</td>
                    </tr>
                    <tr>
                        <td>Tel.</td>
                        <td>{profile.data.tel}</td>
                    </tr>
                    <tr>
                        <td>Member Since</td>
                        <td>{createdAt.toString()}</td>
                    </tr>
                </tbody>
            </table>

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