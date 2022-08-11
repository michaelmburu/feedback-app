import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FeedbackList from "./components/Feedback/FeedbackList"
import FeedbackForm  from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header/Header"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

    return (
        <FeedbackProvider>
            <BrowserRouter>      
                <Header />          
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={<>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />           
                        </>}>         
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes> 
                    <AboutIconLink />    
                </div>            
            
            </BrowserRouter>
        </FeedbackProvider>
    )
}

export default App