import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/HomeButton';
import Image2 from '../asset/Our gallery/Photo/banner.jpg';
import Image3 from '../asset/Our gallery/Photo/1.webp';
import Image4 from '../asset/Our gallery/Photo/2.webp';
import Image5 from '../asset/Our gallery/Photo/3.webp';
import Image6 from '../asset/Our gallery/Photo/4.webp';
import Image7 from '../asset/Our gallery/Photo/5.webp';
import Image8 from '../asset/Our gallery/Photo/6.webp';
import Image9 from '../asset/Our gallery/Photo/7.webp';
import Image10 from '../asset/Our gallery/Photo/8.webp';
import Image11 from '../asset/Our gallery/Photo/9.webp';
import Image12 from '../asset/Our gallery/Photo/10.webp';
import Image13 from '../asset/Our gallery/Photo/11.webp';
import Image14 from '../asset/Our gallery/Photo/12.webp';
import Image15 from '../asset/Our gallery/Photo/13.webp';
import Image16 from '../asset/Our gallery/Photo/14.webp';
import Image17 from '../asset/Our gallery/Photo/15.webp';
import Image18 from '../asset/Our gallery/Photo/16.webp';
import Image19 from '../asset/Our gallery/Photo/17.webp';
import Image20 from '../asset/Our gallery/Photo/18.webp';

function Photo() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const title =
    'World Photography Day Photo Exhibition at Aryabhatta Knowledge University';
  const date = '19 August 2026';

  const images = [
    Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10,
    Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18,
    Image19, Image20,
  ];

  const [zoomIndex, setZoomIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0, visible: false });

  // ✅ Keyboard navigation for zoom mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomIndex === null) return;
      if (e.key === 'ArrowRight') setZoomIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setZoomIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === 'Escape') setZoomIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomIndex, images.length]);

  // ✅ Tooltip for zoom mode
  let tooltipTimer;
  const handleMouseMove = (e) => {
    setHoverPos({ x: e.clientX, y: e.clientY, visible: true });
    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(() => setHoverPos((p) => ({ ...p, visible: false })), 1500);
  };

  const handleNext = (e) => { e.stopPropagation(); setZoomIndex((prev) => (prev + 1) % images.length); };
  const handlePrev = (e) => { e.stopPropagation(); setZoomIndex((prev) => (prev - 1 + images.length) % images.length); };

  const styles = {
    container: { margin: '50px' },
    card: { background: '#fff', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.2)', marginTop: '30px' },
    imgBox: { position: 'relative', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' },
    img: { objectFit: 'cover', height: '200px', width: '100%', transition: 'transform 0.3s ease' },
    overlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.6)', color: '#fff', opacity: 0, textAlign: 'center', padding: '5px', transition: 'opacity 0.3s' },
    zoom: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 },
    tooltip: { position: 'absolute', background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '14px', transform: 'translate(-50%,-120%)', whiteSpace: 'nowrap', opacity: hoverPos.visible ? 1 : 0, transition: 'opacity 0.3s' },
    arrow: { position: 'absolute', fontSize: '3rem', color: '#fff', cursor: 'pointer', opacity: 0.4, userSelect: 'none', transition: 'opacity 0.3s' }
  };

  return (
    <div style={styles.container}>
      <Home />
      <div className="container">
        <div className="p-4 mx-auto text-center" style={styles.card}>
          <h2 className="mb-4 fw-bold text-primary">
            {title}
            <br /><small>{date}</small>
          </h2>

          {/* ✅ Image Grid */}
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
                    overlay.style.opacity = 0; // ✅ overlay disappears immediately
                    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                  }}
                  onClick={() => setZoomIndex(i)}
                >
                  <img src={img.src ? img.src : img} alt="Gallery" style={styles.img} />
                  {/* ✅ Hover text only visible on hover */}
                  <div className="overlay" style={styles.overlay}>{title} | {date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Zoom Mode */}
      {zoomIndex !== null && (
        <div style={styles.zoom} onMouseMove={handleMouseMove}>
          <span onClick={() => setZoomIndex(null)} style={{ position: 'absolute', top: 20, right: 30, fontSize: '2.5rem', color: '#fff', cursor: 'pointer' }}>&times;</span>
          <span onClick={handlePrev} style={{ ...styles.arrow, left: 30 }}>&#10094;</span>

          <img
            src={images[zoomIndex].src ? images[zoomIndex].src : images[zoomIndex]}
            alt="Zoomed"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            draggable={false}
          />

          <span onClick={handleNext} style={{ ...styles.arrow, right: 30 }}>&#10095;</span>

          {/* ✅ Tooltip shows only when moving mouse */}
          <div style={{ ...styles.tooltip, top: hoverPos.y, left: hoverPos.x }}>
            {title} | {date}
          </div>
        </div>
      )}
    </div>
  );
}

export default Photo;