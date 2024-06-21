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
        <div className="bg-green/400 rounded-lg shadow p-4 w-64 mx-auto mt-8">
            <form onSubmit={handleSubmit}
                    className="flex items-center justify-center space-x-4">
                <input
                    className="w-10 h-10 text-3xl text-black bg-white rounded-lg text-center font-bold outline-none focus:ring-2 focus:ring-blue/50 focus:ring-opacity-50" 
                    type="number" 
                    placeholder="0"
                    onChange={(e) => setLocalScore(e.target.value)} />
                <input
                    className="w-10 h-10 text-3xl text-black bg-white rounded-lg text-center font-bold outline-none focus:ring-2 focus:ring-blue/50 focus:ring-opacity-50"
                    type="number" 
                    placeholder="0"
                    onChange={(e) => setVisitorScore(e.target.value)} />

                    
            </form>
        </div>

    )

}

export default ScoreForm