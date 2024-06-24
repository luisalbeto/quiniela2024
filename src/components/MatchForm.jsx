import { useState } from "react";
import { client } from "../supabase/client";


function MatchForm () {
  const [ local_team , setLocal_team] = useState('')
  const [ visitor_team , setVisitor_team] = useState('')


    const handleSubmit = async e => {
      e.preventDefault()

      try{  
        const result = await client.from('matches').insert({
          local_team: local_team,
          visitor_team: visitor_team   })

    alert("Partido Agreado!");
      }catch(error){
        console.error(error, error.message)
      }
    }

    return(
      <form onSubmit={handleSubmit}
      className="flex items-center justify-center space-x-4">
      <input
      className="w-60 h-10 text-black bg-white rounded text-center font-bold outline-none " 
      type="text" 
      placeholder=""
      onChange={(e) => setLocal_team(e.target.value)} />

<input
      className="w-60 h-10 text-black bg-white rounded text-center font-bold outline-none " 
      type="text" 
      placeholder=""
      onChange={(e) => setVisitor_team(e.target.value)} />

      <button>add</button>
      </form>
    )
  }
  
export default MatchForm