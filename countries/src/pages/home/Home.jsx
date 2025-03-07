import React from 'react'
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container items-center max-w-6xl mx-auto px-2 py-32">
      <div className='flex items-center'>
        <div className='flex flex-col w-1/2 space-y-5'>
          <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>Explore Countries with <span className='block text-blue-800'>Real-Time Data</span></h1>
          <p className='text-base text-gay-500 ml-6 max-w-[350px]'>Discover details about every country around the world – from capitals to regions!</p>
          <div className='flex items-center space-x-4'>
            <Link className={'flex items-center justify-center px-6 py-3 text-lg text-white bg-blue-600 rounded-md hover:bg-blue-700'} to="/countries">Explore Now</Link>
            <Link className={'flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600'} to="/about">Learn More</Link>
          </div>
        </div>
        <div className='w-1/2'>
          <img src="../../../public/img/screen-0.webp"  className={'overflow-hidden rounded-md shadow-xl'}  alt="" />
        </div>
      </div>
    </div>
  )
}
