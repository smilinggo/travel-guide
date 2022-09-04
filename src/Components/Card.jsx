import dot from '../assets/location-dot.svg'

export default function Card(props) {
    
    return (
        <section className="flex mt-12 ml-12 space-x-12 place-content-center pt-6 w-5/6">
            <div className="w-1/3">
                <img className="object-contain rounded-xl " src={props.imageUrl} />
            </div>
            
            <div className="w-1/3">
            <container className='flex space-x-4 mb-4'>
                <div className='flex space-x-2'>
                    <img className='h-6 inline-block' src={dot} />
                    <h3 className="text-xl ">{props.location}</h3>
                </div>
                <a className='text-xl underline text-[#918E9B]' href={props.googleMapsUrl}><h3>View on Google Maps</h3></a>
            </container>
            <h1 className="font-bold text-4xl mb-6">{props.title}</h1>
            <p className="font-bold text-l mb-4">{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
            </div>
            
        </section>
        
    )
}