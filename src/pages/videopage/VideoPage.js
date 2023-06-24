import React, { useEffect, useState } from 'react';
import './VideoPage.css';

function VideoPage() {
  const [video, setVideo] = useState(null);
  const videoInput = React.createRef();

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = () => {
    fetch('http://localhost:3001/api/videoBackground')
      .then(response => response.json())
      .then(data => {
        if (data.video_path) {
          // Prepend 'http://localhost:3001/uploads/' to the video path
          setVideo('http://localhost:3001/' + data.video_path);
        }
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('video', videoInput.current.files[0]);

    fetch('http://localhost:3001/api/videoBackground', {
      method: 'PUT',
      body: formData,
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      // After upload is successful, fetch the video again from the server
      fetchVideo();
    });
  };

  return (
    <div className="video-page">
      <h1 className="video-page-title">Video Page</h1>

      <div className="video-container">
        {video ? <video src={video} controls /> : <p>No video available.</p>}
      </div>

      <form className="video-upload-form" onSubmit={handleUpdate}>
        <input type="file" name="video" ref={videoInput} />
        <button type="submit" className="video-upload-btn">Update Video</button>
      </form>
    </div>
  );
}

export default VideoPage;
