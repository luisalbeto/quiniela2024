import { useTasks } from '../context/TaskContext'
import { useEffect } from 'react'

export function ScoreList() {
  const { task, getTasks } = useTasks()
  useEffect(() => {
    getTasks()
  },[])

  return<div>Scores List</div>
}

export default ScoreList