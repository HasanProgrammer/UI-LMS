import React    from "react";
import { Link } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig from "./../../../Configs/Route";

/*-------------------------------------------------------------------*/

class CardTerm extends React.Component
{
    render()
    {
        return (
            <div className="single-course">
                <Link to={`${RouteConfig.HomeComponents.TermDetailsPage}`}>
                    <img src="/Assets/img/509454-0373.jpg" alt="Image"/>
                </Link>
                <div className="course-content" style={{cursor: "default"}}>
                    <span className="price">300،000 تومان</span>
                    <span className="tag">برنامه نویسی #C</span>
                    <Link to={`${RouteConfig.HomeComponents.TermDetailsPage}`}>
                        <h3>دوره ی مقدماتی برنامه نویسی #C</h3>
                    </Link>
                    <p>توی این دوره یاد میگیریم که درباره چیزای مختلف توی سی شارپ ؛ چجوری ازشون استفاده کنیم</p>
                    <ul className="lessons">
                        <li>8 درس</li>
                        <li className="float">50 دانشجو</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CardTerm;