import { useState } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

export default function SearchBar ({setCurrentLocation}) {

     //States
     const [address, setAddress] = useState('')

     //Functions
     const handleSelect = async (value) => {

        //Calls PlacesAutocomplete functions to get latitude and longitude from selected address. First converting value string to an array of results, then getting lat and lng from that result.
         const res = await geocodeByAddress(value)
         const latLng = await getLatLng(res[0])

         //Updates states
         setCurrentLocation({
            center: latLng,
            zoom:6
         })
         setAddress(value)
        
     }
    return(
        <>
        <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading})=>(
                    <div>
                        <input {...getInputProps({placeholder:'Ingrese ubicación...' ,className:'search-bar-input'})}/>
                        <div className='suggestion-container'>
                            {suggestions.map((suggestion, index)=>{

                                const style = {
                                    backgroundColor: suggestion.active ? '#1b61ec' : '#fff',
                                    padding: '4px 10px',
                                    color: suggestion.active ? '#fff' : '#171717',
                                    cursor: 'pointer'
                                }

                                return(
                                    <div key={index} {...getSuggestionItemProps(suggestion, {style})}>
                                        {suggestion.description}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                )}

            </PlacesAutocomplete>
        </>
    )
}