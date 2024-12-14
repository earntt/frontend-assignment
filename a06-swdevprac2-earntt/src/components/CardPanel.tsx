'use client'
import { useReducer } from "react"
import Card from "./Card"

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

    return (
        <div>
            <div style={{margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
                <Card hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' 
                onRating={ (hospital:string, rating:number)=>dispatchRating({type:'add', hospitalName:hospital, rating:rating}) }
                />
                <Card hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg' 
                onRating={ (hospital:string, rating:number)=>dispatchRating({type:'add', hospitalName:hospital, rating:rating}) }
                />
                <Card hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg' 
                onRating={ (hospital:string, rating:number)=>dispatchRating({type:'add', hospitalName:hospital, rating:rating}) }
                />
            </div>
            <div className='w-full text-center p-[20px]'>
                {Array.from(ratingList).map(([hospital, rating]) => <div data-testid={hospital} key={hospital} onClick={ ()=>dispatchRating( {type:'remove' , hospitalName:hospital , rating:rating} ) }>
                {rating !== null ? `${hospital} : ${rating}` : null} </div> )}
            </div>
        </div>
    )
}