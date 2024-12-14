import styles from './card.module.css'
import Image from 'next/image'

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/vaccine1.jpg'} 
                alt='Vaccine Picture'
                fill={true}
                objectFit='cover'
                />
            </div>
            <div className={styles.cardtext}>Vaccine</div>
        </div>
    )
}