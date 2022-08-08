import React from 'react'
import PropTypes from 'prop-types'
const Card = ({children, reverse}) => {
  return (

    //Conditional class
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>

  )
}

Card.defaultProps = {
  reverse: false
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card