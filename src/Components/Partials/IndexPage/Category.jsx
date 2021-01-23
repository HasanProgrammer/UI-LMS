import React    from "react";
import { Link } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig from "./../../../Configs/Route";
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Plugins
import Axios   from "axios";
import Persian from "persian";

/*-------------------------------------------------------------------*/

class Category extends React.Component
{
    state =
    {
        CountCSH  : 0,
        CountPHP  : 0,
        CountPYT  : 0,
        CountJS   : 0,
        CountASP  : 0,
        CountLRL  : 0,
        CountDJO  : 0,
        CountRTJ  : 0,
        CountSQL  : 0,
        CountMSQL : 0
    };

    async componentDidMount()
    {
        await Axios.get(`${RouteServerConfig.Root + RouteServerConfig.CountTermCategory}`).then(response =>
        {

            if(response?.data?.code == 200)
            {
                this.setState({
                    CountCSH  : response?.data?.body?.countCSH,
                    CountPHP  : response?.data?.body?.countPHP,
                    CountPYT  : response?.data?.body?.countPYT,
                    CountJS   : response?.data?.body?.countJS,
                    CountASP  : response?.data?.body?.countASP,
                    CountLRL  : response?.data?.body?.countLaravel,
                    CountDJO  : response?.data?.body?.countDjango,
                    CountRTJ  : response?.data?.body?.countReactJS,
                    CountSQL  : response?.data?.body?.countSQLServer,
                    CountMSQL : response?.data?.body?.countMYSql
                })
            }

        }).catch(response => {});
    }

    render()
    {
        return (
            <section className="categories-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-categories category-csh">
                                <div className="categories-content-wrap">
                                    <div className="categories-content" style={{cursor: "default"}}>
                                        <Link to={`${RouteConfig.HomeComponents.TermsCSHPage}`}>
                                            <h3>برنامه نویسی #C</h3>
                                        </Link>
                                        <span>{ Persian.toPersian(parseInt(this.state.CountCSH)) } دوره </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-categories category-php">
                                <div className="categories-content-wrap">
                                    <div className="categories-content">
                                        <Link to={`${RouteConfig.HomeComponents.TermsPHPPage}`}>
                                            <h3>برنامه نویسی PHP</h3>
                                        </Link>
                                        <span>{ Persian.toPersian(parseInt(this.state.CountPHP)) } دوره </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-categories category-pyt">
                                <div className="categories-content-wrap">
                                    <div className="categories-content">
                                        <Link to={`${RouteConfig.HomeComponents.TermsPYTPage}`}>
                                            <h3>برنامه نویسی Python</h3>
                                        </Link>
                                        <span>{ Persian.toPersian(parseInt(this.state.CountPYT)) } دوره </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-categories category-js">
                                <div className="categories-content-wrap">
                                    <div className="categories-content">
                                        <Link to={`${RouteConfig.HomeComponents.TermsJSPage}`}>
                                            <h3>برنامه نویسی JavaScript</h3>
                                        </Link>
                                        <span>{ Persian.toPersian(parseInt(this.state.CountJS)) } دوره </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-categories category-asp">
                                <div className="categories-content-wrap">
                                    <div className="categories-content">
                                        <Link to={`${RouteConfig.HomeComponents.TermsASPPage}`}>
                                            <h3>برنامه نویسی ASP Core</h3>
                                        </Link>
                                        <span>{ Persian.toPersian(parseInt(this.state.CountASP)) } دوره </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-categories category-laravel">
                                <div className="categories-content-wrap">
                                    <div className="categories-content">
                                        <Link to={`${RouteConfig.HomeComponents.TermsLaravelPage}`}>
                                            <h3>برنامه نویسی Laravel</h3>
                                        </Link>
                                        <span>{ Persian.toPersian(parseInt(this.state.CountLRL)) } دوره </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-categories category-django">
                                <div className="categories-content-wrap">
                                    <div className="categories-content">
                                        <Link to={`${RouteConfig.HomeComponents.TermsDjangoPage}`}>
                                            <h3>برنامه نویسی Django</h3>
                                        </Link>
                                        <span>{ Persian.toPersian(parseInt(this.state.CountDJO)) } دوره </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-categories category-reactjs">
                                <div className="categories-content-wrap">
                                    <div className="categories-content">
                                        <Link to={`${RouteConfig.HomeComponents.TermsReactJSPage}`}>
                                            <h3>برنامه نویسی ReactJS</h3>
                                        </Link>
                                        <span>{ Persian.toPersian(parseInt(this.state.CountRTJ)) } دوره </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <div className="single-categories category-sqlserver">
                                <div className="categories-content-wrap">
                                    <div className="categories-content">
                                        <Link to={`${RouteConfig.HomeComponents.TermsSQLServerPage}`}>
                                            <h3>برنامه نویسی SQL Server</h3>
                                        </Link>
                                        <span>{ Persian.toPersian(parseInt(this.state.CountSQL)) } دوره </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="single-categories category-mysql">
                                <div className="categories-content-wrap">
                                    <div className="categories-content">
                                        <Link to={`${RouteConfig.HomeComponents.TermsMySQLPage}`}>
                                            <h3>برنامه نویسی MySQL</h3>
                                        </Link>
                                        <span>{ Persian.toPersian(parseInt(this.state.CountMSQL)) } دوره </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="text-center">
                                <Link to={`${RouteConfig.HomeComponents.TermsPage}`} className="default-btn">مشاهده دوره ها</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Category;