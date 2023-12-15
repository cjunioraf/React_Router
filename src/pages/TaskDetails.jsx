import { useParams } from "react-router-dom"

const TaskDetails = () => {

    const {taskId} = useParams();

  return (
    <div>
        <h1>Tarefa {taskId}</h1>
    </div>
  )
}

export default TaskDetails