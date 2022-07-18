import { useState } from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';
import response from './response.json';
import React from 'react';
import { useEffect } from 'react';

const App = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(response.items);
  }, [videos]);

  return <VideoList videos={videos} />;
};

export default App;
