import ScoreList from "../components/ScoreList"

export function MyScores() {
  return(
    <>
      <main 
	      className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-b from-sky to-blue overflow-hidden">
          <h1>Mis Marcadores</h1>          
          <ScoreList/>
      </main>

    </>
  )
}

export default MyScores()