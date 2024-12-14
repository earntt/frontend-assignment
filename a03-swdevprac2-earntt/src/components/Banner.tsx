import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'} 
            alt='cover' 
            fill={true} 
            priority
            objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h1>Vaccine Service Center</h1>
                <h3>Empowering Communities, One Vaccination at a Time</h3>
            </div>
        </div>
    )
}