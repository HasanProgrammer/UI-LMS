import React from "react";

/*-------------------------------------------------------------------*/

//Configs
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Contexts
import TermDetailsContext from "../../../Contexts/TermDetailsContext"; /*Using*/

/*-------------------------------------------------------------------*/

//Components
import Question        from "./Question";
import RegisterComment from "./RegisterComment";

/*-------------------------------------------------------------------*/

class QA extends React.Component
{
    static contextType = TermDetailsContext;

    render()
    {
        return (
            <div className="tabs_item">
                <br/>
                <RegisterComment/>
                {/*<div className="review-content">
                    <div className="course-reviews-content">
                        <ul className="course-reviews comment-area">
                            {
                                this.context.TermDetails?.comments.length == 0
                                ?
                                (<span style={{textAlign: "center"}}>{"نظری درباره دوره جاری ثبت نشده است"}</span>)
                                :
                                this.context.TermDetails?.comments?.map(comment => <Question comment={comment}/>)
                            }
                        </ul>
                    </div>
                </div>*/}
            </div>
        )
    }
}

export default QA;