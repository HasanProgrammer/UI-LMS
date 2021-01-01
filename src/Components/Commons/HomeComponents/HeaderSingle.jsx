import React    from "react";
import { Link } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Components
import Logo       from "./Logo";
import MobileLogo from "./MobileLogo";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig from "./../../../Configs/Route";

/*-------------------------------------------------------------------*/

class HeaderSingle extends React.Component
{
    render()
    {
        return (
            <div className="navbar-area">

                {/*<MobileLogo/>*/}

                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md">

                            {/*<Logo/>*/}

                            <div className="collapse navbar-collapse mean-menu">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link to={`${RouteConfig.HomeComponents.IndexPage}`} className="nav-link active">صفحه اصلی</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`${RouteConfig.HomeComponents.TermsPage}`} className="nav-link">
                                            دوره های برنامه نویسی
                                            <i className="bx bx-chevron-down"/>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to={`${RouteConfig.HomeComponents.TermsCSHPage}`} className="nav-link">دوره ی برنامه نویسی زبان #C</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`${RouteConfig.HomeComponents.TermsPHPPage}`} className="nav-link">دوره ی برنامه نویسی زبان PHP</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`${RouteConfig.HomeComponents.TermsPYTPage}`} className="nav-link">دوره ی برنامه نویسی زبان Python</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`${RouteConfig.HomeComponents.TermsJSPage}`} className="nav-link">دوره ی برنامه نویسی زبان JS</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`${RouteConfig.HomeComponents.TermsASPPage}`} className="nav-link">دوره ی برنامه نویسی ASP Core</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`${RouteConfig.HomeComponents.TermsLaravelPage}`} className="nav-link">دوره ی برنامه نویسی Laravel</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`${RouteConfig.HomeComponents.TermsDjangoPage}`} className="nav-link">دوره ی برنامه نویسی Django</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`${RouteConfig.HomeComponents.TermsReactJSPage}`} className="nav-link">دوره ی برنامه نویسی ReactJS</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`${RouteConfig.HomeComponents.TermsSQLServerPage}`} className="nav-link">دوره ی برنامه نویسی SQL Server</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`${RouteConfig.HomeComponents.TermsMySQLPage}`} className="nav-link">دوره ی برنامه نویسی MySQL</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            وبلاگ
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link">ارتباط با مجموعه</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" className="nav-link">درباره سایت</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            سبد خرید
                                        </a>
                                    </li>
                                </ul>

                                <div className="others-option">
                                    <div className="option-item">
                                        <Link to={`${RouteConfig.HomeComponents.TermsPage}`}>
                                            <i className="search-btn bx bx-search"/>
                                        </Link>
                                    </div>
                                    <div className="register">
                                        <Link to={`${RouteConfig.HomeComponents.AuthPage}`} className="default-btn">
                                            ورود | عضویت
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </div>
                </div>

                <div className="others-option-for-responsive">
                    <div className="container">
                        <div className="dot-menu">
                            <div className="inner">
                                <div className="circle circle-one"/>
                                <div className="circle circle-two"/>
                                <div className="circle circle-three"/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="option-inner">
                                <div className="others-option justify-content-center d-flex align-items-center">
                                    <div className="option-item">
                                        <Link to={`${RouteConfig.HomeComponents.TermsPage}`}>
                                            <i className="search-btn bx bx-search"/>
                                        </Link>
                                    </div>
                                    <div className="register">
                                        <Link to={`${RouteConfig.HomeComponents.AuthPage}`} className="default-btn">
                                            ورود | عضویت
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default HeaderSingle;