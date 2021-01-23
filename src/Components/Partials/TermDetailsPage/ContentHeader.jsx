import React from "react";

/*-------------------------------------------------------------------*/

//Configs
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Contexts
import TermDetailsContext from "../../../Contexts/TermDetailsContext";

/*-------------------------------------------------------------------*/

//Plugins
import { Player } from "video-react";

/*-------------------------------------------------------------------*/

//Styles

/*-------------------------------------------------------------------*/

class ContentHeader extends React.Component
{
    static contextType = TermDetailsContext;

    render()
    {
        console.log(this.context.VideoSource)

        return (
            <div className="single-course-content" style={{cursor: "default"}}>
                <h3 className="default-font">{this.context.TermDetails?.description}</h3>

                {
                    this.context.VideoSource === null
                    ?
                    <img src={RouteServerConfig.Root + "/" + this.context.TermDetails?.image} alt=""/>
                    :
                    (
                        <div className="video-player">
                            <Player
                                playsInline
                                poster={RouteServerConfig.Root + "/" + this.context.TermDetails?.image}
                                src={this.context.VideoSource}
                            />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default ContentHeader;