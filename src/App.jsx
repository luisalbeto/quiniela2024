import { Routes, Route, useNavigate } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { useEffect } from "react"
import { client } from "./supabase/client"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import { TaskContextProvider } from "./context/TaskContext";
import { AuthProvider } from "./context/AuthContext";
import Quiniela from "./pages/Quiniela"




function App() {
  const navigate = useNavigate();

  useEffect(() => {
    client.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/Login");
      }
    });
  }, [navigate])

  return (
    <>
   <AuthProvider>
      <TaskContextProvider>
        <Nav/>
          <div className="container">
            <Routes >
              <Route path="/" element={<Home/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/Quiniela" element={<Quiniela/>}/>
            </Routes>
          </div>
        <Footer/> 
     </TaskContextProvider>
    </AuthProvider>
         
    </>
  )
}

export default App
