import {v4 as uuidv4} from 'uuid'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from "react"
import FeedbackList from "./components/Feedback/FeedbackList"
import { FeedbackForm } from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header/Header"
import FeedbackData from "./data/FeedbackData"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

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
        <BrowserRouter>      
            <Header />          
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={<>
                        <FeedbackForm handleAddFeedback={addFeedback}/>
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />           
                    </>}>         
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes> 
                <AboutIconLink />    
            </div>            
          
        </BrowserRouter>
    )
}

export default App