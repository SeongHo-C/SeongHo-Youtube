import { useState, useEffect } from 'react';
import styles from './app.module.css';
import response from './response.json';
import React from 'react';
import VideoList from './components/videoList/video_list';
import SearchHeader from './components/searchHeader/search_header';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  const onSearch = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    setVideos(response.items);
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
