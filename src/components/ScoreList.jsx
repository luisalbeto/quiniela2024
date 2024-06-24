import { useTasks } from '../context/TaskContext'
import { useEffect } from 'react'

export function ScoreList() {
  const { scores, getScores, getMatches } = useTasks()
  console.log(scores)
  useEffect(() => {
    getMatches()
    getScores()
  },[])

  return(
  <div>
    
  </div>)
}

export default ScoreList