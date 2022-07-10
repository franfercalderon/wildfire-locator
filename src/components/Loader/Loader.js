import {Icon} from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire'

export default function Loader (){
    return(
        <div className='loader-container'>
            <Icon icon={fireIcon} className='loader-icon'/>
            <div className='loader-spinner'></div>
        </div>
    )
}