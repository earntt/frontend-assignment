'use client'
import { useReducer } from "react"
import Card from "./Card"
import { Link } from "@mui/material"

export default function CardPanel() {

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
    const mockHospitalRepo = [
        {hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
        {hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"},
        {hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"}
    ]

    return (
        <div>
            <div style={{margin: "20px", display: "flex", flexDirection: "row", 
            flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
                {
                    mockHospitalRepo.map((hospitalItem=>(
                        <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.image}
                                onRating={ (hospital:string, rating:number)=>dispatchRating({type:'add', hospitalName:hospital, rating:rating}) }
                            />
                        </Link>
                    )))
                }
            </div>
            <div className='w-full text-center p-[20px]'>
                {Array.from(ratingList).map(([hospital, rating]) => <div data-testid={hospital} key={hospital} onClick={ ()=>dispatchRating( {type:'remove' , hospitalName:hospital , rating:rating} ) }>
                {rating !== null ? `${hospital} : ${rating}` : null} </div> )}
            </div>
        </div>
    )
}