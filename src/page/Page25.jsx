import React from 'react';
import Manisha from '../asset/DrManishaPrakash.jpeg';

function Page25() {
  return (
    <div className="container py-5">
      <div
        className="mx-auto text-center p-4"
        style={{
          maxWidth: '1000px',
          backgroundColor: '#f4f4f4',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
        }}
      >
        <h2
          style={{
            fontWeight: 'bold',
            marginBottom: '40px',
            textShadow: '1px 1px 2px #000000',
          }}
        >
        </h2>

        {/* ===== Dr. Manisha Prakash ===== */}
        <div className="row align-items-center mb-5">
          <div className="col-md-4 text-center">
            <img
              src={Manisha}
              alt="Dr. Manisha Prakash"
              style={{
                width: '180px',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }}
            />
          </div>
          <div className="col-md-8 text-start">
            <h4 style={{ fontWeight: 'bold' }}>Dr. Manisha Prakash</h4>
            <h6 style={{ fontWeight: 'normal', color: '#555' }}>
              Assistant Professor & Head, Dept. School of Journalism and Mass Communication
            </h6>
            <p style={{ textAlign: 'justify' }}>
              Dr. Manisha Prakash is Head, Academic of the Aryabhatta Knowledge University and Assistant Professor, School of Journalism and Mass Communication. She also holds the position of the OSD to Hon’ble Vice Chancellor, Aryabhatta Knowledge University.
            </p>
            <p style={{ textAlign: 'justify' }}>
              She has worked with The Times of India, and held academic and administrative roles at several universities. She is involved in projects with IPRD, Rotary International, UNICEF, DFID, and more. She is a bilingual writer and author of “Do Gaj Doori” and contributed to “Women’s Wallet”.
            </p>
            <p style={{ textAlign: 'justify' }}>
              She is NAAC Coordinator, PRO, IT Cell Head, and Nodal Officer for Incubation Centre, Samarth, and NKN. Her encyclopedia entry “Women in Indian cinema” is published in <i>WILEY International Encyclopedia of Gender, Media, and Communication</i>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page25;
