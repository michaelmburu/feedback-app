import React from 'react'
import { useState } from 'react'

const FeedbackItem = () => {

    const [rating, setRating] = useState(10);
    const [text, setText] = useState('This is a sample feedback item')  

    return (
            <div className='card'>
                <div className='num-display'>{rating}</div>
                <div className='text-display'>{text}</div>
            </div>
    )
}

export default FeedbackItem