import { useState } from 'react'
import moment from 'moment'


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const [priority, setPriority] = useState('none')
  const [progress, setProgress] = useState(0)
  const [note, setNote] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder, priority, progress, note })

    // clear the fields by resetting state
    setText('')
    setDay('')
    setReminder(false)
    setPriority('none')
    setProgress(0)
    setNote('')
  }

  return (
    <form className="form-control md:w-1/2 xl:w-1/3 mx-auto" onSubmit={onSubmit}>
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

      <input className="btn btn-accent my-6 w-36" type='submit' value='Save Project' />
    </form>
  )
}

export default AddTask