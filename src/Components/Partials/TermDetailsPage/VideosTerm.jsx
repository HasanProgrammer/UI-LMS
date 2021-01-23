import React from "react";

/*-------------------------------------------------------------------*/

//Components
import Video   from "./Video";
import Chapter from "./Chapter";

/*-------------------------------------------------------------------*/

//Plugins
import { toPersian } from "persian";

/*-------------------------------------------------------------------*/

//Contexts
import TermDetailsContext from "../../../Contexts/TermDetailsContext"; /*Using*/

/*-------------------------------------------------------------------*/

class VideosTerm extends React.Component
{
    static contextType = TermDetailsContext;

    render()
    {
        return (
            <div className="tabs_item">
                <br/>
                <div className="curriculum-content">
                    {
                        this.context.TermDetails?.hasChapterKey == 1
                        ?
                            this.context.TermDetails?.chapters.length == 0
                            ?
                            (<div className="curriculum-list"><ul><li style={{textAlign: "center"}}>{"هیچ فیلمی در حال حاظر منتشر نشده است"}</li></ul></div>)
                            :
                            (
                                <div className="curriculum-list">
                                    {this.context.TermDetails?.chapters?.map(chapter => <Chapter status={this.context.TermDetails?.isBuyed} chapter={chapter}/>)}
                                </div>
                            )
                        :
                        (
                            <div className="curriculum-list">
                                <ul>
                                    {
                                        this.context.TermDetails?.videos.length == 0
                                        ?
                                        (<li style={{textAlign: "center"}}>{"هیچ فیلمی در حال حاظر منتشر نشده است"}</li>)
                                        :
                                        this.context.TermDetails?.videos?.map(video => <Video status={this.context.TermDetails?.isBuyed} video={video}/>)
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default VideosTerm;