import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CardPodcast = ({ item }) => {
  return(
    <Link to={`/podcast/${item.id.attributes['im:id']}`} style={{textDecoration: 'none'}}>
    <div className='container-cardPodcast'>
      <div className='container-cardPodcast-1'>
        <img className='img-cardPodcast' src={`${item['im:image'][2].label}`} alt={``}/>
        <h3 className='cardPodcast-title'>{item.title.label}</h3>
        <h4 className='cardPodcast-subtitle'>{item['im:artist'].label}</h4>
      </div>
    </div>
    </Link>  
  )
}

export default CardPodcast;
