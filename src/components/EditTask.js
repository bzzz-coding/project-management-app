import { useState } from 'react'
import moment from 'moment'


const EditTask = ({ task, onUpdate }) => {
  const [text, setText] = useState(task.text)
  const [day, setDay] = useState(task.day)
  const [reminder, setReminder] = useState(task.reminder)
  const [priority, setPriority] = useState(task.priority)
  const [progress, setProgress] = useState(task.progress)
  const [note, setNote] = useState(task.note)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add a project')
      return
    }

    onUpdate({ text, day, reminder, priority, progress, note })

    // // clear the fields by resetting state
    // setText('')
    // setDay('')
    // setReminder(false)
    // setPriority('none')
    // setProgress(0)
    // setNote('')
  
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type='text' placeholder='Add Project' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        {/* <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} /> */}
        <input type='date' min={moment().format('YYYY-MM-DD')} placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)}></input>
      </div>
      {/* priority */}
      <div className="form-control">
        <label>Priority</label>
        <select className='select-menu w-full mt-1' name='priority' value={priority} onChange={(e) => setPriority(e.target.value)}>
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
      <label>Note</label>
      <textarea className='w-full mt-1' value={note} onChange={(e) => setNote(e.target.value)}></textarea>
      <input className="btn btn-accent" type='submit' value='Save Changes' />
    </form>
  )
}

export default EditTask