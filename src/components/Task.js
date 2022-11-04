import { Link } from 'react-router-dom'
import { FaTimes, FaStar } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, showNote, showDetails }) => {
  return (
    // Use template literal for classes (if reminder is true, add reminder class, or )
    <div className={`task ${task.reminder ? 'reminder' : ''} card bg-base-100 rounded-box mx-auto flex w-72 flex-col justify-center gap-4 p-4 shadow-xl `} onDoubleClick={() => onToggle(task.id)}>
      <div className='card-body'>
        {/* state gets passed down, event gets passed up */}
        <div className='card-actions justify-end'>
          <FaTimes style={{ color: 'Salmon', curser: 'pointer' }} onClick={() => onDelete(task.id)} />
        </div>
        <h3>{task.text} </h3>

        <p>DDL: {task.day}</p>
        {task.priority && task.priority === 'high' && <p>Priority: <FaStar style={{ display: 'inline', color: 'salmon' }} /><FaStar style={{ display: 'inline', color: 'salmon' }} /><FaStar style={{ display: 'inline', color: 'salmon' }} /></p>}
        {task.priority && task.priority === 'medium' && <p>Priority: <FaStar style={{ display: 'inline', color: '#FFC300' }} /><FaStar style={{ display: 'inline', color: '#FFC300' }} /></p>}
        {task.priority && task.priority === 'low' && <p>Priority: <FaStar style={{ display: 'inline', color: '#DAF7A6' }} /></p>}
        <label>Progress:</label>
        <div className="progress-bar w-full mt-1 bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-accent h-2.5 rounded-full dark:bg-purple-500" style={{ width: `${task.progress}%` }}></div>
        </div>
        {showNote && <div className='mt-2'><label>Note: </label><p className='block w-full mt-1'>{task.note}</p></div>}
        <div className='card-actions'>
          {showDetails && <p><Link className="btn btn-primary" to={`/task/${task.id}`}>View Details</Link></p>}
        </div>

      </div>


    </div>
  )
}

export default Task
