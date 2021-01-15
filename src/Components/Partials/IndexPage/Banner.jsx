import React    from "react";
import { Link } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Plugins
import Typewriter from "typewriter-effect";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig from "./../../../Configs/Route";

/*-------------------------------------------------------------------*/

class Banner extends React.Component
{
    static Types =
    [
        'جامع ترین دوره های برنامه نویسی ، مناسب برای بازار کار',
        'دوره های تخصصی برنامه نویسی سی شارپ',
        'دوره های تخصصی برنامه نویسی به زبان اسکریپتی پی اچ پی',
        'دوره های تخصصی برنامه نویسی به زبان اسکریپت نویسی پایتون',
        'دوره های تخصصی برنامه نویسی به زبان اسکریپت نویسی جاوا اسکریپت',
        'دوره های تخصصی برنامه نویسی با فریم ورک ASP Core',
        'دوره های تخصصی برنامه نویسی با فریم ورک Laravel',
        'دوره های تخصصی برنامه نویسی با فریم ورک Django',
        'دوره های تخصصی برنامه نویسی با فریم ورک ReactJS',
        'دوره های تخصصی برنامه نویسی SQL Server',
        'دوره های تخصصی برنامه نویسی MySQL',
    ];

    render()
    {
        return (
            <section className="banner-area-three jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid social">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="banner-content banner">
                                        <h1 style={{cursor: "default", fontSize: "3em", color: "#FFB607"}}> دوتریس ؛ </h1>
                                        <h1 style={{cursor: "default", fontSize: "1.5em"}}>( جامع ترین دوره های برنامه نویسی وب را با ما تجربه کنید )</h1>
                                        <p className="wow fadeInRight" data-wow-delay="0.6s">
                                            <Typewriter options=
                                                {
                                                    {
                                                        strings     : Banner.Types,
                                                        autoStart   : true,
                                                        loop        : true,
                                                        deleteSpeed : 1   , /*سرعت پاک کردن*/
                                                        delay       : 30    /*سرعت تایپ کردن*/
                                                    }
                                                }
                                            />
                                        </p>
                                        <Link to={`${RouteConfig.HomeComponents.TermsPage}`} className="default-btn wow fadeInRight"
                                           data-wow-delay="0.9s">
                                            مشاهده دوره ها
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;