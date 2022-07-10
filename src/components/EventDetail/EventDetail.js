export default function EventDetail ({locationInfo}){
    console.log(locationInfo)

    return(

        <div className='event-detail-container'>
            <p className='event-title'><strong>Evento: </strong>{locationInfo.title}</p>
            <p className='event-id'><strong>ID: </strong>{locationInfo.id}</p>
            <p><strong>Longitud: </strong>{locationInfo.geometry[0].coordinates[0]}</p>
            <p><strong>Latitud: </strong>{locationInfo.geometry[0].coordinates[1]}</p>
        </div>
    )
}