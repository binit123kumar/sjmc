import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/HomeButton';

// AI and Human Thinking: A Critical Debate on the Future of Intelligence
import Image2 from '../asset/Our gallery/AI_Debate/banner.webp';
import Image3 from '../asset/Our gallery/AI_Debate/1.webp';
import Image4 from '../asset/Our gallery/AI_Debate/2.webp';
import Image5 from '../asset/Our gallery/AI_Debate/3.webp';
import Image6 from '../asset/Our gallery/AI_Debate/4.webp';
import Image7 from '../asset/Our gallery/AI_Debate/5.webp';
import Image8 from '../asset/Our gallery/AI_Debate/6.webp';
import Image9 from '../asset/Our gallery/AI_Debate/7.webp';
import Image10 from '../asset/Our gallery/AI_Debate/8.webp';
import Image11 from '../asset/Our gallery/AI_Debate/9.webp';
import Image12 from '../asset/Our gallery/AI_Debate/10.webp';

function AI_Debate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title =
    'AI and Human Thinking: A Critical Debate on the Future of Intelligence';

  const date = '25 August 2026';

  const images = [
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
  ];

  const [zoomIndex, setZoomIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  // Keyboard navigation
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

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomIndex, images.length]);

  // Tooltip
  let tooltipTimer;

  const handleMouseMove = (e) => {
    setHoverPos({
      x: e.clientX,
      y: e.clientY,
      visible: true,
    });

    clearTimeout(tooltipTimer);

    tooltipTimer = setTimeout(() => {
      setHoverPos((p) => ({
        ...p,
        visible: false,
      }));
    }, 1500);
  };

  const handleNext = (e) => {
    e.stopPropagation();

    setZoomIndex(
      (prev) => (prev + 1) % images.length
    );
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
    },

    img: {
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
      background: 'rgba(0,0,0,0.6)',
      color: '#fff',
      opacity: 0,
      textAlign: 'center',
      padding: '5px',
      transition: 'opacity 0.3s',
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

    tooltip: {
      position: 'absolute',
      background: 'rgba(0,0,0,0.6)',
      color: '#fff',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '14px',
      transform: 'translate(-50%,-120%)',
      whiteSpace: 'nowrap',
      opacity: hoverPos.visible ? 1 : 0,
      transition: 'opacity 0.3s',
      pointerEvents: 'none',
    },

    arrow: {
      position: 'absolute',
      fontSize: '3rem',
      color: '#fff',
      cursor: 'pointer',
      opacity: 0.4,
      userSelect: 'none',
      transition: 'opacity 0.3s',
      zIndex: 10000,
    },
  };

  return (
    <div style={styles.container}>
      <Home />

      <div className="container">
        <div
          className="p-4 mx-auto text-center"
          style={styles.card}
        >
          <h2 className="mb-4 fw-bold text-primary">
            {title}
            <br />
            <small>{date}</small>
          </h2>

          {/* Image Grid */}
          <div className="row">
            {images.map((img, i) => (
              <div
                key={i}
                className="col-6 col-md-4 mb-3"
              >
                <div
                  style={styles.imgBox}
                  onMouseEnter={(e) => {
                    const overlay =
                      e.currentTarget.querySelector('.overlay');

                    overlay.style.opacity = 1;

                    e.currentTarget.querySelector(
                      'img'
                    ).style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    const overlay =
                      e.currentTarget.querySelector('.overlay');

                    overlay.style.opacity = 0;

                    e.currentTarget.querySelector(
                      'img'
                    ).style.transform = 'scale(1)';
                  }}
                  onClick={() => setZoomIndex(i)}
                >
                  <img
                    src={img.src ? img.src : img}
                    alt={`${title} ${i + 1}`}
                    style={styles.img}
                  />

                  <div
                    className="overlay"
                    style={styles.overlay}
                  >
                    {title} | {date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Mode */}
      {zoomIndex !== null && (
        <div
          style={styles.zoom}
          onMouseMove={handleMouseMove}
        >
          {/* Close */}
          <span
            onClick={() => setZoomIndex(null)}
            style={{
              position: 'absolute',
              top: 20,
              right: 30,
              fontSize: '2.5rem',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 10000,
            }}
          >
            &times;
          </span>

          {/* Previous */}
          <span
            onClick={handlePrev}
            style={{
              ...styles.arrow,
              left: 30,
            }}
          >
            &#10094;
          </span>

          {/* Zoomed Image */}
          <img
            src={
              images[zoomIndex].src
                ? images[zoomIndex].src
                : images[zoomIndex]
            }
            alt={`Zoomed ${title}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            draggable={false}
          />

          {/* Next */}
          <span
            onClick={handleNext}
            style={{
              ...styles.arrow,
              right: 30,
            }}
          >
            &#10095;
          </span>

          {/* Tooltip */}
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

export default AI_Debate;