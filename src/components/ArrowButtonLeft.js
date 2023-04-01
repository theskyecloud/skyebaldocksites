import PropTypes from 'prop-types'

const ArrowButtonLeft = ({onClick}) => {

  return <button 
  onClick={onClick} 
  className='arrow-btn-left'
  />
}

ArrowButtonLeft.propTypes = {
  onClick: PropTypes.func
}

export default ArrowButtonLeft