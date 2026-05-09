import React from 'react';
import './studentLens.css';

const photos = [
  {
    src: require('../asset/student_lens/1.png'),
    name: 'Saurav kumar Yaduvendu',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/2.png'),
    name: 'Saurav kumar Yaduvendu',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/3.png'),
    name: 'Saurav kumar Yaduvendu',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/4.png'),
    name: 'Saurav kumar Yaduvendu',
    course: 'M.A JMC',
  },
   {
    src: require('../asset/student_lens/5.png'),
    name: 'Saurav kumar Yaduvendu',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/6.png'),
    name: 'Hritik Raj',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/7.png'),
    name: 'Hritik Raj',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/8.png'),
    name: 'Hritik Raj',
    course: 'M.A JMC',
  },
   {
    src: require('../asset/student_lens/9.png'),
    name: 'Hritik Raj',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/13.png'),
    name: 'Rajshree Routh',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/11.png'),
    name: 'Rajshree Routh',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/12.png'),
    name: 'Rajshree Routh',
    course: 'M.A JMC',
  },
    {
    src: require('../asset/student_lens/14.png'),
    name: 'Muskan Kumari Singh',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/15.png'),
    name: 'Muskan Kumari Singh',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/16.png'),
    name: 'Muskan Kumari Singh',
    course: 'M.A JMC',
  },
    {
    src: require('../asset/student_lens/20.png'),
    name: 'Durgesh Kumar',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/21.png'),
    name: 'Durgesh Kumar',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/22.png'),
    name: 'Durgesh Kumar',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/23.png'),
    name: 'Durgesh Kumar',
    course: 'M.A JMC',
  },
      {
    src: require('../asset/student_lens/24.png'),
    name: 'Amar Pathak',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/25.png'),
    name: 'Amar Pathak',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/26.png'),
    name: 'Shuhani Anand',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/27.png'),
    name: 'Shuhani Anand',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/28.png'),
    name: 'Isha Birlay',
    course: 'Assistant Professor SJMC , AKU Patna',
  },
  {
    src: require('../asset/student_lens/29.png'),
    name: 'Isha Birlay',
    course: 'Assistant Professor SJMC , AKU Patna',
  },
  {
    src: require('../asset/student_lens/30.png'),
    name: 'Riya Kumari',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/31.png'),
    name: 'Riya Kumari',
    course: 'M.A JMC',
  },
    {
    src: require('../asset/student_lens/32.png'),
    name: 'Himanshu Kumar',
    course: 'PGDFM',
  },
  {
    src: require('../asset/student_lens/33.png'),
    name: 'Himanshu Kumar',
    course: 'PGDFM',
  },
  {
    src: require('../asset/student_lens/37.png'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
  {
    src: require('../asset/student_lens/38.png'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
  {
    src: require('../asset/student_lens/39.png'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
    {
    src: require('../asset/student_lens/41.png'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
  {
    src: require('../asset/student_lens/42.png'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
  {
    src: require('../asset/student_lens/43.png'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
  // Add more photos here
];

const StudentLens = () => {
  return (
    <div
      className="student-lens-section"
      style={{
        width: '100%',
        margin: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right: '36px',
      }}
    >
      <h2
        style={{
          width: '100%',
          textAlign: 'center',
          borderRadius: '10px',
          textShadow: '0 3px 10px rgba(0, 0, 0, 0.7)',
        }}
      >
        Student Lens
      </h2>

      <p className="subtitle">
        <b>Every frame tells a story</b>
      </p>

      {/* ===== Scroll Container Added (NO layout change) ===== */}
      <div className="photo-scroll-container">
        <div className="photo-grid photo-grid-4">
          {photos.map((photo, index) => (
            <div key={index} className="photo-card">
              <a href={photo.src} target="_blank" rel="noopener noreferrer">
                <img src={photo.src} alt={photo.name} className="photo-image" />
                </a>
                <div className="photo-info">
                  <strong>{photo.name}</strong>
                  <span>{photo.course}</span>
                </div>
            </div>
                ))}
          </div>
        </div>
      {/* ===== End Scroll Container ===== */}

      {/*
      <div className="view-gallery">
        <a href="/full-student-gallery" className="gallery-button">
          View Full Gallery
        </a>
      </div>
      */}
    </div>
  );
};

export default StudentLens;
