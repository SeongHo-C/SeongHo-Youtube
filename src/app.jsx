import { useState, useEffect } from 'react';
import styles from './app.module.css';
import response from './response.json';
import React from 'react';
import VideoList from './components/videoList/video_list';
import SearchHeader from './components/searchHeader/search_header';
import VideoDetail from './components/videoDetail/video_detail';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVIdeo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

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
      <section className={styles.detail}>
        {selectedVIdeo && (
          <div className={styles.content}>
            <VideoDetail video={selectedVIdeo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onClickVideo={selectVideo}
            display={selectedVIdeo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
