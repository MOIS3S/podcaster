import React from 'react'
import AppFrame from '../components/AppFrame';
import ListPodcast from '../components/ListPodcast'
import { useQuery } from 'react-query'
import getListPodcast from '../service/getListPodcats';
//import PropTypes from 'prop-types'

const timeToReFetchData = 86400000;

function MainPage(props) {
  const { data, isLoading } = useQuery('podcast', getListPodcast, { cacheTime: timeToReFetchData });
  console.log("INFO: ", data, isLoading);

  return (
    <AppFrame loading={isLoading}>
      {data && <ListPodcast data={data} />}
    </AppFrame>
  )
}

//MainPage.propTypes = {}

export default MainPage
