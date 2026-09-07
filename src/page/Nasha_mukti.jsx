import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/HomeButton';
import Image1 from '../asset/Our gallery/nukar/banner.webp';

import Image2 from '../asset/Our gallery/nukar/DSC_2525.webp';

import Image3 from '../asset/Our gallery/nukar/DSC_2750.webp';

import Image4 from '../asset/Our gallery/nukar/img1.webp';

import Image5 from '../asset/Our gallery/nukar/img2.webp';

import Image6 from '../asset/Our gallery/nukar/img3.webp';

import Image7 from '../asset/Our gallery/nukar/img4.webp';

import Image8 from '../asset/Our gallery/nukar/img5.webp';

import Image9 from '../asset/Our gallery/nukar/img6.webp';

import Image10 from '../asset/Our gallery/nukar/img7.webp';

import Image11 from '../asset/Our gallery/nukar/img8.webp';

import Image12 from '../asset/Our gallery/nukar/img9.webp';

import Image13 from '../asset/Our gallery/nukar/img10.webp';

import Image14 from '../asset/Our gallery/nukar/img11.webp';

import Image15 from '../asset/Our gallery/nukar/img12.webp';

function Nasha_mukti() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { src: Image1, date: '15 August 2026' },
    { src: Image2, date: '15 August 2026' },
    { src: Image3, date: '15 August 2026' },
    { src: Image4, date: '15 August 2026' },
    { src: Image5, date: '15 August 2026' },
    { src: Image6, date: '15 August 2026' },
    { src: Image7, date: '15 August 2026' },
    { src: Image8, date: '15 August 2026' },
    { src: Image9, date: '15 August 2026' },
    { src: Image10, date: '15 August 2026' },
    { src: Image11, date: '15 August 2026' },
    { src: Image12, date: '15 August 2026' },
    { src: Image13, date: '15 August 2026' },
    { src: Image14, date: '15 August 2026' },
    { src: Image15, date: '15 August 2026' },
  ];

  const [zoomIndex, setZoomIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomIndex === null) return;

      if (e.key === 'ArrowRight') {
        setZoomIndex((prev) => (prev + 1) % images.length);
      }

      if (e.key === 'ArrowLeft') {
        setZoomIndex((prev) => (prev - 1 + images.length) % images.length);
      }

      if (e.key === 'Escape') {
        setZoomIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomIndex, images.length]);

  let tooltipTimer;

  const handleMouseMove = (e) => {
    setHoverPos({
      x: e.clientX,
      y: e.clientY,
      visible: true
    });

    clearTimeout(tooltipTimer);

    tooltipTimer = setTimeout(() => {
      setHoverPos((p) => ({ ...p, visible: false }));
    }, 1500);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setZoomIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setZoomIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const styles = {
    container: {
      margin: '50px'
    },

    card: {
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
      marginTop: '30px'
    },

    imgBox: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      cursor: 'pointer'
    },

    img: {
      objectFit: 'cover',
      height: '200px',
      width: '100%',
      transition: 'transform 0.3s ease'
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
      transition: 'opacity 0.3s'
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
      zIndex: 9999
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
      transition: 'opacity 0.3s'
    },

    arrow: {
      position: 'absolute',
      fontSize: '3rem',
      color: '#fff',
      cursor: 'pointer',
      opacity: 0.4,
      userSelect: 'none',
      transition: 'opacity 0.3s',
      zIndex: 2
    }
  };

  return (
    <div style={styles.container}>
      <Home />

      <div className="container">
        <div className="p-4 mx-auto text-center" style={styles.card}>
          <h2 className="mb-4 fw-bold text-primary">
            नशामुक्ति नुक्कड़ नाटक — “मुझे चाहिए आज़ादी"
            <br />
            <small>15 August 2026</small>
          </h2>

          <div className="row">
            {images.map((img, i) => (
              <div key={i} className="col-6 col-md-4 mb-3">
                <div
                  style={styles.imgBox}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.overlay');
                    overlay.style.opacity = 1;
                    e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.overlay');
                    overlay.style.opacity = 0;
                    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                  }}
                  onClick={() => setZoomIndex(i)}
                >
                  <img src={img.src} alt="नशामुक्ति नुक्कड़ नाटक — “मुझे चाहिए आज़ादी" style={styles.img} />
                  <div className="overlay" style={styles.overlay}>
                    नशामुक्ति नुक्कड़ नाटक — “मुझे चाहिए आज़ादी" | 15 August 2026
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {zoomIndex !== null && (
        <div style={styles.zoom} onMouseMove={handleMouseMove}>
          <span
            onClick={() => setZoomIndex(null)}
            style={{
              position: 'absolute',
              top: 20,
              right: 30,
              fontSize: '2.5rem',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 3
            }}
          >
            &times;
          </span>

          <span onClick={handlePrev} style={{ ...styles.arrow, left: 30 }}>
            &#10094;
          </span>

          <img
            src={images[zoomIndex].src}
            alt="Zoomed"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
            draggable={false}
          />

          <span onClick={handleNext} style={{ ...styles.arrow, right: 30 }}>
            &#10095;
          </span>

          <div style={{ ...styles.tooltip, top: hoverPos.y, left: hoverPos.x }}>
            नशामुक्ति नुक्कड़ नाटक — “मुझे चाहिए आज़ादी" | 15 August 2026
          </div>
        </div>
      )}
    </div>
  );
}

export default Nasha_mukti;
