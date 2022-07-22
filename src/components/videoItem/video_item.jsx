import styles from './video_item.module.css';
import React from 'react';

const VideoItem = ({ video, video: { snippet }, onClickVideo, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onClickVideo(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt='video thumbnail'
        ></img>
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
