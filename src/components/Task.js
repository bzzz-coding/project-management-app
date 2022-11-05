import { Link } from 'react-router-dom'
import { FaTimes, FaStar } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, showNote, showDetails }) => {
  return (
    // Use template literal for classes (if reminder is true, add reminder class, or )
    // flex w-72 flex-col justify-center
    <div className={`task ${task.reminder ? 'reminder' : ''} card bg-base-100 sm:w-96 md:w-84 rounded-box mx-auto p-4 shadow-xl `} onDoubleClick={() => onToggle(task.id)}>
      <div className='card-body'>
        {/* state gets passed down, event gets passed up */}
        <div className='card-actions justify-end'>
          <FaTimes style={{ color: 'Salmon', curser: 'pointer' }} onClick={() => onDelete(task.id)} />
        </div>
        <h3 className='card-title mb-4'>{task.text} </h3>

        <p>Due: {task.day}</p>
        {task.priority && task.priority === 'high' && <p>Priority: <FaStar className='text-secondary-focus' style={{ display: 'inline' }} /><FaStar className='text-secondary-focus' style={{ display: 'inline' }} /><FaStar className='text-secondary-focus' style={{ display: 'inline' }} /></p>}
        {task.priority && task.priority === 'medium' && <p>Priority: <FaStar className='text-warning' style={{ display: 'inline' }} /><FaStar className='text-warning' style={{ display: 'inline' }} /></p>}
        {task.priority && task.priority === 'low' && <p>Priority: <FaStar className='text-accent-focus' style={{ display: 'inline' }} /></p>}
        <label>Progress:</label>
        <div className="progress-bar w-full mt-1 bg-gray-100 rounded-full h-2.5">
          <div className="bg-neutral h-2.5 rounded-full" style={{ width: `${task.progress}%` }}></div>
        </div>
        {showNote && <div className='mt-2'><label>Note: </label><p className='block w-full mt-1'>{task.note}</p></div>}
        <div className='card-actions justify-end'>
          {showDetails && <Link className="mt-6 btn btn-primary" to={`/task/${task.id}`}>View Details</Link>}
        </div>

      </div>


    </div>
  )
}

export default Task
