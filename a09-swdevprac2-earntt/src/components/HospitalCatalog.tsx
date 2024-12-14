import Card from "./Card"
import { Link } from "@mui/material"

export default async function HospitalCatalog({hospitalsJson}:{hospitalsJson: Promise<HospitalJson>}) {
    const hospitalsJsonReady = await hospitalsJson;
    return (
        <>
            Explore {hospitalsJsonReady?.count} hospitals in our catalog
            <div style={{margin: "20px", display: "flex", flexDirection: "row", 
            flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
                {
                    hospitalsJsonReady.data.map((hospitalItem:HospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}