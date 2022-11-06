import { Link } from 'react-router-dom'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    // <footer>
    //     {/* <Link to="/about">About</Link> */}
    //     <p>
    //       &copy; Bitian Zhang, 2022
    //     </p>
    // </footer>
    <footer className="footer footer-center p-10 text-base-content rounded">
      {/* <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div> */}
      <div>
        <div className="grid grid-flow-col gap-4 text-accent-content">
          <a href='https://github.com/bzzz-coding'><FaGithub/></a>
          <a href='https://twitter.com/Bzzz_coding'><FaTwitter/></a>
          <a href='https://www.linkedin.com/in/bitian-zhang/'><FaLinkedinIn/></a>
        </div>
      </div>
      <div>
        <p className='text-accent-content'>Copyright © 2022 Bitian Zhang</p>
      </div>
    </footer>
  )
}

export default Footer