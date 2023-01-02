import { Grid } from '@mui/material';
import './styles.css';
import React from 'react'
import { Link } from 'react-router-dom';

const AppFrame = ({ children, loading }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
      <div className='container-appFrame'>
        <Link to={'/'}><div className='header-title'>Podcaster</div></Link>
        {Boolean(loading) && <span className='loader'></span>}
      </div>
      </Grid>
      {children}
    </Grid>
  )
}

export default AppFrame
