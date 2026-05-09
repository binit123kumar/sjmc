import React from 'react'
import Director from '../asset/founding_director.jpeg'
import Home from '../components/HomeButton'

function Page9() {
  return (
    <div> <Home/><div  className="container">
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
        <img style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} src={Director} alt="Your Image" className="img-fluid" />
        
              <h2 style={{ position: 'relative', top: '-5px', transform: 'translateY(50%)' }} className="text-left">Iftekhar Ahmed</h2>
              <hr/>
              <h4 style={{ position: 'relative', top: '-3px', transform: 'translateY(-50%)',fontWeight: 'normal' }}>Message from Founder Director</h4>
              <p style={{textAlign:'left'}} >
        Mass Communication is an essential component of human society. It is effective when delivered in a suitable form. This can be done by a well-educated, groomed, and skilled media professional having a creative and critical bent of mind. A person desirous to work in the competitive and growing field of mass communication or media industry should have these abilities and skills to make an impact.
      </p>
      <p style={{textAlign:'left'}} >
        Research is another significant area of mass communication that has the potential to create new knowledge. Media research is in high demand in the industry, academics, and society for various purposes. Hence systematic learning of the art and craft of media profession and research technique results in the growth of the profession and the individuals.
      </p>
      <p style={{textAlign:'left'}} >
        School of Journalism & Mass Communication (SJMC) has been set up by the Government of Bihar in the historic city of Patna situated at the bank of majestic Ganges with the objective to impart quality media education and facilitate research program for the youth, media professional, academia, and contribute to the progress of society through its programs and extension works. This school envisions to nurture the learners' minds with media skills, critical thinking, creativity, and research and innovation abilities of global standard that mass communication professionals and researchers are required to have to promote information and knowledge-based society for human progress.
      </p>
      <p style={{textAlign:'left'}} >
        The SJMC has a group of qualified and accomplished faculty members with state-of-the-art equipment and facility. The courses have been meticulously designed to groom interested and eligible raw hands into competent media professionals and researchers by providing a suitable learning environment. The successful students and researchers after finishing their programs will be able to get a suitable employment in the media industry, NGOs, govt. offices, and various national and international organizations. Enterprising persons on completion of the course can start her/his independent venture as a media entrepreneur or a freelancer. Besides this, there are many persons who learn the art and craft of media to pursue their media hobby.
      </p>
        
      </div>
    </div>
  </div></div>
  )
}

export default Page9