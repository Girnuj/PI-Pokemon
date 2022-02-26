import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className='container'>
        <div className='ring'></div>
        <div className='ring'></div>
        <div className='ring'></div>
        <p className='p'>Loading...</p>
    </div>
  )
}

export default Loading