import React from 'react'

function Header() {
  return (
      <div className='bg-slate-950 h-12 flex justify-between px-5 items-center mb-10'>
        <div className='text-white text-2xl'>CampusInfo</div>
        <div className='flex gap-x-3' >
        <div className='text-white'>About App</div>
        <div className='text-white'>Profile</div>
        <div className='text-white'>Logout</div>
        </div>
      </div>
  )
}

export default Header
