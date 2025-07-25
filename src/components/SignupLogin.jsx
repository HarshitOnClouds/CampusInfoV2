import React, { useState } from 'react'


function SignupLogin() {

  const [tab,SetTab] = useState('Sign Up')

  return (
    <div className='py-4 px-2 bg-slate-900 min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-white'>CampusInfo</h1>
      <h2 className='text-xl mb-10 text-white'>for whatever there is around you</h2>
      <div className='bg-white px-3 py-4 rounded-3xl'>
        <div className='bg-neutral-500  mb-5 flex rounded-2xl justify-around'>
          <div onClick={()=>SetTab('Sign Up')} className={`px-6 transition-all transform duration-200 text-white rounded-l-2xl py-2 ${tab==='Sign Up' ? 'bg-blue-800':''}`} >
            Sign Up
          </div>
          <div onClick={()=>SetTab('Login')} className={`px-8 text-white transition-all transform duration-200 rounded-r-2xl py-2 ${tab==='Login' ? 'bg-blue-800':''}`}  >
            Login
          </div>
        </div>
        <div className={` ${tab==='Sign Up' ? '' : 'max-h-0 opacity-0' } `}>
          <form className='flex flex-col gap-y-3 ' >
            <input type="text" placeholder='Username' className='border-2 rounded-2xl px-3 py-2 ' />
            <input type="email" placeholder='Email' className='border-2 rounded-2xl px-3 py-2 ' />
            <input type="password" placeholder='Password' className='border-2 rounded-2xl px-3 py-2 ' />
            <button type='submit' className='bg-blue-500 rounded-[7px] px-3 py-2'>Create Account</button>
          </form>
        </div>
        <div className={` ${tab==='Login' ? '' : 'max-h-0 opacity-0' } `}>
          <form className='flex flex-col gap-y-3 ' >
            <input type="email" placeholder='Email' className='border-2 rounded-2xl px-3 py-2 ' />
            <input type="password" placeholder='Password' className='border-2 rounded-2xl px-3 py-2 ' />
            <button type='submit' className='bg-blue-500 rounded-[7px] px-3 py-2'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupLogin
