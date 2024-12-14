'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data:session } = useSession()
    console.log(session?.user.token);
    
    return (
        <div className="block p-[5px] m-0 w-[100vw] h-[80vh] relative" 
        onClick={()=>{ setIndex(index+1) }}>
            <Image src={covers[index%4]}
            alt='cover' 
            fill={true} 
            priority
            objectFit='cover'
            className="blur-[1px]"
            />
            <div className="relative top-[100px] z-20 text-center">
                <h1 className='text-3xl font-bold text-slate-50 drop-shadow-lg'>Vaccine Service Center</h1>
                <h3 className='text-xl font-medium text-slate-100 drop-shadow-lg'>Empowering Communities, One Vaccination at a Time</h3>
            </div>
            {
                session? <div className='z-25 absolute top-5 right-10 font-semibold text-green-500 text-xl'>
                    Welcome {session.user?.name}
                </div> : null
            }
            <button className='bg-white text-cyan-600 border border-cyan-600 
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 
            hover:bg-cyan-600 hover:text-white hover:border-transparent' 
            onClick={(e)=>{e.stopPropagation(); router.push('/hospital');}}>
                Select Hospital
            </button>
        </div>
    )
}