import { Routes, Route, useNavigate } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { useEffect } from "react"
import { client } from "./supabase/client"
import { Nav } from "./components/Nav"


function App() {
  const navigate = useNavigate()

  useEffect(() => {
    client.auth.onAuthStateChange((event, session) => {
      if(!session) {
        navigate('/Login')
      }else {
        navigate('/')
      }

    }) 
  	},[])

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

        
    </>
  )
}

export default App
