import { useEffect } from "react"
import { client } from "../supabase/client"
import { useNavigate, Link } from "react-router-dom";
import ScoreForm from "../components/ScoreForm";



export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!client.auth.getUser()) {
      navigate("/Login");
    }
  }, [navigate]);


  return(
  
  <>
    <main 
	className="
		min-h-screen
		flex 
		items-center 
		justify-center 
		bg-gradient-to-b 
		from-sky 
		to-blue">
        <div className="w-full md:w-1/2 bg-white p-8 rounded shadow">
		<div className="flex items-center font-bold justify-center">
            Registro de Usuario exitoso
		</div>
            <div className="mb-4">
              <label className="block text-gray text-sm font-bold mb-2">
				
				      </label>
              
            </div>
            <div className="flex items-center justify-center">
            <button className="bg-blue hover:bg-blue/70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => client.auth.signOut()}>
        Logout
    </button>
            </div>
        </div>
        
      <ScoreForm/>
      </main>


  

  </>
  )  
}

export default Home
