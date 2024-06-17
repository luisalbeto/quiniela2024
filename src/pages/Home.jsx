import { useEffect } from "react"
import { client } from "../supabase/client"



export const Home = () => {
  return(
    <div>
      Home

      <button onClick={() => client.auth.signOut()}>
        Logout
      </button>

    </div>
  )
}