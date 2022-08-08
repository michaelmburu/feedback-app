import { useState } from "react"
import FeedbackItem from "./components/Feedback/FeedbackItem"
import FeedbackList from "./components/Feedback/FeedbackList"
import Header from "./components/Header/Header"
import FeedbackData from "./data/FeedbackData"
function App() {

    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedback={feedback} />
            </div>      
        </>
    )
}

export default App