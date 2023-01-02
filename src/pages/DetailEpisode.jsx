import React from 'react'
import AppFrame from '../components/AppFrame'
import { Grid, Paper, Typography } from '@mui/material'
import DetailPodcastSidebar from '../components/DetailPodcastSidebar'
import { useAppData } from '../context/AppDataProvider';
import { useParams } from 'react-router-dom';

export default function DetailEpisode() {
  const { state } = useAppData();
  const { podcastId } = useParams()
  const { feed: { entry }} = state.context.allPodcasts;
  const infoPodcast = entry.find(item => item.id.attributes['im:id'] === podcastId);

  return (
    <AppFrame>
      <Grid container spacing={2}>
        <Grid item xs={2} marginLeft={15}>
          <DetailPodcastSidebar data={infoPodcast}/>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <Paper elevation={3} style={{ marginBottom: '40px', padding: '40px'}}>
          <Typography variant='h5' fontWeight={900}>Lorem ipsum dolor sit </Typography>
            {<Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cumque aliquid maiores tenetur praesentium excepturi repellendus fugit eum molestiae culpa facere aperiam sunt recusandae cum vero pariatur quia, cupiditate optio!</Typography>}
          </Paper>
        </Grid>
      </Grid>
    </AppFrame>
  )
}
