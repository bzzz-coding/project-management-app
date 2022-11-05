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
    <form className="form-control" onSubmit={onSubmit}>
      <label className="mt-3 label">
        <span className="label-text">Project Title</span>
      </label>
      <input type='text' placeholder='Add Project' value={text} onChange={(e) => setText(e.target.value)} className="input input-bordered w-full" />

      <label className="mt-3 label">
        <span className="label-text">Due Date</span>
      </label>
      <input type='date' min={moment().format('YYYY-MM-DD')} placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} className="input input-bordered w-full" />

      <label className="mt-3 label">
        <span className="label-text">Priority</span>
      </label>
      <select name='priority' value={priority} onChange={(e) => setPriority(e.target.value)} className="select select-bordered">
        <option value='none'>Select Priority Level</option>
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>

      <label className="mt-3 label">
        <span className="label-text">Progress %</span>
      </label>
      <input required type='number' min='0' max='100' placeholder='Progress' value={progress} onChange={(e) => setProgress(e.target.value)} className="input input-bordered w-full" />
      <div className="progress-bar w-full mt-1 bg-gray-100 rounded-full h-2.5">
        <div className="bg-neutral h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>

      <label className="mt-3 label">
        <span className="label-text">Note</span>
      </label>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} className="textarea textarea-bordered h-24" placeholder="Note"></textarea>

      <input className="mt-3 w-1/2 mx-auto btn btn-accent" type='submit' value='Save Changes' />
    </form>
  )
}

export default EditTask