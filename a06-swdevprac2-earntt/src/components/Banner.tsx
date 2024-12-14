'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
    const [index, setIndex] = useState(0)

    return (
        <div className="block p-[5px] m-0 w-[100vw] h-[80vh] relative" 
        onClick={()=>{ setIndex(index+1) }}>
            <Image src={covers[index%3]}
            alt='cover' 
            fill={true} 
            priority
            objectFit='cover'
            className="blur-sm"
            />
            <div className="relative top-[100px] z-20 text-center">
                <h1 className='text-3xl font-bold text-cyan-700'>Vaccine Service Center</h1>
                <h3 className='text-xl font-normal text-cyan-700'>Empowering Communities, One Vaccination at a Time</h3>
            </div>
        </div>
    )
}