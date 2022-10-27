import { Link } from 'react-router-dom'
import Button from "./Button";

const About = () => {
  return (
    <div className='text-center'>
      
      <h4 className='text-yellow-500'>Version 0.001</h4>
      <Link className='mx-auto' to='/'><Button text='Go Back'/></Link>
    </div>
  )
}

export default About