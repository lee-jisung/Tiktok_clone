import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './Sections/VideoFooter';
import VideoSidebar from './Sections/VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    //if video is playing stop it
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
    //otherwise, play video
    else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video_player"
        loop
        ref={videoRef}
        src={url}
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;

{
  /* <video sequence="10" src="https://v16m.tiktokcdn.com/da85993fdf0fa19abd16c1bad7d5fc20/5f50d09c/video/n/v0102/c1243d21b97c480bb3d7a7a6b9809a26/?a=1180&amp;br=1424&amp;bt=712&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=3&amp;ds=3&amp;er=&amp;l=2020090305160001011515316715004358&amp;lr=tiktok&amp;mime_type=video_mp4&amp;qs=0&amp;rc=amRleHhva2VxczMzOjgzM0ApNTQ5NGY5NTw0N2Q8Njo3M2cyNDE0Zm1zbjRfLS0tLzRzcy0uYS8zYmIxNi8vMWEtLjI6Yw%3D%3D&amp;vl=&amp;vr=" playsinline="" loop="" preload="metadata" class="jsx-3900254205 horizontal video-player"></video> */
}
