import PropTypes from 'prop-types'


const Button = ({ color, shape, text, onClick }) => {
  return <button
          onClick={onClick}
          className={`btn ${color} ${shape}`}
          >
          {text}
        </button>
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button