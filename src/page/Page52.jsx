import React from 'react';
import Sandeep from '../asset/sandeep.jpg';
import Anupam from '../asset/anup.jpeg';
import ShivamImage from '../asset/shivam.jpg';
import IshaImage from '../asset/isha.jpg';

function Page52() {
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
        {/* ===== 1. Dr. Sandeep Kumar Dubey ===== */}
        <div className="row align-items-center mb-5">
          <div className="col-md-4 text-center">
            <img
              src={Sandeep}
              alt="Dr. Sandeep Kumar Dubey"
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
            <h4 style={{ fontWeight: 'bold' }}>Dr. Sandeep Kumar Dubey</h4>
            <h6 style={{ fontWeight: 'normal', color: '#555' }}>Assistant Professor</h6>
            <p style={{ textAlign: 'justify' }}>
              Dr. Sandeep Kumar Dubey holds a Ph.D. and M.Phil. in Mass Communication from Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha, focusing on art cinema and Hindi journalism. He completed an MA in Mass Communication from the University of Allahabad and a PG Diploma in Electronic Media Management and Film Production.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Currently, he is an Assistant Professor at Aryabhatta Knowledge University, Patna. He was previously Assistant Professor and Head of the Journalism & Mass Communication Department at Invertis University, Bareilly.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Specializing in documentary/film production, radio/TV production, and journalism, he has taught video/audio production, graphic design, and communication research. Dr. Dubey co-supervised two Ph.D. scholars, published multiple book chapters and research articles, and received the ICSSR Doctoral Fellowship.
            </p>
            <p style={{ textAlign: 'justify' }}>
              His industry roles include sub-editor, content consultant, and documentary director/editor.
            </p>
          </div>
        </div>

        <hr />

        {/* ===== 2. Dr. Anupam Priyadarshi ===== */}
        <div className="row align-items-center mb-5">
          <div className="col-md-4 text-center">
            <img
              src={Anupam}
              alt="Dr. Anupam Priyadarshi"
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
            <h4 style={{ fontWeight: 'bold' }}>Dr. Anupam Priyadarshi</h4>
            <h6 style={{ fontWeight: 'normal', color: '#555' }}>Assistant Professor</h6>
            <p style={{ textAlign: 'justify' }}>
              Dr. Anupam Priyadarshi is a UGC NET (Journalism and Mass Communication) qualified scholar with a Ph.D. in Theatre & Performance Studies (JNU), specializing in Mass Communication (IIMC, New Delhi) and Social Sciences Research.
            </p>
            <p style={{ textAlign: 'justify' }}>
              He has 2+ years of teaching experience at Patna College and a strong background in 7+ years of radio journalism (GNR, All India Radio, New Delhi), media monitoring (BECIL, New Delhi), and 7+ years of socio-economic research (ANSISS, Xavier Institute, Patna).
            </p>
            <p style={{ textAlign: 'justify' }}>
              His publications include two peer-reviewed articles, two co-authored books, and multiple journalistic by-lines, alongside ICSSR-funded project reports.
            </p>
            <p style={{ textAlign: 'justify' }}>
              An accomplished theatre practitioner, he has acted, scripted, and directed plays addressing social issues.
            </p>
          </div>
        </div>

        <hr />

        {/* ===== 3. Dr. Shivam Rastogi ===== */}
        <div className="row align-items-center mb-5">
          <div className="col-md-4 text-center">
            <img
              src={ShivamImage}
              alt="Dr. Shivam Rastogi"
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
            <h4 style={{ fontWeight: 'bold' }}>Dr. Shivam Rastogi</h4>
            <h6 style={{ fontWeight: 'normal', color: '#555' }}>Assistant Professor</h6>
            <p style={{ textAlign: 'justify' }}>
              Dr. Shivam Rastogi has done Ph.D. in Journalism and Mass Communication from Central University of South Bihar, Gaya, Bihar in 2025. He completed his Master’s in Communication and Media Studies from the same university.
            </p>
            <p style={{ textAlign: 'justify' }}>
              He began his career with CARE India NGO, focusing on skill development of ground-level health workers using health communication strategies. His academic journey has explored Radio, TV, and Film Production. He also interned at Dainik Bhaskar in Patna.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Dr. Rastogi qualified NET-JRF in 2019 and worked with various community radio stations across Bihar. He has presented research papers in five National and two International conferences, authored two book chapters, and published five research papers in CARE-listed journals.
            </p>
            <p style={{ textAlign: 'justify' }}>
              He also completed two workshops on research methodology and SPSS data analysis, and two Faculty Development Programmes.
            </p>
          </div>
        </div>

        <hr />

        {/* ===== 4. Ms. Isha Birlay ===== */}
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={IshaImage}
              alt="Ms. Isha Birlay"
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
            <h4 style={{ fontWeight: 'bold' }}>Ms. Isha Birlay</h4>
            <h6 style={{ fontWeight: 'normal', color: '#555' }}>Assistant Professor</h6>
            <p style={{ textAlign: 'justify' }}>
              I have completed my graduation from St. Xavier’s College of Management and Technology, Patna in Mass Communication. Then I have completed my post-graduation from the School of Journalism and Mass Communication at Aryabhatta Knowledge University, Patna in Journalism and Mass Communication.
            </p>
            <p style={{ textAlign: 'justify' }}>
              I have qualified NET in December 2023 and have more than 1 year of teaching experience. Three research papers of mine are published in UGC Care listed and peer-reviewed journals. I have hosted many programs at All India Radio and Doordarshan Patna, and also worked with Press Trust of India.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Apart from this, my areas of interest include anchoring, traveling, reading novels, content writing, and many more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page52;
