import React from 'react'


function HomeLayout() {
  return (
    <div className='bg-slate-900 min-h-screen'>
      <div className='bg-slate-950 h-12 flex justify-between px-5 items-center mb-10'>
        <div className='text-white text-2xl'>CampusInfo</div>
        <div className='text-white'>About App</div>
      </div>
      <div className='bg-slate-800 p-5 mb-10 rounded-2xl mx-2'>
          <img src="listview.jpeg" alt="listview" className='h-40 ' />
          <p className='text-white text-2xl text-center mt-3' >List view</p>
      </div>
      <div className='bg-slate-800 p-5 rounded-2xl mx-2'>
          <img src="listview.jpeg" alt="listview" className='h-40 ' />
          <p className='text-white text-2xl text-center mt-3' >Map view</p>
      </div>
    </div>
  )
}

export default HomeLayout
