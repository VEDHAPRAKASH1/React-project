import React from 'react';
import Gif from '../../images/gif/giphy.gif'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading">
      <img src={Gif} alt='error while fetching'/>
    </div>
  );
};

export default Loading;