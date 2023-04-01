import PropTypes from 'prop-types'

const ArrowButtonRight = ({onClick}) => {

  return <button 
  onClick={onClick} 
  className='arrow-btn-right'
  />
}

ArrowButtonRight.propTypes = {
  onClick: PropTypes.func
}

export default ArrowButtonRight