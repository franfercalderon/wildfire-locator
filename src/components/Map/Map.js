import GoogleMapReact from 'google-map-react'
import Marker from '../Marker/Marker'
import EventDetail from '../EventDetail/EventDetail'
import { useState } from 'react'

export default function Map ({defaultProps, currentLocation, eventInfo}) {

    //States
    const [locationInfo, setLocationInfo] = useState(null)

    //Functions
    const showEventDetail = (event) =>{
        
        //Sets locationInfo with event details
        setLocationInfo(event)

    }

    const closeEventDetail = () => {

        //Sets locationInfo to null, hence the detail will be no longer rendered.
        setLocationInfo(null)
    }

    //Maps eventInfo and returns Marker component for each element with 'Wildfire' id.
    const fireLocations = eventInfo.map((event, index) =>{

        if(event.categories[0].id === 'wildfires'){

            return(
                <Marker key={index} lng={event.geometry[0].coordinates[0]} lat={event.geometry[0].coordinates[1]} onClick={()=>showEventDetail(event)}/>
            )
        }
        return(null)
    })

    return(
        

        <div className='map'>
            {/* {console.log(currentLocation)} */}
            <GoogleMapReact
                bootstrapURLKeys={{key:process.env.REACT_APP_MAPS_API_KEY}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={currentLocation.center}
                zoom={currentLocation.zoom}
            >
                {fireLocations}

            </GoogleMapReact>

            {
                //If locationInfo is true, renders EventDetail
                locationInfo && 
                <EventDetail locationInfo={locationInfo} closeEventDetail={closeEventDetail}/>
            }
        </div>
    )

}