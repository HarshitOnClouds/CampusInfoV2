import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import authService from "./appwrite/auth"
import {login,logout} from './store/authSlice'
import { SignupLogin, HomeLayout,Map,Header } from "./components/index"
import {Outlet} from 'react-router-dom'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  const authStatus = useSelector(state => state.auth.status)


  useEffect(()=>{
    try {
      authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .finally(()=>setLoading(false))
    } catch (error) {
      console.log('error in getting current user useEffect',error)
    }
  },[])

  if(loading){
    return <div className="bg-slate-950 flex justify-center items-center text-white min-h-screen"> Loading </div>
  }  else {
    return (
        <main>
        <Outlet />
        </main>
      )
  }
}

export default App
