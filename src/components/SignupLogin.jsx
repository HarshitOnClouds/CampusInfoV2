import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {login as authLogin} from '../store/authSlice'
import { useNavigate } from 'react-router'

function SignupLogin() {
  
  const navigate = useNavigate()
  const [tab,setTab] = useState('Sign Up')
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()

  const [signupData,setSignupData] = useState({
    username: '',
    email:'',
    password:'',
  })

  const [loginData,setLoginData] = useState({
    email: '',
    password:''
  })

  const handleSignupSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const user = await authService.createAccount({
        email: signupData.email,
        username: signupData.username,
        password: signupData.password
      })

      if(user){
        const user = await authService.getCurrentUser()
        if(user) dispatch(authLogin({userData:user}))
          navigate('/home')
      }

    } catch (error) {
      setError('error in creating account',error)
    } finally {
      setLoading(false)
    }
  }

  const handleLoginSubmit = async (e) => {
    e.prevenDefault()
    setError('')
    setLoading(true)

    try {
      const session = await authService.login({
        email: loginData.email,
        password: loginData.password
      })

      if(session){
        const user = await authService.getCurrentUser()
        if(user) dispatch(authLogin({userData:user}))
          navigate('/home')
      }

    } catch (error) {
      setError('error in logging in ',error)
    } finally{
      setLoading(false)
    }

  }

  return (
    <div className='py-4 px-2 bg-slate-900 min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-white'>CampusInfo</h1>
      <h2 className='text-xl mb-10 text-white'>for whatever there is around you</h2>
      <div className='bg-white px-3 py-4 rounded-3xl'>
        <div className='bg-neutral-500  mb-5 flex rounded-2xl justify-around'>
          <div onClick={() => setTab('Sign Up')} className={`px-6 transition-all transform duration-200 text-white rounded-l-2xl py-2 ${tab==='Sign Up' ? 'bg-blue-800':''}`} >
            Sign Up
          </div>
          <div onClick={() => setTab('Login')} className={`px-8 text-white transition-all transform duration-200 rounded-r-2xl py-2 ${tab==='Login' ? 'bg-blue-800':''}`}  >
            Login
          </div>
        </div>

        {error && <div className='text-red-500 text-center mb-3'> there is some error, contact harshitonclouds@gmail.com &nbsp; {error}</div>}

        <div className={`transition-all duration-200 overflow-hidden ${tab==='Sign Up' ? 'opacity-100 max-h-96' : 'max-h-0 opacity-0' } `}>
          <form className='flex flex-col gap-y-3' onSubmit={handleSignupSubmit} >
            <input
              type="text" 
              placeholder='Username' 
              className='border-2 rounded-2xl px-3 py-2 '
              value={signupData.username}
              onChange={(e) => setSignupData({...signupData,username:e.target.value})}
              required
              disabled={loading}
             />
            <input 
              type="email" 
              placeholder='Email' 
              className='border-2 rounded-2xl px-3 py-2 ' 
              value={signupData.email}
              onChange={(e) => setSignupData({...signupData,email:e.target.value})}
              required
              disabled={loading}
            />
            <input 
              type="password" 
              placeholder='Password' 
              className='border-2 rounded-2xl px-3 py-2 ' 
              value={signupData.password}
              onChange={(e) => setSignupData({...signupData,password:e.target.value})}
              required
              disabled={loading}
            />
            <button 
            type='submit' 
            disabled={loading}
            className='bg-blue-500 rounded-[7px] px-3 py-2 hover:bg-blue-600 disabled:opacity-50'>
              {loading ? 'Creating Account...' : 'Create Account'}
              </button>
          </form>
        </div>
        
        <div className={`transition-all duration-200 overflow-hidden ${tab==='Login' ? 'opacity-100 max-h-96' : 'max-h-0 opacity-0' } `}>
          <form className='flex flex-col gap-y-3 ' onSubmit={handleLoginSubmit}>
            <input 
              type="email" 
              placeholder='Email' 
              className='border-2 rounded-2xl px-3 py-2 ' 
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData,email:e.target.value})}
              required
              disabled={loading}
            />
            <input 
              type="password" 
              placeholder='Password' 
              className='border-2 rounded-2xl px-3 py-2 ' 
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData,password:e.target.value})}
              required
              disabled={loading}
            />
            <button 
            type='submit' 
            className='bg-blue-500 rounded-[7px] px-3 py-2'>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupLogin
