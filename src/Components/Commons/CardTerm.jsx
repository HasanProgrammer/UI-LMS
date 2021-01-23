import React    from "react";
import { Link } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig       from "./../../Configs/Route";
import RouteServerConfig from "./../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Plugins
import EllipsisText from "react-ellipsis-text";

/*-------------------------------------------------------------------*/

//Contexts
import MasterContext from "../../Contexts/MasterContext"; /*Using*/

/*-------------------------------------------------------------------*/

class CardTerm extends React.Component
{
    static contextType = MasterContext;

    render()
    {
        return (
            <div className="single-course" dir="rtl" title={this.props.title}>
                <img src={RouteServerConfig.Root + "/" + this.props.image} alt="Image"/>
                <div className="course-content" style={{cursor: "default"}}>
                    <span className="price">{this.context.EnNumberToPersian(this.props.price.toString())} تومان </span>
                    <Link to={`${RouteConfig.HomeComponents.TermDetailsPage.replace(":id", this.props.id)}`}>
                        <h3><EllipsisText text={this.props.title} length={33}/></h3>
                    </Link>
                    <p><EllipsisText text={this.props.description} length={80}/></p>
                    <ul className="lessons">
                        <li>{this.context.EnNumberToPersian(this.props.countVideo.toString())} درس </li>
                        <li className="float">{this.context.EnNumberToPersian(this.props.countUser.toString())} دانشجو </li>
                    </ul>

                    <div className="pt-4">
                        <Link style={{width: "100%"}} to={`${RouteConfig.HomeComponents.TermDetailsPage.replace(":id", this.props.id)}`}>
                            <button className="default-btn register" type="button">مشاهده بیشتر</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardTerm;