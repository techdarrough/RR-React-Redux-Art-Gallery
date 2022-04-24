import React from 'react'
import Photo from './Photo'
import { clearData, fetchData, incrementId, decrementId, inputId } from '../features/dataSlice'






function ContentWrapper() {

    return (
        <div className="ContentWrapper" style={{'backgroundColor': 'white'}}>
            


            <Photo />


            <div className="buffer"></div>
        </div>
    )
}

export default ContentWrapper
