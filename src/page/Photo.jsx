import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/HomeButton';

// WebP Images available in: D:/sjmc/src/asset/Our gallery/photo
import Image2 from '../asset/Our gallery/photo/banner.jpg';
import Image3 from '../asset/Our gallery/photo/1.webp';
import Image4 from '../asset/Our gallery/photo/2.webp';
import Image5 from '../asset/Our gallery/photo/3.webp';
import Image6 from '../asset/Our gallery/photo/4.webp';
import Image7 from '../asset/Our gallery/photo/5.webp';
import Image8 from '../asset/Our gallery/photo/6.webp';
import Image9 from '../asset/Our gallery/photo/7.webp';
import Image10 from '../asset/Our gallery/photo/8.webp';
import Image11 from '../asset/Our gallery/photo/9.webp';
import Image12 from '../asset/Our gallery/photo/10.webp';
import Image13 from '../asset/Our gallery/photo/11.webp';
import Image14 from '../asset/Our gallery/photo/12.webp';
import Image15 from '../asset/Our gallery/photo/13.webp';
import Image16 from '../asset/Our gallery/photo/14.webp';
import Image17 from '../asset/Our gallery/photo/15.webp';
import Image18 from '../asset/Our gallery/photo/16.webp';
import Image19 from '../asset/Our gallery/photo/17.webp';
import Image20 from '../asset/Our gallery/photo/18.webp';

function Photo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title =
    'World Photography Day Photo Exhibition at Aryabhatta Knowledge University';
  const date = '19 August 2026';

  const images = [
    Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10,
    Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18,
    Image19,Image20,
  ];

  const [zoomIndex, setZoomIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const [failedImages, setFailedImages] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomIndex === null) return;

      if (e.key === 'ArrowRight') {
        setZoomIndex((prev) => (prev + 1) % images.length);
      }

      if (e.key === 'ArrowLeft') {
        setZoomIndex(
          (prev) => (prev - 1 + images.length) % images.length
        );
      }

      if (e.key === 'Escape') {
        setZoomIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [zoomIndex]);

  const handleImageError = (index) => {
    setFailedImages((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    );
  };

  const handleMouseMove = (e) => {
    setHoverPos({
      x: e.clientX,
      y: e.clientY,
      visible: true,
    });
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setZoomIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setZoomIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const styles = {
    container: {
      margin: '50px',
    },

    card: {
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
      marginTop: '30px',
    },

    imgBox: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      cursor: 'pointer',
      background: '#f1f1f1',
      minHeight: '200px',
    },

    img: {
      display: 'block',
      objectFit: 'cover',
      height: '200px',
      width: '100%',
      transition: 'transform 0.3s ease',
    },

    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(0,0,0,0.65)',
      color: '#fff',
      opacity: 0,
      textAlign: 'center',
      padding: '7px',
      transition: 'opacity 0.3s',
      fontSize: '14px',
    },

    errorBox: {
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#777',
      background: '#f1f1f1',
      textAlign: 'center',
      padding: '10px',
    },

    zoom: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    },

    zoomImage: {
      maxWidth: '90vw',
      maxHeight: '90vh',
      width: 'auto',
      height: 'auto',
      objectFit: 'contain',
      userSelect: 'none',
    },

    tooltip: {
      position: 'fixed',
      background: 'rgba(0,0,0,0.75)',
      color: '#fff',
      padding: '5px 9px',
      borderRadius: '4px',
      fontSize: '14px',
      transform: 'translate(-50%,-120%)',
      whiteSpace: 'nowrap',
      opacity: hoverPos.visible ? 1 : 0,
      transition: 'opacity 0.3s',
      pointerEvents: 'none',
      zIndex: 4,
    },

    arrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '3rem',
      color: '#fff',
      cursor: 'pointer',
      opacity: 0.65,
      userSelect: 'none',
      zIndex: 3,
      padding: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <Home />

      <div className="container">
        <div className="p-4 mx-auto text-center" style={styles.card}>
          <h2 className="mb-4 fw-bold text-primary">
            World Photography Day Photo Exhibition
            <br />
            <small>at Aryabhatta Knowledge University</small>
            <br />
            <small>{date}</small>
          </h2>

          <div className="row">
            {images.map((src, i) => (
              <div key={i} className="col-6 col-md-4 mb-3">
                <div
                  style={styles.imgBox}
                  onClick={() => {
                    if (!failedImages.includes(i)) {
                      setZoomIndex(i);
                    }
                  }}
                  onMouseEnter={(e) => {
                    const overlay =
                      e.currentTarget.querySelector('.overlay');
                    const image =
                      e.currentTarget.querySelector('img');

                    if (overlay) overlay.style.opacity = 1;
                    if (image) image.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    const overlay =
                      e.currentTarget.querySelector('.overlay');
                    const image =
                      e.currentTarget.querySelector('img');

                    if (overlay) overlay.style.opacity = 0;
                    if (image) image.style.transform = 'scale(1)';
                  }}
                >
                  {failedImages.includes(i) ? (
                    <div style={styles.errorBox}>
                      Image {i + 1} load nahi hui.
                      <br />
                      File/path check karein.
                    </div>
                  ) : (
                    <>
                      <img
                        src={src}
                        alt={`${title} - Image ${i + 1}`}
                        style={styles.img}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        onError={() => handleImageError(i)}
                      />

                      <div
                        className="overlay"
                        style={styles.overlay}
                      >
                        {title} | {date}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {zoomIndex !== null && !failedImages.includes(zoomIndex) && (
        <div
          style={styles.zoom}
          onMouseMove={handleMouseMove}
          onClick={() => setZoomIndex(null)}
        >
          <button
            type="button"
            onClick={() => setZoomIndex(null)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 15,
              right: 25,
              fontSize: '2.5rem',
              lineHeight: 1,
              color: '#fff',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              zIndex: 4,
            }}
          >
            &times;
          </button>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            style={{
              ...styles.arrow,
              left: 15,
              background: 'transparent',
              border: 'none',
            }}
          >
            &#10094;
          </button>

          <img
            src={images[zoomIndex]}
            alt={`${title} - Image ${zoomIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={styles.zoomImage}
            draggable={false}
          />

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            style={{
              ...styles.arrow,
              right: 15,
              background: 'transparent',
              border: 'none',
            }}
          >
            &#10095;
          </button>

          <div
            style={{
              ...styles.tooltip,
              top: hoverPos.y,
              left: hoverPos.x,
            }}
          >
            {title} | {date}
          </div>
        </div>
      )}
    </div>
  );
}

export default Photo;
