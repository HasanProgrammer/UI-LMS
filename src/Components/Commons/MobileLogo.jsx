import React from "react";

class MobileLogo extends React.Component
{
    render()
    {
        return (
            <div className="mobile-nav">
                <a href="index.html" className="logo">
                    <img src="assets/img/logo.png" alt="Logo"/>
                </a>
            </div>
        );
    }
}

export default MobileLogo;