import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import {login,logout} from './store/authSlice'
import { SignupLogin } from "./components/index"


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
    return <div> Loading </div>
  }  else {
    return 
    <div>
      loaded
      <SignupLogin/>
    </div>
  }
}

export default App
