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
<div className="w-full md:w-1/2 bg-white p-8 rounded shadow">
<button className="bg-blue hover:bg-blue/70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => client.auth.signOut()}>
        Logout
    </button>

    <ScoreForm/>

   

</div>

<table className="table-auto w-full bg-green mb-8">
    <thead>
        <tr>
            <th className="px-4 py-2 text-center">A</th>
        </tr>
        <tr>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Hora</th>
            <th className="px-4 py-2">Jornada</th>
            <th className="px-4 py-2">Equipo 1</th>
            <th className="px-4 py-2">Gol</th>
            <th className="px-4 py-2">Gol</th>
            <th className="px-4 py-2">Equipo 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="px-4 py-2">2024-06-20</td>
            <td className="px-4 py-2">20:00</td>
            <td className="px-4 py-2">J1</td>
            <td className="px-4 py-2">Argentina </td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Canada</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-21</td>
            <td className="px-4 py-2">20:00</td>
            <td className="px-4 py-2">J1</td>
            <td className="px-4 py-2">Perú</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Chile</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-25</td>
            <td className="px-4 py-2">18:00</td>
            <td className="px-4 py-2">J2</td>
            <td className="px-4 py-2">Perú</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Canadá</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-25</td>
            <td className="px-4 py-2">21:00</td>
            <td className="px-4 py-2">J2</td>
            <td className="px-4 py-2">Chile</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Argentina</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-29</td>
            <td className="px-4 py-2">19:00</td>
            <td className="px-4 py-2">J3</td>
            <td className="px-4 py-2">Argentina</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Perú</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-29</td>
            <td className="px-4 py-2">17:00</td>
            <td className="px-4 py-2">J3</td>
            <td className="px-4 py-2">Canadá</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Chile</td>
        </tr>
    </tbody>
    </table>

    <table className="table-auto w-full bg-yellow mb-8">
    <thead>
        <tr>
            <th className="px-4 py-2 text-center">B</th>
        </tr>
        <tr>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Hora</th>
            <th className="px-4 py-2">Jornada</th>
            <th className="px-4 py-2">Equipo 1</th>
            <th className="px-4 py-2">Gol</th>
            <th className="px-4 py-2">Gol</th>
            <th className="px-4 py-2">Equipo 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="px-4 py-2">2024-06-22</td>
            <td className="px-4 py-2">18:00</td>
            <td className="px-4 py-2">J1</td>
            <td className="px-4 py-2">Ecuador</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Venezuela</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-22</td>
            <td className="px-4 py-2">21:00</td>
            <td className="px-4 py-2">J1</td>
            <td className="px-4 py-2">México</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Jamaica</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-26</td>
            <td className="px-4 py-2">18:00</td>
            <td className="px-4 py-2">J2</td>
            <td className="px-4 py-2">Ecuador</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Jamaica</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-26</td>
            <td className="px-4 py-2">21:00</td>
            <td className="px-4 py-2">J2</td>
            <td className="px-4 py-2">Venezuela</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">México</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-30</td>
            <td className="px-4 py-2">21:00</td>
            <td className="px-4 py-2">J3</td>
            <td className="px-4 py-2">Jamaica</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Venezuela</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-30</td>
            <td className="px-4 py-2">21:00</td>
            <td className="px-4 py-2">J3</td>
            <td className="px-4 py-2">México</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Ecuador</td>
        </tr>
    </tbody>
    </table>
    
    <table className="table-auto w-full bg-blue/50 mb-8">
    <thead>
        <tr>
            <th className="px-4 py-2 text-center">C</th>
        </tr>
        <tr>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Hora</th>
            <th className="px-4 py-2">Jornada</th>
            <th className="px-4 py-2">Equipo 1</th>
            <th className="px-4 py-2">Gol</th>
            <th className="px-4 py-2">Gol</th>
            <th className="px-4 py-2">Equipo 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="px-4 py-2">2024-06-23</td>
            <td className="px-4 py-2">18:00</td>
            <td className="px-4 py-2">J1</td>
            <td className="px-4 py-2">EEUU</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Bolivia</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-23</td>
            <td className="px-4 py-2">20:00</td>
            <td className="px-4 py-2">J1</td>
            <td className="px-4 py-2">Uruguay</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Panamá</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-27</td>
            <td className="px-4 py-2">18:00</td>
            <td className="px-4 py-2">J2</td>
            <td className="px-4 py-2">Panamá</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">EEUU</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-27</td>
            <td className="px-4 py-2">21:00</td>
            <td className="px-4 py-2">J2</td>
            <td className="px-4 py-2">Uruguay</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Bolivia</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-07-01</td>
            <td className="px-4 py-2">19:00</td>
            <td className="px-4 py-2">J3</td>
            <td className="px-4 py-2">Bolivia</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Panamá</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-07-01</td>
            <td className="px-4 py-2">17:00</td>
            <td className="px-4 py-2">J3</td>
            <td className="px-4 py-2">EEUU</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Uruguay</td>
        </tr>
    </tbody>
    </table>

    <table className="table-auto w-full bg-orange/50 mb-8">
    <thead>
        <tr>
            <th className="px-4 py-2 text-center">D</th>
        </tr>
        <tr>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Hora</th>
            <th className="px-4 py-2">Jornada</th>
            <th className="px-4 py-2">Equipo 1</th>
            <th className="px-4 py-2">Gol</th>
            <th className="px-4 py-2">Gol</th>
            <th className="px-4 py-2">Equipo 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="px-4 py-2">2024-06-24</td>
            <td className="px-4 py-2">18:00</td>
            <td className="px-4 py-2">J1</td>
            <td className="px-4 py-2">Colombia</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Paraguay</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-24</td>
            <td className="px-4 py-2">20:00</td>
            <td className="px-4 py-2">J1</td>
            <td className="px-4 py-2">Brasil</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Costa Rica</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-28</td>
            <td className="px-4 py-2">18:00</td>
            <td className="px-4 py-2">J2</td>
            <td className="px-4 py-2">Colombia</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Costa Rica</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-06-28</td>
            <td className="px-4 py-2">21:00</td>
            <td className="px-4 py-2">J2</td>
            <td className="px-4 py-2">Paraguay</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Brasil</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-07-02</td>
            <td className="px-4 py-2">21:00</td>
            <td className="px-4 py-2">J3</td>
            <td className="px-4 py-2">Brasil</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Colombia</td>
        </tr>
        <tr>
            <td className="px-4 py-2">2024-07-02</td>
            <td className="px-4 py-2">21:00</td>
            <td className="px-4 py-2">J3</td>
            <td className="px-4 py-2">Paraguay</td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2"><input type="number" min="0" max="10"/></td>
            <td className="px-4 py-2">Costa Rica</td>
        </tr>
    </tbody>
    </table>


   
  
  </>
  )  
}

export default Home
