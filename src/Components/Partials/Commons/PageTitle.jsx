import React from "react";

class PageTitle extends React.Component
{
    render()
    {
        return (
            <div className="page-title-area bg-25">
                <div className="container">
                    <div className="page-title-content" style={{cursor: "default"}}>
                        <h2>{this.props.title}</h2>
                        <h6 style={{color: "var(--main-color)"}}>{this.props.subtitle}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageTitle;