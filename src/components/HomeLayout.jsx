import React from 'react'
import Header from './Header'
import { Link } from 'react-router'
function HomeLayout() {
  return (
    <div className='bg-slate-900 min-h-screen'>
      <Header/>
      <div className='bg-slate-800 p-5 mb-10 rounded-2xl mx-2'>
          <img src="listview.jpeg" alt="listview" className='h-40 ' />
          <p className='text-white text-2xl text-center mt-3' >List view</p>
      </div>
      <div className='bg-slate-800 p-5 rounded-2xl mx-2'>
          <img src="listview.jpeg" alt="listview" className='h-40 ' />
          <Link to="/map" className='text-white text-2xl text-center mt-3' >Map view</Link>
          
      </div>
    </div>
  )
}

export default HomeLayout
