
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


export default function DetailPodcast() {
  const { podcastId } = useParams()
  const { state, setState } = useAppData();
  const episode =  state.context.allDetailPodcast.find(({ id }) => id  === podcastId)

  const { feed: { entry }} = state.context.allPodcasts;
  const infoPodcast = entry.find(item => item.id.attributes['im:id'] === podcastId);
  const { isLoading } = useQuery(
    'podcast-detail',
     () => getDetailPodcast({ podcastId }), 
     { 
      enabled: !episode,
      refetchInterval: state.context.timeToReFetchData,
      onSuccess: (data) => setState((prr) => ({
        ...{
          context: {
            ...prr.context,
            allDetailPodcast: [...new Set([...state.context.allDetailPodcast, { ...data, id: podcastId }])]
            }
          } 
     }))
    });


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
            {episode && <Typography variant='h5' fontWeight={900}>Episodes: {episode.resultCount}</Typography>}
            </div>
          </Paper>
          {episode && <TablePodcast data={episode}/>}
        </Grid>
      </Grid>
    </AppFrame>
  )
}
