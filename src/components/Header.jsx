import React from 'react'
import Nav from './Nav'

function Header() {
    return (
        <div style={{ background: "#eff4fd" }}>
            <Nav />
            <div className="detel">
                <h1>We help <span>PROFESSIONALS & BUSINESSES</span></h1>
                <p>in the <span>GAMING INDUSTRY</span> with DISCOVERY & OPPORTUNITY</p>
                <a href="#join">JOIN THE WAITLIST</a>
            </div>
        </div>
    )
}

export default Header