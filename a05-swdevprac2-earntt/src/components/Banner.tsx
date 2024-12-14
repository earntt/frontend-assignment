import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className="block p-[5px] m-0 w-[100vw] h-[80vh] relative">
            <Image src={'/img/cover.jpg'} 
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