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
		<div>
			<form onSubmit={handleSubmit}>
				<input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
				<button className="font-bold bg-blue">
					Registrarse
				</button>
			</form>
		</div>
	)
}