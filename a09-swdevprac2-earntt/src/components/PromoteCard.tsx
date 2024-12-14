'use client'

import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { Rating } from "@mui/material"
import useWindowListener from "@/hooks/useWindowListener"

export default function PromoteCard() {

    const [playing, setPlaying] = useState(true)
    // const [rating, setRating] = useState(0)
    // const [pointerPosition, setPointerPosition] = useState({x:0, y:0})

    // useWindowListener("pointermove", (e)=>{
    //     setPointerPosition({x: (e as PointerEvent).clientX, y: (e as PointerEvent).clientY})
    // })
    
    useWindowListener("contextmenu", (e)=>{
        e.preventDefault()
    })

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 
        flex flex-row">
            <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
            <div className="mx-5">
                Get your vaccine today.
                {/* ( {pointerPosition.x} , {pointerPosition.y} ) */}
                <button className="block my-16 w-28 rounded-3xl bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={()=>{setPlaying(!playing)}}>
                    { playing? 'Pause':'Play'}
                </button>
                {/* <Rating className="w-full h-[10%]" value={(rating==undefined)? 0:rating} 
                onChange={(e, newValue)=>{ if(newValue!=null) setRating(newValue)}}/> */}
            </div>
        </div>
    )
}