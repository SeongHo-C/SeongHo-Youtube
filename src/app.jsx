import { useState } from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';

import React from 'react';
import { useEffect } from 'react';

const App = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBJrpspfk95M-n28Yokr829pEnoq81fuuQ',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, [videos]);

  return <VideoList videos={videos} />;
};

export default App;
