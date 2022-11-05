import { Link } from 'react-router-dom'
import Button from "./Button";

const About = () => {
  return (
    <div className='text-center'>
      <div className="overflow-x-auto">
        <table className="table w-96 mx-auto shadow-lg">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Icon</th>
              <th>Tool</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td><a href="https://reactjs.org/" target="_blank" rel="noreferrer">
						<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
							alt="react" width="40" height="40" />
					</a></td>
              <td>React</td>
              <td>50%</td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <td><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
						<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40"
							height="40" />
					</a></td>
              <td>TailwindCSS</td>
              <td>20%</td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
									alt="javascript" width="40" height="40" />
							</a></td>
              <td>JavaScript/JSX</td>
              <td>15%</td>
            </tr>
            {/* <!-- row 4 --> */}
            <tr>
              <td><a href="https://reactjs.org/" target="_blank" rel="noreferrer">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1920px-JSON_vector_logo.svg.png"
							alt="JSON" width="40" height="40" />
					</a></td>
              <td>JSON server</td>
              <td>10%</td>
            </tr>
            {/* <!-- row 5 --> */}
            <tr>
              <td><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
								<img
									src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
									alt="html5" width="40" height="40" />
							</a></td>
              <td>HTML</td>
              <td>5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <h4 className='my-6 text-neutral'>Version 0.001</h4>
      <Link className='mx-auto' to='/'><Button text='Return' /></Link>
    </div>
  )
}

export default About