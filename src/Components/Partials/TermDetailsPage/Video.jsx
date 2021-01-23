import React from "react";

/*-------------------------------------------------------------------*/

//Plugins
import { toPersian } from "persian";

/*-------------------------------------------------------------------*/

//Contexts
import TermDetailsContext from "../../../Contexts/TermDetailsContext"; /*Using*/

/*-------------------------------------------------------------------*/

class Video extends React.Component
{
    static contextType = TermDetailsContext;

    render()
    {
        return (
            <li>
                <a className="meet-title">
                    <i className="bx bx-right-arrow"/>
                    <span>{" "}</span>
                    {this.props.video.title}
                </a>
                <a className="meet-time" style={{cursor: "pointer"}}>
                    <span className="min">{toPersian(this.props.video.duration)}</span>
                    <span>{" "}</span>
                    {
                        this.props.video.isFreeKey == 1
                        ?
                        (
                            <>
                                <span className="preview" id={this.props.video.id} onClick={this.context.DownloadVideo}>دانلود فیلم</span>
                                <span>{" "}</span>
                                <span className="preview" id={this.props.video.video} onClick={this.context.ShowVideo}>نمایش</span>
                            </>
                        )
                        :
                            this.props.status
                            ?
                            <span className="preview" id={this.props.video.id} onClick={this.context.DownloadVideo}>دانلود فیلم</span>
                            :
                            <i className="bx bxs-lock"/>
                    }
                </a>
            </li>
        )
    }
}

export default Video;