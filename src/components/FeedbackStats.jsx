import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackStats = () => {

    const {feedback} = useContext(FeedbackContext)

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

export default FeedbackStats