import React from "react";

/*-------------------------------------------------------------------*/

//Plugins
import { toPersian } from "persian";

/*-------------------------------------------------------------------*/

//Contexts
import MasterContext from "../../../Contexts/MasterContext"; /*Using*/

/*-------------------------------------------------------------------*/

//Components
import Video from "./Video";

/*-------------------------------------------------------------------*/

class Chapter extends React.Component
{
    static contextType = MasterContext;

    render()
    {
        return (
            <>
                <h4>{this.props.chapter.title}</h4>
                <ul>
                {
                    this.props.chapter.videos?.map(video => <Video video={video} status={this.props.status}/>)
                }
                </ul>
            </>
        )
    }
}

export default Chapter;