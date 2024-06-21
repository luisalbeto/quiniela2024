import { useTasks } from '../context/TaskContext'

function ScoreList() {
  const { task } = useTasks()

  return<div>Scores List</div>
}

export default ScoreList