
import './styles.css'
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { getDetailPodcast } from '../../service';
import AppFrame from '../../components/AppFrame';
import DetailPodcastSidebar from '../../components/DetailPodcastSidebar';
import { useAppData } from '../../context/AppDataProvider';
import TablePodcast from '../../components/TablePodcast';
import { Grid, Paper, Typography } from '@mui/material';


const timeToReFetchData = 86400000;

export default function DetailPodcast() {
  const { podcastId } = useParams()
  const { allPodcasts } = useAppData();
  const { feed: { entry }} = allPodcasts;
  const infoPodcast = entry.find(item => item.id.attributes['im:id'] === podcastId);
  const { data, isLoading } = useQuery('podcast-detail', () => getDetailPodcast({ podcastId }), { cacheTime: timeToReFetchData});

  return (
    <AppFrame loading={isLoading}>
      <Grid container spacing={2}>
        <Grid item xs={2} marginLeft={15}>
          <DetailPodcastSidebar data={infoPodcast}/>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <Paper elevation={3} style={{ marginBottom: '40px'}}>
            <div className='container-episodes'>
            {data && <Typography variant='h5' fontWeight={900}>Episodes: {data.resultCount}</Typography>}
            </div>
          </Paper>
          {data && <TablePodcast data={data}/>}
        </Grid>
      </Grid>
    </AppFrame>
  )
}
