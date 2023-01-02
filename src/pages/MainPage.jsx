import React from 'react'
import AppFrame from '../components/AppFrame';
import ListPodcast from '../components/ListPodcast'
import { useQuery } from 'react-query'
import { getListPodcast } from '../service';
import { useAppData } from '../context/AppDataProvider';


function MainPage(props) {
  const { setState, state } = useAppData();
  const { data, isLoading } = useQuery(
    'podcast', getListPodcast, 
    { 
      refetchInterval: state.timeToReFetchData,
      onSuccess: (data) => setState((ppr) => ({...{context: {...ppr.context, allPodcasts: data}  } } ))
    }
    );

  return (
    <AppFrame loading={isLoading}>
      {data && <ListPodcast data={data} />}
    </AppFrame>
  )
}

export default MainPage
