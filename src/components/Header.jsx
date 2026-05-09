import React from "react";
import logo from "../asset/logo.png";
import logo2 from "../asset/aajaditwo.png";
const Header = () => {
  const headerStyle = {
    color: "white !important",
    fontWeight: "900",
  };
  return (
    // <header
    //   className=""
    //   style={{
    //     backgroundImage: `url('./image/banner3-2.jpeg')`,
    //     height: "30rem",
    //     backgroundSize: "cover",
    //     position: "relative",
    //   }}
    // >
    //   <div className="container text-white">
    //     <div className="navLogos">
    //       <div className="logo">
    //         <img src={logo} />
    //         <h1>
    //           आर्यभट्ट नॉलेज यूनिवर्सिटी
    //           <br />
    //           Aryabhatt Knowledge University
    //         </h1>
    //       </div>
    //       <div className="logo2">
    //         <img src={logo2} alt="" />
    //       </div>
    //     </div>
    //     <h1 style={headerStyle}>SCHOOL OF JOURNALISM AND MASS COMMUNICATION</h1>
    //   </div>
    // </header>
    <header className="header width100 flex alignCenter justifyCenter flexColumn" style={{ height: "20rem" }}>
      <div className="headerParent width100 flex alignStart justifyCenter" style={{ height: "20rem" }}>
        <div className="headerContainer width95 maxWidth flex alignCenter justifyCenter flexColumn" style={{ height: "20rem" }}>
          <div className="nav flex alignCenter spaceBtw width100">
            <div className="logo flex alignCenter justifyCenter gap1" >
              <img src={logo} alt="" style={{height:'8rem', width:'11rem',filter: 'drop-shadow(0px 0px 3px white)'}} />
              <h1 style={{margin:'-25px'}}>
                आर्यभट्ट ज्ञान विश्वविद्यालय
                <br />
                Aryabhatta Knowledge University
              </h1>
            </div>
            <div className="logo2">
              <img src={logo2} alt="" />
            </div>
          </div>
          <div className="heading">
            <h1 style={{position:'relative',bottom:'55px'}}>SCHOOL OF JOURNALISM AND MASS COMMUNICATION</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
