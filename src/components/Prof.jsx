import React from 'react'
import stak from '../images/stakeholder.png';
import jse from '../images/job-search.png';
import lb from '../images/light-bulb.png';
import gp from '../images/group.png';


function Prof() {
    return (
        <>

            <div className="text-center" style={{ marginTop: "50px" }}>
                <h1>For Professionals</h1>
                <p>WANT TO IMPROVE YOUR <span>GAME DEV CAREER</span>?</p>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="d-flex align-items-center">
                            <img src={stak} alt="Column 1 Image" width="50" />
                            <h2 className="p-2">SHOWCASE YOUR WORK</h2>
                        </div>
                        {/* <img src="./images/stakeholder.png" alt="network" className="img1" /> */}
                        {/* <h2>SHOWCASE YOUR WORK</h2> */}
                        <div className="align-items-center" style={{ marginLeft: '60px !important' }}>
                            <p>Build your professional Identity.<br />Get inbound opportunities through your portfolio.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="d-flex align-items-center">
                            <img src={jse} alt="Column 1 Image" width="50" />
                            <h2 className="p-2">EMPLOYMENT OPPORTUNITY</h2>
                        </div>
                        {/* <img src="./images/stakeholder.png" alt="network" className="img1" /> */}
                        {/* <h2>SHOWCASE YOUR WORK</h2> */}
                        <div className="align-items-center" style={{ marginLeft: '60px !important' }}>
                            <p>Find new jobs on the job portal.<br />Let recruiters and peers discover your work.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="d-flex align-items-center">
                            <img src={lb} alt="Column 1 Image" width="50" />
                            <h2 className="p-2">UPSKILL YOUR KNOWLEDGE</h2>
                        </div>
                        {/* <img src="./images/stakeholder.png" alt="network" className="img1" /> */}
                        {/* <h2>SHOWCASE YOUR WORK</h2> */}
                        <div className="align-items-center" style={{ marginLeft: '60px !important' }}>
                            <p>Interact with experts for insights & guidance.<br />Be updated with latest trends, tech and skills.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12">
                        <div className="d-flex align-items-center">
                            <img src={gp} alt="Column 1 Image" width="50" />
                            <h2 className="p-2">COMMUNITY</h2>
                        </div>
                        {/* <img src="./images/stakeholder.png" alt="network" className="img1" /> */}
                        {/* <h2>SHOWCASE YOUR WORK</h2> */}
                        <div className="align-items-center" style={{ marginLeft: '60px !important' }}>
                            <p>Find your peers with similar interest.<br />Discover new projects, products and people<br />you want to work with.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Prof