import React from 'react'

export default function CateoryCard({categoryInfo}) {
    const {title,icon}= categoryInfo;
  return (
  <>
  <div className='col-md-4 col-span-3 flex flex-col border border-gray-400 p-4 rounded-md'>
    <img src={icon} alt="" />
    <h2 className='text-cyan-600'>{title}</h2>
    {/* <div>{ingredients.map((item)=> <ul>
      <li>{item}</li>
    </ul>)}</div>
    <p>prepTimeMinutes :{prepTimeMinutes}</p>
    <p>cookTimeMinutes : {cookTimeMinutes}</p>
    <p>difficulty: {difficulty}</p>
     */}
  </div>
  </>
  )
}
