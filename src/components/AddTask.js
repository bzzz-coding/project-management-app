import { useState } from 'react'


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const [priority, setPriority] = useState('none')
  const [progress, setProgress] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder, priority, progress })

    // clear the fields by resetting state
    setText('')
    setDay('')
    setReminder(false)
    setPriority('none')
    setProgress(0)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      {/* priority */}
      <div className="form-control">
        <label>Priority</label>
        <select className='select-menu' name='priority' value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value='none'>Select Priority Level</option>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>
      </div>

      {/* progress */}
      <div className="form-control">
        <label>Progress</label>
        <input required type='number' min='0' max='100' placeholder='Progress' value={progress} onChange={(e) => setProgress(e.target.value)} />
        {/* <progress value={progress} max='100'></progress> */}
        <div className="progress-bar w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: `${progress}%`}}></div>
        </div>
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      <input className="btn btn-block" type='submit' value='Save Task' />
    </form>
  )
}

export default AddTask