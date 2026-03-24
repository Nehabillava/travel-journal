import React from 'react';

export default function Card(props){
    return(
        <div className='card'>
            <img className='card--img' src={`/images/${props.coverImage}`} />

                <div className='card--content'>
                    <div className='card--loc'>
                        <img className='loc--img' src='/images/loc.jpeg' />
                        <span><b>{props.location}</b></span>
                        
                        <a className='link'
                            href={props.googleMapsUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View on Google Maps
                        </a>

                    </div>

                    <h1>{props.title}</h1>

                    <p className='card--date'>
                        {props.startDate} - {props.endDate}
                    </p>

                    <p className='card--desc'>
                        {props.description}

                    </p>
                </div>
        </div>
       
    )
}