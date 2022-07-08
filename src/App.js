import Header from "./components/Header/Header";
// import Map from "./components/Map/Map";
import MapContainer from "./components/MapContainer/MapContainer";
// import GoogleMapReact from 'google-map-react'

function App() {
  return (
    <>
      <Header/>
      <MapContainer/>
      {/* <Map key={process.env.REACT_APP_MAPS_API_KEY}/> */}
    </>
  )

//   const defaultProps = {
//     center:{
//         lat: 18.565278,
//         lng: 85.351111
//     },
//     zoom: 5
// }
//   return(

//     <div className='map'>
//         <GoogleMapReact
//             // bootstrapURLKeys={process.env.REACT_APP_MAPS_API_KEY}
//             bootstrapURLKeys={{key:'AIzaSyCnnchiIOr2fraFNDhe7Pkv-RqJPEvUKeE'}}
//             defaultCenter={defaultProps.center}
//             defaultZoom={defaultProps.zoom}
//         >
//           {/* <LocationMarker key={index} lat={defaultProps.center.lat} lng={defaultProps.center.lng}  /> */}

//         </GoogleMapReact>
//     </div>
// )
}

export default App;
