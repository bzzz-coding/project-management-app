import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

// used to pass in props, and then get props.title in h1, now using destructuring
const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = (e) => {
  //   console.log('clicked')
  //   // if pass in event, can log event
  //   console.log(e)
  // }

  const location = useLocation()

  return (
    <header className='navbar flex flex-row justify-between p-9'>
      {/* if want to add inline style to html elements, use style={{comma-separated, jsx camelCase}}, e.g. <h1 style={{ color: 'red', backgroundColor: 'black'}}>{title}</h1> */}
      <a href='/about' className='btn btn-ghost normal-case text-xl font-title'>{title}</a>

      {/* note how to write ternary operator with template literals */}
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'btn-secondary' : 'btn-accent'}
          shape={''}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}


    </header>
  )
}

// set default if nothing passed in
Header.defaultProps = {
  title: 'Project Tracker'
}

// prop types makes code more robust and catches errors
Header.propTypes = {
  // if pass in number 1 as title for Header in App, console shows warning message: "Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `Header`, expected `string`."
  title: PropTypes.string.isRequired,
}

// // Another way of adding inline style is by defining a variable, and pass in style={}, e.g. <h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black"
// }

export default Header