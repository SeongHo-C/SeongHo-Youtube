import { useState, useEffect } from 'react';
import styles from './app.module.css';
import response from './response.json';
import React from 'react';
import VideoList from './components/videoList/video_list';
import SearchHeader from './components/searchHeader/search_header';

const App = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(response.items);
  }, [videos]);

  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
