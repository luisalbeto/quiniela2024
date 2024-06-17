import { useState } from "react"
import { client } from "../supabase/client"



export const Login = () => {

	const [ email, setEmail] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const result = await  client.auth.signInWithOtp({
				email,
			})
			console.log(result)
		} catch(error) {
			console.log(error)
		}

		
	}

	return(
		<>
			{/*<form onSubmit={handleSubmit}>
				<input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
				<button className="font-bold bg-blue">
					Registrarse
				</button>
			</form>*/}

<main class="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue to-sky">
        <div class="w-full md:w-1/2 bg-white p-8 rounded shadow">
            
          <h1 class="text-3xl font-extrabold text-center mb-4">Login</h1>
          <form>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Correo Electrónico</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
				type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-blue hover:bg-blue/70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>

			

		</>
	)
}