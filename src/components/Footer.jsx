import React from 'react';
import FooterLogo from '../asset/footer_logo.png'

const Footer = () => {
    return (
        <nav
            className="navbar"
            style={{ backgroundColor: '#000', padding: '40px 40px', color: '#fff' }}
        >
            <div className="container-fluid">
                <div className="row">
                    {/* First div with logo and contact information */}
                    <div className="col-12 col-md-4 col-lg-4 d-flex">
                        <div>
                            <img src={FooterLogo} alt="University Logo" style={{width:'100%', paddingBottom:'10px', position:'relative', right:'80px'}} />
                            <p>Reception: 0612-2952742</p>
                            <p>Phone : +91 9241027682</p>
                            <p>Address:  Aryabhatta Knowledge University Campus, Mithapur, Patna, Bihar (India)</p>
                            <p>Email: sjmcpatna@gmail.com</p>
                        </div>
                    </div>

                    {/* Second div with heading and links */}
                    <div className="col-12 col-md-4 col-lg-4">
                        <h4>Important Links</h4>
                        <ul>
                        <li><a   href="https://www.nda.gov.in/" className="dropdown-item"> NDA </a></li>
                        <li><a   href="https://www.nptel.ac.in/" className="dropdown-item"> NPTEL </a></li>
                        <li><a   href="https://www.swayam.gov.in/" className="dropdown-item"> SWAYAM </a></li>
                        <li><a   href="https://www.swayamprabhay.gov.in/" className="dropdown-item"> SWAYAM PRABHA </a></li>
                        <li><a   href="https://egyankosh.ac.in/" className="dropdown-item"> EGYANKOSH </a></li>
                            {/* Add similar links for remaining entries */}
                        </ul>
                        
                        {/* Social media links */}
                        <div>
                            <h4>Social Media</h4>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/people/School-of-Journalism-and-Mass-Communication-Patna/100063903589436/?ref=embed_page">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/PatnaSjmc">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@AryabhattaKnowledgeUniversity">Youtube</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@schoolofjournalismmasscomm6140">Youtube SJMC</a>
                                </li>
                                {/* Add more social media links */}
                            </ul>
                        </div>
                    </div>

                    {/* Third div with map iframe */}
                    <div className="col-12 col-md-4 col-lg-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3598.37951544783!2d85.1323539!3d25.5923023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58702e5ae787%3A0x6c55883d32ec4db4!2sAryabhatta%20Knowledge%20University!5e0!3m2!1sen!2sin!4v1714559725531!5m2!1sen!2sin"
                            width="400"
                            height="300"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Arybhatta Knowledge University - Patna"
                        ></iframe>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Footer;
