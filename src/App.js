import {v4 as uuidv4} from 'uuid'
import { useState } from "react"
import FeedbackList from "./components/Feedback/FeedbackList"
import { FeedbackForm } from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header/Header"
import FeedbackData from "./data/FeedbackData"
function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    const addFeedback = (newFeedback) => {
        // Add id using uuidv4
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackForm handleAddFeedback={addFeedback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>      
        </>
    )
}

export default App