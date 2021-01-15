import React    from "react";
import { Link } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig       from "./../../Configs/Route";
import RouteServerConfig from "./../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Plugins
import { PulseLoader } from "react-spinners";

/*-------------------------------------------------------------------*/

class CardTerm extends React.Component
{
    // static PreLoaderStyle =
    // {
    //     width           : "100%"   ,
    //     height          : "12em"   ,
    //     display         : "block"  ,
    //     margin          : "auto"   ,
    //     borderColor     : "red"    ,
    //     textAlign       : "center" ,
    //     verticalAlign   : "center" ,
    //     backgroundColor : "whitesmoke"
    // };

    render()
    {
        return (
            <div className="single-course" dir="rtl">
                <Link style={{width: "100%"}} to={`${RouteConfig.HomeComponents.TermDetailsPage}`}>
                    {/*<PulseLoader loading={true} css={CardTerm.PreLoaderStyle} size={10}/>*/}
                    <img src={RouteServerConfig.Root + "/" + this.props.image} alt="Image"/>
                </Link>
                <div className="course-content" style={{cursor: "default"}}>
                    <span className="price">{this.props.price} تومان </span>
                    <Link onClick={this.onClickShowDetailsButton} to={`${RouteConfig.HomeComponents.TermDetailsPage.replace(":id", this.props.id)}`}>
                        <h3>{this.props.title}</h3>
                    </Link>
                    <p>{this.props.description}</p>
                    <ul className="lessons">
                        <li>{this.props.countVideo} درس </li>
                        <li className="float">{this.props.countUser} دانشجو </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CardTerm;