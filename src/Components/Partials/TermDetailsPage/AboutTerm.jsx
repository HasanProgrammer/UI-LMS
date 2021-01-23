import React from "react";

/*-------------------------------------------------------------------*/

//Contexts
import TermDetailsContext from "../../../Contexts/TermDetailsContext";

/*-------------------------------------------------------------------*/

class AboutTerm extends React.Component
{
    static contextType = TermDetailsContext;

    render()
    {
        return (
            <div className="tabs_item">
                <br/>
                <ul className="course-list" style={{marginTop: "0em"}}>
                    <li>
                        <i className="bx bx-check"/>
                        <h3>توضیحاتی در خصوص دوره</h3>
                        <p>{this.context.TermDetails?.description}</p>
                    </li>

                    <li style={{marginTop: "3em"}}>
                        <i className="bx bx-check"/>
                        <h3>مواردی که در این دوره تدریس می شود</h3>
                        <p>{this.context.TermDetails?.result}</p>
                    </li>

                    <li style={{marginTop: "3em"}}>
                        <i className="bx bx-check"/>
                        <h3>دوره مناسب چه کسانی است</h3>
                        <p>{this.context.TermDetails?.suitable}</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default AboutTerm;