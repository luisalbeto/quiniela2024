import { Container } from "../components/Container"
import { useNavigate } from 'react-router-dom'
import ScoreForm from "../components/ScoreForm"
import { useEffect } from "react"
import { client } from "../supabase/client"

export function Quiniela () {

  return(
    <>
    <main 
	className="
		min-h-screen
    w-full
		flex 
		items-center 
		justify-center 
		bg-gradient-to-b 
		from-sky 
		to-blue">

<Container>
    <table className="table-auto w-full bg-green mb-8 rounded-lg shadow">
    <thead>
        <tr>
            <th colSpan="9" className="px-4 py-2 font-bold text-center">GRUPO A</th>
        </tr>
        <tr>
            <th className="px-4 py-2 font-bold text-center">Fecha</th>
            <th className="px-4 py-2 font-bold text-center">Hora</th>
            <th className="px-4 py-2 font-bold text-center">Jornada</th>
            <th className="px-4 py-2 font-bold text-center">Local</th>
            <th className="px-4 py-2 font-bold text-center">Marcador</th>
            <th className="px-4 py-2 font-bold text-center">Visitante</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-20</td>
            <td className="px-4 py-2 font-bold text-center">20:00</td>
            <td className="px-4 py-2 font-bold text-center">J1</td>
            <td className="px-4 py-2 font-bold text-center">Argentina </td>
            <td className="px-3 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Canada</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-21</td>
            <td className="px-4 py-2 font-bold text-center">20:00</td>
            <td className="px-4 py-2 font-bold text-center">J1</td>
            <td className="px-4 py-2 font-bold text-center">Perú</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Chile</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-25</td>
            <td className="px-4 py-2 font-bold text-center">18:00</td>
            <td className="px-4 py-2 font-bold text-center">J2</td>
            <td className="px-4 py-2 font-bold text-center">Perú</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Canadá</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-25</td>
            <td className="px-4 py-2 font-bold text-center">21:00</td>
            <td className="px-4 py-2 font-bold text-center">J2</td>
            <td className="px-4 py-2 font-bold text-center">Chile</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Argentina</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-29</td>
            <td className="px-4 py-2 font-bold text-center">19:00</td>
            <td className="px-4 py-2 font-bold text-center">J3</td>
            <td className="px-4 py-2 font-bold text-center">Argentina</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Perú</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-29</td>
            <td className="px-4 py-2 font-bold text-center">17:00</td>
            <td className="px-4 py-2 font-bold text-center">J3</td>
            <td className="px-4 py-2 font-bold text-center">Canadá</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Chile</td>
        </tr>
    </tbody>
    </table>

    <table className="table-auto w-full bg-yellow mb-8 rounded-lg shadow">
    <thead>
        <tr>
            <th colSpan="8" className="px-4 py-2 font-bold text-center text-center">GRUPO B</th>
        </tr>
        <tr>
            <th className="px-4 py-2 font-bold text-center">Fecha</th>
            <th className="px-4 py-2 font-bold text-center">Hora</th>
            <th className="px-4 py-2 font-bold text-center">Jornada</th>
            <th className="px-4 py-2 font-bold text-center">Local</th>
            <th className="px-4 py-2 font-bold text-center">Marcador</th>
            <th className="px-4 py-2 font-bold text-center">Visitante</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-22</td>
            <td className="px-4 py-2 font-bold text-center">18:00</td>
            <td className="px-4 py-2 font-bold text-center">J1</td>
            <td className="px-4 py-2 font-bold text-center">Ecuador</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Venezuela</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-22</td>
            <td className="px-4 py-2 font-bold text-center">21:00</td>
            <td className="px-4 py-2 font-bold text-center">J1</td>
            <td className="px-4 py-2 font-bold text-center">México</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Jamaica</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-26</td>
            <td className="px-4 py-2 font-bold text-center">18:00</td>
            <td className="px-4 py-2 font-bold text-center">J2</td>
            <td className="px-4 py-2 font-bold text-center">Ecuador</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Jamaica</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-26</td>
            <td className="px-4 py-2 font-bold text-center">21:00</td>
            <td className="px-4 py-2 font-bold text-center">J2</td>
            <td className="px-4 py-2 font-bold text-center">Venezuela</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">México</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-30</td>
            <td className="px-4 py-2 font-bold text-center">21:00</td>
            <td className="px-4 py-2 font-bold text-center">J3</td>
            <td className="px-4 py-2 font-bold text-center">Jamaica</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Venezuela</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-30</td>
            <td className="px-4 py-2 font-bold text-center">21:00</td>
            <td className="px-4 py-2 font-bold text-center">J3</td>
            <td className="px-4 py-2 font-bold text-center">México</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Ecuador</td>
        </tr>
    </tbody>
    </table>

    </Container>

    <Container>
    <table className="table-auto w-full bg-orange/70 mb-8 rounded-lg shadow">
    <thead>
        <tr>
            <th colSpan="8" className="px-4 py-2 text-center">GRUPO C</th>
        </tr>
        <tr>
            <th className="px-4 py-2 font-bold text-center">Fecha</th>
            <th className="px-4 py-2 font-bold text-center">Hora</th>
            <th className="px-4 py-2 font-bold text-center">Jornada</th>
            <th className="px-4 py-2 font-bold text-center">Local</th>
            <th className="px-4 py-2 font-bold text-center">Gol</th>
            <th className="px-4 py-2 font-bold text-center">Visitante</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-23</td>
            <td className="px-4 py-2 font-bold text-center">18:00</td>
            <td className="px-4 py-2 font-bold text-center">J1</td>
            <td className="px-4 py-2 font-bold text-center">EEUU</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm type="number" min="0" max="10"/></td>
            <td className="px-4 py-2 font-bold text-center">Bolivia</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-23</td>
            <td className="px-4 py-2 font-bold text-center">20:00</td>
            <td className="px-4 py-2 font-bold text-center">J1</td>
            <td className="px-4 py-2 font-bold text-center">Uruguay</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm type="number" min="0" max="10"/></td>
            <td className="px-4 py-2 font-bold text-center">Panamá</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-27</td>
            <td className="px-4 py-2 font-bold text-center">18:00</td>
            <td className="px-4 py-2 font-bold text-center">J2</td>
            <td className="px-4 py-2 font-bold text-center">Panamá</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm type="number" min="0" max="10"/></td>
            <td className="px-4 py-2 font-bold text-center">EEUU</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-27</td>
            <td className="px-4 py-2 font-bold text-center">21:00</td>
            <td className="px-4 py-2 font-bold text-center">J2</td>
            <td className="px-4 py-2 font-bold text-center">Uruguay</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm type="number" min="0" max="10"/></td>
            <td className="px-4 py-2 font-bold text-center">Bolivia</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-07-01</td>
            <td className="px-4 py-2 font-bold text-center">19:00</td>
            <td className="px-4 py-2 font-bold text-center">J3</td>
            <td className="px-4 py-2 font-bold text-center">Bolivia</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm type="number" min="0" max="10"/></td>
            <td className="px-4 py-2 font-bold text-center">Panamá</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-07-01</td>
            <td className="px-4 py-2 font-bold text-center">17:00</td>
            <td className="px-4 py-2 font-bold text-center">J3</td>
            <td className="px-4 py-2 font-bold text-center">EEUU</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm type="number" min="0" max="10"/></td>
            <td className="px-4 py-2 font-bold text-center">Uruguay</td>
        </tr>
    </tbody>
    </table>

    <table className="table-auto w-full bg-turquesa mb-8 rounded-lg shadow">
    <thead>
        <tr>
            <th colSpan="8" className="px-4 py-2 font-bold text-center text-center">GRUPO D</th>
        </tr>
        <tr>
            <th className="px-4 py-2 font-bold text-center">Fecha</th>
            <th className="px-4 py-2 font-bold text-center">Hora</th>
            <th className="px-4 py-2 font-bold text-center">Jornada</th>
            <th className="px-4 py-2 font-bold text-center">Local</th>
            <th className="px-4 py-2 font-bold text-center">Marcador</th>
            <th className="px-4 py-2 font-bold text-center">Visitante</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-23</td>
            <td className="px-4 py-2 font-bold text-center">18:00</td>
            <td className="px-4 py-2 font-bold text-center">J1</td>
            <td className="px-4 py-2 font-bold text-center">EEUU</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Bolivia</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-23</td>
            <td className="px-4 py-2 font-bold text-center">20:00</td>
            <td className="px-4 py-2 font-bold text-center">J1</td>
            <td className="px-4 py-2 font-bold text-center">Uruguay</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Panamá</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-27</td>
            <td className="px-4 py-2 font-bold text-center">18:00</td>
            <td className="px-4 py-2 font-bold text-center">J2</td>
            <td className="px-4 py-2 font-bold text-center">Panamá</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">EEUU</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-06-27</td>
            <td className="px-4 py-2 font-bold text-center">21:00</td>
            <td className="px-4 py-2 font-bold text-center">J2</td>
            <td className="px-4 py-2 font-bold text-center">Uruguay</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Bolivia</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-07-01</td>
            <td className="px-4 py-2 font-bold text-center">19:00</td>
            <td className="px-4 py-2 font-bold text-center">J3</td>
            <td className="px-4 py-2 font-bold text-center">Bolivia</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Panamá</td>
        </tr>
        <tr>
            <td className="px-4 py-2 font-bold text-center">2024-07-01</td>
            <td className="px-4 py-2 font-bold text-center">17:00</td>
            <td className="px-4 py-2 font-bold text-center">J3</td>
            <td className="px-4 py-2 font-bold text-center">EEUU</td>
            <td className="px-4 py-2 font-bold text-center"><ScoreForm/></td>
            <td className="px-4 py-2 font-bold text-center">Uruguay</td>
        </tr>
    </tbody>
    </table>

    
    </Container>


    </main>
   

    </>
  )
}

export default Quiniela