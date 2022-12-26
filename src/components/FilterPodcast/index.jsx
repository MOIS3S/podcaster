import './styles.css'
import React, { useState} from 'react'

const FilterPodcast = ({ onChangeFilter }) => {
  const [value, setValue] = useState('');

  const handleValueInput = (event) => {
    setValue(event.target.value);
    onChangeFilter(event.target.value)
  }

  return <input 
    className='filter-input' 
    type='text' 
    value={value} 
    onChange={handleValueInput} 
    placeholder='Filter podcast... '
    />
}

export default FilterPodcast
