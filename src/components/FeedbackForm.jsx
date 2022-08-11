import { useState, useEffect, React } from 'react'
import Card from './shared/Card/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button/Button'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'


// Create a rating select component
 const FeedbackForm = () => {

    const [text, setText] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const [validationMessage, setValidationMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {

        if(feedbackEdit.edit === true) {
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    }, [feedbackEdit])
    
    console.log(useContext(FeedbackContext))
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

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
          
            setText('') //Clear text field
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our services?</h2>
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

export default FeedbackForm
