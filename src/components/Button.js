import PropTypes from 'prop-types'


const Button = ({ color, shape, shadow, text, onClick }) => {
  return <button
          onClick={onClick}
          className={`btn ${color} ${shape} ${shadow}`}
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