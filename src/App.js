import { useState } from "react";
import Header from "./components/Header/Header"
import MapContainer from "./components/MapContainer/MapContainer";

function App() {


  //States
  const [currentLocation, setCurrentLocation] = useState({
    center:{
      lat: -22.565278,
      lng: -65.351111
    },
    zoom: 3.5
  })

  return (
    <>
      <Header setCurrentLocation={setCurrentLocation}/>
      <MapContainer currentLocation={currentLocation}/>
    </>
  )


}

export default App;
