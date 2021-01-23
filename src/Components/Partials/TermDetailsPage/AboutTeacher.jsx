import React from "react";

/*-------------------------------------------------------------------*/

//Configs
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Contexts
import TermDetailsContext from "../../../Contexts/TermDetailsContext"; /*Using*/

/*-------------------------------------------------------------------*/

class AboutTeacher extends React.Component
{
    static contextType = TermDetailsContext;

    render()
    {
        return (
            <div className="tabs_item">
                <br/>
                <div className="instructor-content">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            {/*<div className="advisor-img"></div>*/}
                            <img className="" style={{borderRadius: "0"}} src={this.context.TermDetails?.userImage != null ? RouteServerConfig.Root + "/" + this.context.TermDetails?.userImage : "/Assets/img/unknown-avatar.jpg"} alt="Image"/>
                        </div>
                        <div className="col-lg-8">
                            {/*<div className="advisor-content"></div>*/}
                            <h3>{this.context.TermDetails?.userName}</h3>
                            <span>{this.context.EnNumberToPersian(this.context.TermDetails?.userExpert)}</span>

                            <hr/>

                            <p>{this.context.EnNumberToPersian(this.context.TermDetails?.userDescription)}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutTeacher;