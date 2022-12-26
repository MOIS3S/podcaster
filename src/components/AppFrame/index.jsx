import './styles.css';
import React from 'react'

const AppFrame = ({ children, loading }) => {
  return (
    <>
      <div className='container-appFrame'>
        <a className='header-title' href='./'>Podcaster</a>
        {Boolean(loading) && <span className='loader'></span>}
      </div>
      {children}
    </>
  )
}

export default AppFrame
