import { Grid, Paper } from '@mui/material'
import './styles.css'
import React from 'react'

export default function DetailPodcastSidebar({ data }) {
  return (
    <Paper elevation={3}>
      <Grid container>
        <Grid item xs={12} textAlign='center'>
          <img className='detailPodcastSidebar-img' src={data['im:image'][2].label} alt={``}/>
        </Grid>
        <Grid item xs={12} textAlign='center' padding={1}>
          <h3 className='detailPodcastSidebar-title'>{ data.title.label}</h3>
          <h3 className='detailPodcastSidebar-subTitle'>by { data['im:artist'].label }</h3>
        </Grid>
        <Grid item xs={12} textAlign='left' padding={1}>
          <h5 className='detailPodcastSidebar-description'>Description:</h5>
          <p className='detailPodcastSidebar-p'>{ data.summary.label }</p>
        </Grid>
      </Grid>
    </Paper>
  )
}
