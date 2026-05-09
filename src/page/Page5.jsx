import React, { useEffect } from 'react'
import Home from '../components/HomeButton'

import { NavLink } from 'react-router-dom';
import Manisha from '../asset/DrManishaPrakash.jpeg'
function Page5() {


  useEffect(() => {

    // scrolls to the top
    window.scrollTo(0, 0);
  }, []);
  return (

    
    <div>
      <Home/> <div  className="container">
    <div className="row justify-content-center align-items-center">
      {/* Vertical navigation bar component */}
      {/* <div className="col-md-2 bg-light border border-secondary p-4" style={{position:'relative' , bottom:'300px'}}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to={"./page5"} className="nav-link text-dark">
            ➤Faculty
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"./page4"} className="nav-link text-dark">
            ➤Staff
            </NavLink>
          </li>
        </ul>
      </div> */}
      <div style={{ backgroundColor:'#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}} className="col-md-9 p-4 mx-auto text-center ">
        <img style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} src={Manisha} alt="Your Image" className="img-fluid" />
        
              <h2 style={{ position: 'relative', top: '-5px', transform: 'translateY(50%)' }} className="text-left">Dr. Manisha Prakash</h2>
              <hr/>
              <h4 style={{ position: 'relative', top: '-3px', transform: 'translateY(-50%)',fontWeight: 'normal' }}>Asst. Professor</h4>
               <p className="mt-4 mx-auto text-left">
               <span style={{ fontWeight: 'bold' }}>Dr. Manisha Prakash </span>is Head, Academic of the Aryabhatta Knowledge University and Assistant Professor, School of Journalism and Mass Communication. She also holds the position of the OSD to Hon’ble Vice Chancellor, Aryabhatta Knowledge University.<br></br><br></br>

She has been with the University since 14th August, 2018 and has worked in several roles including the establishment of the School of Journalism and Mass Communication. She also worked as Employability Skill Coordinator of the University under TEQIP project and presently is also working as the NAAC coordinator, PRO and IT Cell Head of the University. She is also the Nodal Officer for Incubation Centre, Samarth and NKN.<br></br><br></br>

She began her career with The Times of India, Patna. She was the founder editor of a popular news website from Bihar and also launched/edited a Hindi news magazine. She was also an empaneled filmmaker with IPRD, Bihar and Bihar State Film Development and Finance Corporation. She has worked as Asst. Professor, Mass Communication at the St Xavier’s College of Management & Technology, Patna and has also been a guest faculty at Patna University, Nalanda Open University, Maulana Mazharul Haque Arabic & Persian University, J. D. Women’s College and Amity University, Patna. She was awarded Care-WFS Media Fellowship, 2008. She has worked as a media consultant for DFID for projects like Bihar Health Sector Reforms and Support programme for Urban Reforms & for INPPC, Rotary International. She was also associated with UNICEF, JANANI and other organizations of repute in various projects. She has also been a Programme Coordinator, INPPC, Rotary International She is also a media entrepreneur, writer and translator. She has been selected by NPTEL as translator for its courses. She has been involved in various academic and media activities. Her articles have been published in national dailies like HT, The Hindu, The Asian Age, Pioneer.  <br></br><br></br>

She is a member, Board of Studies of SJMC and Patna Women’s College for Media studies and is serving as member of various committees of the University and its affiliated institutions. She has organized several training programmes and activities. She has contributed to research on several aspects of media studies and presented paper in a number of seminars, has been a key note speaker at various conferences and resource person for FDPs, training programmes and workshops.<br></br><br></br>

She is a bilingual writer and has published a book titled Do Gaj Doori and a story in the anthology Women’s Wallet. An Encyclopaedia entry titled ‘Women in Indian cinema’ was published in <span style={{ fontStyle: 'italic' }}> The International Encyclopedia of Gender, Media, and Communication, WILEY.</span> <br></br><br></br>

She has an M.Sc. (Mass Communication in Science & Technology) from Lucknow University and Ph.D from Ranchi University titled “Role of Media in Disaster Management: A case study of Bihar floods, 2008”. <br></br><br></br>





               </p>
        
      </div>
    </div>
  </div></div>
  )
}

export default Page5