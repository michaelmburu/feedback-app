import React from 'react'
import Card from '../shared/Card/Card'
import PropTypes from 'prop-types'
import {FaTimesCircle} from 'react-icons/fa'
const FeedbackItem = ({item, handleDelete}) => {

    return (
            <Card>
                <div className='num-display'>{item.rating}</div>
                <button onClick={() => handleDelete(item.id)} className='close'>
                    <FaTimesCircle color='purple' />
                </button>
                <div className='text-display'>{item.text}</div>
            </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem