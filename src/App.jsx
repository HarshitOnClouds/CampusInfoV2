import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import {login,logout} from './store/authSlice'
import { SignupLogin, HomeLayout,Map } from "./components/index"


function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()


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
      <div>
        {/* <SignupLogin/> */}
        {/* <HomeLayout/> */}
        <Map/>
      </div>
      )
  }
}

export default App
