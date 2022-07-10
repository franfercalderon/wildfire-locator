import {Icon} from '@iconify/react'
import locationMarker from '@iconify/icons-mdi/fire'

export default function Marker ({onClick}) {

   return(

        <div className='marker-container' onClick={onClick}>
            <Icon icon={locationMarker}/>
        </div>

   ) 
}