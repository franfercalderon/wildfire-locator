import Map from "../Map/Map"
import Loader from "../Loader/Loader"
import { useState, useEffect } from "react"

export default function MapContainer ({currentLocation}) {

    //States
    const [loading, setLoading] = useState(false)
    const [eventInfo, setEventInfo] = useState([])

    //Default props for loading component
    const defaultProps = {
        center:{

            lat: -22.565278,
            lng: -65.351111
        },
        zoom: 3.5
    }

    //This will be executed when the component is mounted
    useEffect(()=>{

        const fetchEvents = async () => {

            //Turns loading to true when starting
            setLoading(true)
            
            //Fetchs events from NASA API
            const res = await fetch(process.env.REACT_APP_NASA_API_URL)
            const {events} = await res.json()

            //Sets eventInfo and loading to false
            setEventInfo(events)
            setLoading(false)
        }

        //Executes fetch function
        fetchEvents()

    },[])


    return(
        <>
            {!loading ?
                <Map defaultProps={defaultProps} currentLocation={currentLocation} eventInfo={eventInfo}/> :
                <Loader/>
            }
        </>



    )

}