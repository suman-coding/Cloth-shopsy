
import React from 'react'

export default function Analytics() {
  return (
    
    <div className='w-full border-gray-600 py-16 px-4 bg-[#D3F1DF]/50 backdrop-blur-3xl '>

    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

      <img className='w-[500px] mx-auto my-4' src= "laptop.jpg" alt='/' />

      <div className='flex flex-col justify-center'>

        <p className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit
          dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
          eveniet ex deserunt fuga?
        </p>
        <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
      </div>
    </div>
  </div>
  )
}
