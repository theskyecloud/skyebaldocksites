import PropTypes from 'prop-types'

const TabButtonHalf = ({ text, onClick }) => {

  return <button 
  onClick={ onClick } 
  className='tab-btn-half'
  >{text}</button>
}

TabButtonHalf.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.string,
  onClick: PropTypes.func
}

export default TabButtonHalf