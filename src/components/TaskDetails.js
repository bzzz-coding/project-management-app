import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import Task from "./Task";
import EditTask from "./EditTask"
import Button from "./Button";

const TaskDetails = () => {
    const [loading, setLoading] = useState(true)
    const [showEditTask, setShowEditTask] = useState(false)
    const [task, setTask] = useState({})
    // const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
            const data = await res.json()

            if (res.status === 404) {
                navigate('/')
            }

            setTask(data)
            setLoading(false)
        }

        fetchTask()
    })

    // Update Task
  const updateTask = async (updatedTask) => {
    
    const res = await fetch(`http://localhost:5000/tasks/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    // updatedTask
    const data = await res.json()

    // console.log(data.id)
    setTask(data)
  }




    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            <div>
                {/* <p>{pathname}</p> */}
                {/* <h3>{task.text}</h3>
                <p>{task.day}</p> */}
                <Task key={task.id} task={task} showDetails={false} showNote={true} />
                {/* AddTask form, && is a short ternary for no else condition */}
                {showEditTask && <EditTask task={task} onUpdate={updateTask} />}
                <Button onClick={() => setShowEditTask(!showEditTask)} text={showEditTask ? 'Cancel' : 'Edit'} color={showEditTask ? 'btn-secondary' : 'btn-accent'}/>
                <Button onClick={() => {
                    navigate(-1)
                }} text='Return' />
                {/* <Link className='mx-auto' to='/'><Button text='Go Back'/></Link> */}
            </div>

        </div>

    )
}

export default TaskDetails 