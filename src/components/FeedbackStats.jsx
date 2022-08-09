import React from 'react'
import PropTypes from 'prop-types'

const FeedbackStats = ({feedback}) => {

    //Calculate ratings average. Takes in accumulator, current and default = 0
    let average = feedback.reduce((accumulator, current) => {
        return accumulator + current.rating
    }, 0) / feedback.length
    
    // Set to 1 decimal place and remove any trailing zeros
    average = average.toFixed(1).replace(/[.,]0$/, '')

    console.log(average)
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats