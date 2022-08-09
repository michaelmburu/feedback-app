import React from 'react'
import { useState } from 'react'
import Card from './shared/Card/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button/Button'
// Create a rating select component
export const FeedbackForm = ({handleAddFeedback}) => {

    const [text, setText] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const [validationMessage, setValidationMessage] = useState('')

    const handleTextChange = (e) => {
        // Perform validation
        if(text === '') {
            setbtnDisabled(true)
            setValidationMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setValidationMessage('Text must be at least 10 characters')
            setbtnDisabled(true)
        } else {
            setValidationMessage(null);
            setbtnDisabled(false)
        }
        //Set text
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            handleAddFeedback(newFeedback)
            setText('') //Clear text field
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would rate our service?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input value={text} onChange={(e) => handleTextChange(e)} type="text" placeholder='Write a review' />
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {validationMessage && <div className='message'>{validationMessage}</div>}
        </form>
    </Card>
  )
}
