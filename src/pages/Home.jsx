import { useEffect } from "react"
import { client } from "../supabase/client"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



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
        min-w-screen
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
        <Link 
            to='Quiniela'
             className="bg-blue hover:bg-blue/50 text-white font-bold py-2 px-4 rounded"
         >Ve a la Quiniela</Link>
            <div className="mb-4">
              <label className="block text-gray text-sm font-bold mb-2">
				
				      </label>
              
            </div>
            
        </div>

        <div className="flex items-center justify-center">
            <button className="bg-blue hover:bg-blue/70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => client.auth.signOut()}>
                 Logout
            </button>
            </div>
        
    
      </main>


  

  </>
  )  
}

export default Home
