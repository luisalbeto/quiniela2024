import { useState } from "react"
import { client } from "../supabase/client"

function ScoreForm () {
    
    const [localScore, setLocalScore] = useState(0)
    const [visitorScore, setVisitorScore] = useState(0)

    const handleSubmit = async e => {
        e.preventDefault()

        try{
            const user = await client.auth.getUser()
            console.log(user)
            
          const result = await client.from("scores").insert({
                local_score: localScore,
                visitor_score: visitorScore,
                userId: user.data.user.id
            })
                     
          console.log(result)

        }catch(error) {
            console.error(error, error.message)
        }
   
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder="Local"
                    onChange={(e) => setLocalScore(e.target.value)} />
                <input 
                    type="number" 
                    placeholder="Visitor"
                    onChange={(e) => setVisitorScore(e.target.value)} />

                    <button>
                        Add
                    </button>
            </form>
        </div>

    )

}

export default ScoreForm