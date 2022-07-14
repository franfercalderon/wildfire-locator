import SearchBar from "../SearchBar/SearchBar"
  

export default function Header ({updateLocation}) {


    return(
        <header className='header-container'>
            <h1>Incendios Forestales</h1>
            <SearchBar updateLocation={updateLocation}/>
        </header>
    )
}