import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card/Card'

const AboutPage = () => {
  return (
    <Card>
        <div className='about'>
            <h1>About This Project</h1>
            <p>This is a feedback app to leave a review for a product or service</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link exact to='/'>Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage