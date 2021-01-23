import React from "react";

/*-------------------------------------------------------------------*/

//Contexts
import MasterContext      from "../../../Contexts/MasterContext";      /*Using*/
import TermDetailsContext from "../../../Contexts/TermDetailsContext"; /*Using*/

/*-------------------------------------------------------------------*/

//Configs
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

class Answer extends React.Component
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
            <li>
                <img className="image-thumb" src={`${RouteServerConfig.Root + "/" + this.props.answer.userImage}`} alt="Image"/>
                <h3>{ this.props.answer.userName }</h3>
                <p>
                    { masterContext.EnNumberToPersian(this.props.answer.content) }
                </p>
            </li>
        )
    }
}

export default Answer;