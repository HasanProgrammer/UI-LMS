import React from "react";

/*-------------------------------------------------------------------*/

//Components
import Tutor      from "./Partials/IndexPage/Tutor";
import Banner     from "./Partials/IndexPage/Banner";
import Category   from "./Partials/IndexPage/Category";
import Teachers   from "./Partials/IndexPage/Teachers";
import Header     from "./Commons/Header";
import Master     from "./Master";
import LastTerms  from "./Partials/IndexPage/LastTerms";

/*-------------------------------------------------------------------*/

//Configs
import RouteServerConfig from "../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Plugins
import Axios from "axios";

/*-------------------------------------------------------------------*/

class Index extends React.Component
{
    state =
    {
        Terms       : [],
        CSH         : [],
        PHP         : [],
        Python      : [],
        JavaScript  : [],
        ASPCore     : [],
        Laravel     : [],
        Django      : [],
        ReactJS     : [],
        SQLServer   : [],
        MySQL       : []
    };

    async componentDidMount()
    {
        await Axios.get(`${RouteServerConfig.Root + RouteServerConfig.AllLastTerm}`).then(response =>
        {

            this.setState({
                Terms       : response?.data?.body?.terms,
                CSH         : response?.data?.body?.csh,
                PHP         : response?.data?.body?.php,
                Python      : response?.data?.body?.python,
                JavaScript  : response?.data?.body?.javaScript,
                ASPCore     : response?.data?.body?.aspCore,
                Laravel     : response?.data?.body?.laravel,
                Django      : response?.data?.body?.django,
                ReactJS     : response?.data?.body?.reactJS,
                SQLServer   : response?.data?.body?.sqlServer,
                MySQL       : response?.data?.body?.mySQL
            });

        }).catch(response => {});
    }

    render()
    {
        return (
            <Master>
                <Header/>
                <Banner/>
                <Category/>
                <Tutor/>
                <LastTerms class={"pt-70"}
                           style={{marginBottom: "-1.7em"}}
                           title={"( جدیدترین دوره های برنامه نویسی )"}
                           term={this.state.Terms}
                />
                <hr/>
                <LastTerms class={"pt-2"}
                           style={{}}
                           title={"( جدیدترین دوره های برنامه نویسی سی شارپ )"}
                           term={this.state.CSH}
                />
                <hr/>
                <LastTerms class={"pt-2"}
                           style={{}}
                           title={"( جدیدترین دوره های برنامه نویسی پی اچ پی )"}
                           term={this.state.PHP}
                />
                <hr/>
                <LastTerms class={"pt-2"}
                           style={{}}
                           title={"( جدیدترین دوره های برنامه نویسی پایتون )"}
                           term={this.state.Python}
                />
                <hr/>
                <LastTerms class={"pt-2"}
                           style={{}}
                           title={"( جدیدترین دوره های برنامه نویسی جاوا اسکریپت )"}
                           term={this.state.JavaScript}
                />
                <hr/>
                <LastTerms class={"pt-2"}
                           style={{}}
                           title={"( جدیدترین دوره های برنامه نویسی سی شارپ سمت سرور )"}
                           term={this.state.ASPCore}
                />
                <hr/>
                <LastTerms class={"pt-2"}
                           style={{}}
                           title={"( جدیدترین دوره های برنامه نویسی لاراول )"}
                           term={this.state.Laravel}
                />
                <hr/>
                <LastTerms class={"pt-2"}
                           style={{}}
                           title={"( جدیدترین دوره های برنامه نویسی پایتون سمت سرور )"}
                           term={this.state.Django}
                />
                <hr/>
                <LastTerms class={"pt-2"}
                           style={{}}
                           title={"( جدیدترین دوره های برنامه نویسی ری اکت )"}
                           term={this.state.ReactJS}
                />
                <hr/>
                <LastTerms class={"pt-2"}
                           style={{}}
                           title={"( جدیدترین دوره های برنامه نویسی پایگاه داده )"}
                           term={this.state.SQLServer}/>
                <hr/>
                <LastTerms class={"pt-2"}
                           style={{marginBottom: "3em"}}
                           title={"( جدیدترین دوره های برنامه نویسی پایگاه داده )"}
                           term={this.state.MySQL}/>
            </Master>
        )
    }
}

export default Index;