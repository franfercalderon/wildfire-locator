import SearchBar from "../SearchBar/SearchBar"
  

export default function Header ({setCurrentLocation}) {


    return(
        <header className='header-container'>
            <h1>Incendios Forestales</h1>
            <SearchBar setCurrentLocation={setCurrentLocation}/>
        </header>
    )
}