import React from 'react'
import linkedin from '../images/linkedin.png';

function Footer() {
    return (
        <div>
            <div id="join" className="hero1">
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>JOIN THE WAITLIST</h2>
                            <p>Get notified about our latest updates and product launches.</p>
                        </div>
                        <div className="col-md-6">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role">Role</label>
                                    <input type="text" className="form-control" id="role" placeholder="Enter your role" />
                                </div>
                                <button type="submit" className="btn my-2" style={{ borderRadius: '18px !important', backgroundColor: 'orange !important' }}>Join</button>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h3>STAY IN TOUCH</h3>
                            <p>Connect with us on LinkedIn for updates and more.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={linkedin} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer