import React from 'react'
import { useParams } from 'react-router-dom'

function Thankyou() {

  const {title} = useParams()
  return (
    <div className="flex justify-center items-center bg-[url('https://res.cloudinary.com/dptc4np08/image/upload/v1719832389/samples/landscapes/nature-mountains.jpg')] min-w-full min-h-screen">
      <h1 className='text-5xl font-extrabold text-gray-300'>{`Thank you for your interest in ${title}!`}</h1>
    </div>
  )
}

export default Thankyou
