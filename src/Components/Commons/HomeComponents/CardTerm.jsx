import React    from "react";
import { Link } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig from "./../../../Configs/Route";

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
            <div className="single-course">
                <Link style={{width: "100%"}} to={`${RouteConfig.HomeComponents.TermDetailsPage}`}>
                    {/*<PulseLoader loading={true} css={CardTerm.PreLoaderStyle} size={10}/>*/}
                    <img src="/Assets/img/509454-0373.jpg" alt="Image"/>
                </Link>
                <div className="course-content" style={{cursor: "default"}}>
                    <span className="price">300،000 تومان</span>
                    <span className="tag">برنامه نویسی #C</span>
                    <Link to={`${RouteConfig.HomeComponents.TermDetailsPage}`}>
                        <h3>دوره ی مقدماتی برنامه نویسی #C</h3>
                    </Link>
                    <p>این دوره یاد و یاد میگیریم که باید استفاده کنیم توی</p>
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