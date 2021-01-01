import React from "react";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Components
import Auth            from "./HomeComponents/Auth";
import IndexHomePage   from "./HomeComponents/IndexPage";
import TermDetails     from "./HomeComponents/TermDetails";
import Terms           from "./HomeComponents/Terms";
import TermsCSH        from "./HomeComponents/TermsCSH";
import TermsPHP        from "./HomeComponents/TermsPHP";
import TermsPython     from "./HomeComponents/TermsPython";
import TermsJavaScript from "./HomeComponents/TermsJavaScript";
import TermsASP        from "./HomeComponents/TermsASP";
import TermsLaravel    from "./HomeComponents/TermsLaravel";
import TermsDjango     from "./HomeComponents/TermsDjango";
import TermsReactJS    from "./HomeComponents/TermsReactJS";
import TermsSQL        from "./HomeComponents/TermsSQL";
import TermsMySQL      from "./HomeComponents/TermsMySQL";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig from "./../Configs/Route.json";

/*-------------------------------------------------------------------*/

class Root extends React.Component
{
    render()
    {
        return (
            <Router>
                <Switch>

                    {/*==============================================Home==============================================*/}

                    {/*Home*/}
                    <Route exact path={`${RouteConfig.HomeComponents.AuthPage}`}           component={Auth}/>
                    <Route exact path={`${RouteConfig.HomeComponents.IndexPage}`}          component={IndexHomePage}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermDetailsPage}`}    component={TermDetails}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsPage}`}          component={Terms}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsCSHPage}`}       component={TermsCSH}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsPHPPage}`}       component={TermsPHP}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsPYTPage}`}       component={TermsPython}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsJSPage}`}        component={TermsJavaScript}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsASPPage}`}       component={TermsASP}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsLaravelPage}`}   component={TermsLaravel}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsDjangoPage}`}    component={TermsDjango}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsReactJSPage}`}   component={TermsReactJS}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsSQLServerPage}`} component={TermsSQL}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsMySQLPage}`}     component={TermsMySQL}/>
                    {/*Home*/}

                    {/*==============================================Home==============================================*/}

                </Switch>
            </Router>
        )
    }
}

export default Root;