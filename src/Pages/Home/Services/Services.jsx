import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]= useState([])

useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])


    return (
        <div className='text-center'>
            <p className="font-bold py-2 text-base text-orange-600">Service</p>
            <h1 className="text-6xl py-2 font-bold text-black">Our Service Area</h1>
            <p className="text-sm py-2 w-3/5 mx-auto text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 text-start'>
            {
                services.map(service=><ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
                }
        </div>

            
        </div>
    );
};

export default Services;