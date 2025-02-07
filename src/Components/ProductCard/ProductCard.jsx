import React from 'react'

export default function ProductCard({ productInfo }) {
    const {
        title,description,images,type,price_per_day
       
    } = productInfo;
    return (
        <>
            <div className='col-md-4 col-span-3 flex flex-col border border-gray-300 p-4 rounded-md'>
                <img src={images.length >0 ? images[0].url:''} className='w-full h-[300px]' alt="" />
                <h2 className='text-cyan-600'>{title}</h2>
                <p>{description}</p>
                <p className='text-cyan-600'>{type}</p>
                <p>{price_per_day

                }</p>



            </div>
        </>
    )
}
