import GoogleMapReact from 'google-map-react'
import Marker from '../Marker/Marker'

export default function Map ({defaultProps, eventInfo}) {

    console.log(defaultProps)

    return(

        <div className='map'>
            <GoogleMapReact
                // bootstrapURLKeys={process.env.REACT_APP_MAPS_API_KEY}
                bootstrapURLKeys={{key:process.env.REACT_APP_MAPS_API_KEY}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker lat={-22.565278} lng={ -65.351111}/>

            </GoogleMapReact>
        </div>
    )
}