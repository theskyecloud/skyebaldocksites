import PropTypes from 'prop-types'

const TabButton = ({ text, onClick }) => {

  return <button 
  onClick={ onClick } 
  className='tab-btn'
  >{text}</button>
}

TabButton.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.string,
  onClick: PropTypes.func
}

export default TabButton