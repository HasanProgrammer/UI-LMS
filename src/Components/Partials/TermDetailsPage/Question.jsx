import React from "react";

/*-------------------------------------------------------------------*/

//Contexts
import MasterContext      from "../../../Contexts/MasterContext";      /*Using*/
import TermDetailsContext from "../../../Contexts/TermDetailsContext"; /*Using*/

/*-------------------------------------------------------------------*/

//Configs
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Components
import Answer from "./Answer";

/*-------------------------------------------------------------------*/

class Question extends React.Component
{
    render()
    {
        return (
            <MasterContext.Consumer>
                {(master) => (
                    <TermDetailsContext.Consumer>
                        {(term) => this.getMainContent(master, term)}
                    </TermDetailsContext.Consumer>
                )}
            </MasterContext.Consumer>
        )
    }

    /*---------------------------------------------------------------CUSTOM---------------------------------------------------------------*/

    getMainContent = (masterContext, termDetailsContext) =>
    {
        return (
            <>
                <li>
                    <img className="image-thumb" src={`${RouteServerConfig.Root + "/" + this.props.comment.userImage}`} alt="Image"/>
                    <h3>{ this.props.comment.userName }</h3>
                    <span>{ masterContext.EnNumberToPersian(this.props.comment.title) }</span>
                    <p>
                        { masterContext.EnNumberToPersian(this.props.comment.content) }
                    </p>

                    <ul className="course-reviews answer-area">
                        {
                            this.props.comment.answers?.length == 0
                            ?
                            (<span style={{textAlign: "center"}}>{"به این پرسش پاسخی داده نشده است"}</span>)
                            :
                            this.props.comment.answers?.map(answer => <Answer answer={answer}/>)
                        }
                    </ul>
                </li>
                <br/>
                <br/>
            </>
        )
    }
}

export default Question;