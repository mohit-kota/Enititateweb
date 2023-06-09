import React from 'react'

import competence from '../images/competence.png';
import recruitment from '../images/recruitment.png';
import socialMedia from '../images/social-media.png';
import roc from '../images/rocket.png';

function Buss() {
    return (
        <div>


            <div class="text-center">
                <h1>For Business</h1>
                <p>WANT TO INCREASE YOUR <span>BUSINESS DISCOVERY AND REVENUE</span>?</p>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="d-flex align-items-center">
                            <img src={competence} alt="Column 1 Image" width="50" />
                            <h2 className="p-2">DISCOVER TALENT</h2>
                        </div>
                        {/* <img src="./images/stakeholder.png" alt="network" className="img1" /> */}
                        {/* <h2>SHOWCASE YOUR WORK</h2> */}
                        <div className="align-items-center" style={{ marginLeft: '60px !important' }}>
                            <p>Discover new talents as a recruiter.<br />Analyse profiles with proof of skill.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="d-flex align-items-center">
                            <img src={recruitment} alt="Column 1 Image" width="50" />
                            <h2 className="p-2">EASY RECRUITING</h2>
                        </div>
                        {/* <img src="./images/stakeholder.png" alt="network" className="img1" /> */}
                        {/* <h2>SHOWCASE YOUR WORK</h2> */}
                        <div className="align-items-center" style={{ marginLeft: '60px !important' }}>
                            <p>List openings directly into industry professionals.<br />Manage and recruit candidates with ease.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="d-flex align-items-center">
                            <img src={socialMedia} alt="Column 1 Image" width="50" />
                            <h2 className="p-2">MARKETING</h2>
                        </div>
                        {/* <img src="./images/stakeholder.png" alt="network" className="img1" /> */}
                        {/* <h2>SHOWCASE YOUR WORK</h2> */}
                        <div className="align-items-center" style={{ marginLeft: '60px !important' }}>
                            <p>Promote posts to your target audience.<br />Create Ad campaigns for your gaming related product.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="d-flex align-items-center">
                            <img src={roc} alt="Column 1 Image" width="50" />
                            <h2 className="p-2">BUSINESS DISCOVERY</h2>
                        </div>
                        {/* <img src="./images/stakeholder.png" alt="network" className="img1" /> */}
                        {/* <h2>SHOWCASE YOUR WORK</h2> */}
                        <div className="align-items-center" style={{ marginLeft: '60px !important' }}>
                            <p>Let people find your business & product in a relevant space.<br />Find, connect and collab with other businesses.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buss