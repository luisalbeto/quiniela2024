import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { useEffect } from "react"
import { client } from "./supabase/client"


function App() {

  useEffect(() => {
    client.auth.onAuthStateChange((event, session) => {
      console.log(event, session)

    }) 
  	},[])

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
        
    </>
  )
}

export default App
