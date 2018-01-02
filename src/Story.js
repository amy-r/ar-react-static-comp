import React from 'react';
import Button from './Button';
import './Story.css';
import Author from './Author';

const Story = (storiesProps) => {
  return (
    <div className='Story'>
      <img src={storiesProps.img} />
      <div className='story-info'>
        <div>
          <h3>{storiesProps.title}</h3>
          <p>{storiesProps.desc}</p>
        </div>

        <Author 
          authImg = {storiesProps.authImg} 
          authName = {storiesProps.authName}
          estTime = {storiesProps.estTime}
        />
      </div>
    </div>
  )
}

export default Story;
