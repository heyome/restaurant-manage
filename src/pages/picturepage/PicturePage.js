import React, { useEffect, useState } from 'react';
import './PicturePage.css';

function PicturePage() {
  const [images, setImages] = useState([]);
  const imageInput = React.createRef();

  useEffect(() => {
    fetch('http://localhost:3001/api/carouselImages')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  const handleAddImage = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('image', imageInput.current.files[0]);

    fetch('http://localhost:3001/api/carouselImages', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      alert('Image added');
      setImages(prevImages => [...prevImages, data]);
    });
  };

  const handleUpdateImage = (id) => {
    let formData = new FormData();
    formData.append('image', imageInput.current.files[0]);

    fetch(`http://localhost:3001/api/carouselImages/${id}`, {
      method: 'PUT',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      alert('Image updated');
      setImages(prevImages => prevImages.map(img => img.id === id ? data : img));
    });
  };

  const handleDeleteImage = (id) => {
    fetch(`http://localhost:3001/api/carouselImages/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      alert('Image deleted');
      setImages(prevImages => prevImages.filter(img => img.id !== id));
    });
  };

  return (
    <div className="picture-page">
      <h1 className="picture-page-title">Picture Page</h1>

      <form onSubmit={handleAddImage}>
        <input type="file" name="image" ref={imageInput} />
        <button type="submit">Add Image</button>
      </form>

      <div className="picture-list">
        {images.map((image, i) => (
          <div className="picture-item" key={i}>
            <img src={`http://localhost:3001/${image.image_path}`} alt="" />
            <button className="picture-update-btn" onClick={() => handleUpdateImage(image.id)}>Update</button>
            <button className="picture-delete-btn" onClick={() => handleDeleteImage(image.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PicturePage;
