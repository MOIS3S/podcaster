import './style.css'
import React, { useState } from 'react'
import CardPodcast from '../CardPodcast';
import FilterPodcast from '../FilterPodcast';
import CountPodcast from '../CountPodcast';

const ListPodcast = ({ data }) => {
  const { feed: { entry } } = data || {};
  const [filterExpresion, setFilterExpresion] = useState('');

  const includesAuthorOrName = (item) => {
    const name = item.title.label.toLowerCase();
    const author = item['im:artist'].label.toLowerCase();
    return name.includes(filterExpresion) || author.includes(filterExpresion);
  }

  const filtred = entry.filter(includesAuthorOrName);
  

  if(!data) return null;

  return (
    <>
      <div className='container-filter-count'>
        <CountPodcast number={filtred.length} />
        <FilterPodcast onChangeFilter={setFilterExpresion} />
      </div>
      <div className='container-listPodcast'>
        {filtred.map(item => <CardPodcast item={item} key={item.id.label}/>)}
      </div>
    </>
  )
}

export default ListPodcast
