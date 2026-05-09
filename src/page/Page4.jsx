import React from 'react'
import Sanjeev from '../asset/SANJEEVkr.png';
import Arjun from '../asset/ARJUNTHAKUR.png';
import Amish from '../asset/AMISHANAND.png';
import { NavLink } from 'react-router-dom';
import Home from '../components/HomeButton'

function Page4() {
  return (
    <div>
      <Home/> <div  className="container">
    <div className="row justify-content-center align-items-center">
      {/* Vertical navigation bar component */}
      {/* <div className="col-md-2 bg-light border border-secondary p-4">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to={"./Page5"} className="nav-link text-dark">
            ➤Faculty
            </NavLink >
          </li>
          <li className="nav-item">
            <NavLink to={"./Page4"} className="nav-link text-dark">
            ➤Staff
            </NavLink>
          </li>
        </ul>
      </div> */}
      <div style={{ backgroundColor:'#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' , marginTop:'100px'}} className="col-md-9 p-4 mx-auto text-center ">
        
      <div className="row justify-content-center">
      <div className="col-md-12 text-center">
        <h2>Our Staff</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-3 text-center">
        <img src={Sanjeev} alt="Staff 1" className="img-fluid rounded border p-3" />
      <p> MR. SANJEEV KUMAR<br></br>
TECHNICAL ASSISTANT<br></br>
sanjeevspy007@gmail.com<br></br>
9939019792</p>
      </div>


      <div className="col-md-3 text-center">
        <img src={Arjun} alt="Staff 3" className="img-fluid rounded border p-3" />
        <p> MR. ARJUN THAKUR<br></br>
ACCOUNT ASSISTANT<br></br>
a4arjunthakur@gmail.com<br></br>
6299639899</p>
      </div>
      <div className="col-md-3 text-center">
        <img src={Amish} alt="Staff 4" className="img-fluid rounded border p-3" />
        <p> MR. AMISH ANAND<br></br>
ASSISTANT<br></br>
amysharma23@gmail.com<br></br>
9122733265</p>
      </div>

      {/* === Ranu Singh === */}
      {/*
      <div className="col-md-3 text-center">
        <img src={Ranu} alt="Staff 2" className="img-fluid rounded border p-3" />
        <p> MR. RANU SINGH<br></br>
        TECHNICAL ASSISTANT<br></br>
        ranusingh54897gmail.com<br></br>
        7061488930
        </p>
      </div>
      */}
  


    </div>
      </div>
    </div>

  </div></div>
  )
}

export default Page4