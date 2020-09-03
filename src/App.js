import React, { useEffect, useState } from 'react';
import axios from './axios';
import './App.css';
import Video from './Components/VideoPage/Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      // axios.js에서 정의한 axios를 사용함 (base url사용하기 위함)
      const response = await axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
            _id,
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
          }) => (
            <Video
              key={_id}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
