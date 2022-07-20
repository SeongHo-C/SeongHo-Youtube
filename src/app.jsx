import { useState, useEffect } from 'react';
import styles from './app.module.css';
import response from './response.json';
import React from 'react';
import VideoList from './components/videoList/video_list';
import SearchHeader from './components/searchHeader/search_header';

const App = (props) => {
  const [videos, setVideos] = useState([]);

  const onSearch = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAKRQzsqhH_aeKGXe_XXcBKAe-deOjILyU`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
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
