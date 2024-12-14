'use client'
import { useReducer, useEffect, useState } from "react"
import Card from "./Card"
import { Link } from "@mui/material"
import getHospitals from "@/libs/getHospitals"

export default function CardPanel() {

    const [hospitalResponse, setHospitalResponse] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            const hospitals = await getHospitals()
            setHospitalResponse(hospitals)
        }
        fetchData()
    }, [])

    const ratingReducer = ( ratingList:Map<string, number>, action:{type:string, hospitalName:string, rating:number} )=>{
        switch(action.type) {
            case 'add' :{
                ratingList.set(action.hospitalName, action.rating)
                return new Map(ratingList)
            }
            case 'remove' : {
                ratingList.delete(action.hospitalName)
                return new Map(ratingList)
            }
            default : return ratingList
        }
    }

    const [ ratingList, dispatchRating ] = useReducer(ratingReducer, new Map<string, number>())

    // Mock Data for Demonstration Only
    // const mockHospitalRepo = [
    //     {hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
    //     {hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"},
    //     {hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"}
    // ]

    if(!hospitalResponse) {
        return (
            <p>Card Panel is Loading ...</p>
        )
    }

    return (
        <div>
            <div style={{margin: "20px", display: "flex", flexDirection: "row", 
            flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
                {/* {
                    hospitalResponse.data.map((hospitalItem:HospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}
                                onRating={ (hospital:string, rating:number)=>dispatchRating({type:'add', hospitalName:hospital, rating:rating}) }
                            />
                        </Link>
                    ))
                } */}
            </div>
            <div className='w-full text-center p-[20px]'>
                {Array.from(ratingList).map(([hospital, rating]) => <div data-testid={hospital} key={hospital} onClick={ ()=>dispatchRating( {type:'remove' , hospitalName:hospital , rating:rating} ) }>
                {rating !== null ? `${hospital} : ${rating}` : null} </div> )}
            </div>
        </div>
    )
}