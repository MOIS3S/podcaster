import React from 'react'
import AppFrame from '../components/AppFrame';
import ListPodcast from '../components/ListPodcast'
import { useQuery } from 'react-query'
import { getListPodcast } from '../service';
import { useAppData } from '../context/AppDataProvider';

const timeToReFetchData = 86400000;

function MainPage(props) {
  const { setAllPodcasts  } = useAppData();
  const { data, isLoading } = useQuery('podcast', getListPodcast, { 
    cacheTime: timeToReFetchData, onSuccess: (data) => setAllPodcasts(data)
   });
  //console.log("INFO: ", data, isLoading);

  return (
    <AppFrame loading={isLoading}>
      {data && <ListPodcast data={data} />}
    </AppFrame>
  )
}

export default MainPage
