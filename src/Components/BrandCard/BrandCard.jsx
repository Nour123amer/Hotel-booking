import React from 'react'

export default function BrandCard({brandInfo}) {
    let {firstName,lastName,image,email,phone, gender} = brandInfo;
  return (
    <>
           <div className='col-md-4 col-span-3 flex flex-col border border-gray-400 p-4 rounded-md'>
                <img src={image} alt="" />
                <h2 className='text-cyan-600'>{firstName}{lastName}</h2>
                <p>Gender :{gender}</p>
                <p>Email :{email}</p>
                <p>Phone : {phone}</p>
             

            </div>
    </>
  )
}
