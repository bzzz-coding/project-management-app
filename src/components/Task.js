import {Link} from 'react-router-dom'
import { FaTimes, FaStar } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    // Use template literal for classes (if reminder is true, add reminder class, or )
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      {/* state gets passed down, event gets passed up */}
      <h3>{task.text} <FaTimes style={{color: 'Salmon', curser: 'pointer'}} onClick={() => onDelete(task.id)} /></h3>
      <p>{task.day}</p>
      {task.priority && task.priority === 'high' && <p><FaStar style={{display:'inline', color: 'salmon'}} /><FaStar style={{display:'inline', color: 'salmon'}} /><FaStar style={{display:'inline', color: 'salmon'}} /></p>}
      {task.priority && task.priority === 'medium' && <p><FaStar style={{display:'inline'}} /><FaStar style={{display:'inline'}} /></p>}
      {task.priority && task.priority === 'low' && <p><FaStar style={{display:'inline'}} /></p>}
      <div className="progress-bar w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-green-200 h-2.5 rounded-full dark:bg-purple-500" style={{width: `${task.progress}%`}}></div>
        </div>
      <p><Link to={`/task/${task.id}`}>View Details</Link></p>
    </div>
  )
}

export default Task

