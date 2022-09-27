
import {FaTimes} from 'react-icons/fa'
const Task = ({task,onDelete}) => {
  return (
    <div className='task'>
      <h3>{task.name}<FaTimes onClick={()=>onDelete(task.id)}/></h3>
      <p>{task.id}</p>
      
    </div>
  )
}

export default Task
