import { useEffect } from "react"
import { client } from "../supabase/client"
import { useNavigate } from "react-router-dom";




export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!client.auth.getUser()) {
      navigate("/Login");
    }
  }, [navigate]);
  return(
    <div>
      Home

      <button onClick={() => client.auth.signOut()}>
        Logout
      </button>

    </div>
  )
}

export default Home