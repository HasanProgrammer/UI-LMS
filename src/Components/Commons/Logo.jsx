import React from "react";

class Logo extends React.Component
{
    render()
    {
        return (
            <a className="navbar-brand" href="index.html">
                <img src="/Assets/img/logo.png" alt="Logo"/>
            </a>
        );
    }
}

export default Logo;