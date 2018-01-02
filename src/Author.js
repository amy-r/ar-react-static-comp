import React from 'react';
import './Author.css';

const Author = (storyProps) => {
  return (
    <div className='author-info'>
      <img src={storyProps.authImg} className='author-image' />
      <div className='author-text'>
        <h4 className='author-text'>{storyProps.authName}</h4>
        <h4 className='author-text'>{storyProps.estTime} read</h4>
      </div>
    </div>
  )
}

export default Author;



