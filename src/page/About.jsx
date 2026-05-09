import React from 'react';
import Home from '../components/HomeButton';
import myImage from '../asset/img2.jpeg';

function About() {
  const content = [
    "The School of Journalism and Mass Communication (SJMC) was established by the Bihar Government on April 12, 2017. Former Rajya Sabha MP Shri Pavan K Verma contributed approximately ₹9 crores from his MPLADs funds. Aryabhatta Knowledge University prepared the DPR for the institute.",
    "The government envisions SJMC as a future Centre of Excellence, aligning with both national and international institutions to modernize its journalism curriculum and raise the standard of media education in Bihar.",
    "Mass communication today plays a vital role in society's development and empowerment. It has become a key academic discipline, drawing increasing numbers of students passionate about impactful communication.",
    "The digital revolution has reshaped media landscapes, bringing both opportunities and challenges. At SJMC, we embrace these changes, preparing students and educators to lead in a dynamic media world.",
    "Mass Communication extends beyond journalism. It encapsulates all forms of human interaction through media — from news to entertainment, shaping how we perceive the world around us.",
    "Our mission includes producing skilled professionals who understand media's complexities and its power to influence society. SJMC stands committed to nurturing talent tailored to today’s media industry needs.",
    "From cave paintings to the digital age, communication has evolved dramatically. Mass communication gained ground when humans learned to speak to the masses — a legacy we continue at SJMC.",
    "In a diverse, pluralistic society like ours, media plays a crucial role in communication and social cohesion. We celebrate this diversity while fostering tolerance and shared understanding through journalism.",
    "We are witnessing a global explosion in communication technologies. SJMC ensures students understand these transformations and are well-equipped to navigate and lead in the global media ecosystem.",
    "Understanding media influence — how it shapes behavior, attitudes, and public opinion — is central to our academic focus at SJMC.",
    "To meet the demands of a rapidly evolving industry, we plan to offer courses in communication technologies and systems, staying at the forefront of innovation and applied research.",
    "SJMC was founded in response to the unregulated growth of media institutions in Bihar. We are committed to setting a high benchmark in curriculum design and media education.",
  ];

  return (
    <div>
      <Home />
      <div className="container my-5">
        <div
          className="mx-auto p-4"
          style={{
            background: '#f9f9f9',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            maxWidth: '1000px'
          }}
        >
          {/* Image Section */}
          <div className="text-center mb-5">
            <img
              src={myImage}
              alt="SJMC"
              style={{
                width: '60%',
                borderRadius: '12px',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
              }}
            />
          </div>

          {/* Heading */}
          <h2
            className="text-center mb-4"
            style={{
              background: 'linear-gradient(90deg, #1a73e8, #00acc1)',
              color: '#fff',
              padding: '16px',
              borderRadius: '10px',
              boxShadow: '4px 6px 14px rgba(0, 0, 0, 0.15)',
            }}
          >
            🎓 About SJMC
          </h2>

          {/* Paragraphs */}
          {content.map((text, index) => (
            <p
              key={index}
              style={{
                textAlign: 'justify',
                fontSize: '17px',
                lineHeight: '1.8',
                marginBottom: '20px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1a73e8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1a1a1a')}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
