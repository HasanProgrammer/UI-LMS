import React from "react";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Components
import Auth             from "./Auth";
import VerifyPhoneEmail from "./VerifyPhoneEmail";
import VerifyEmail      from "./VerifyEmail";
import ResetPassword    from "./ResetPassword";
import Index            from "./Index";
import TermDetails      from "./TermDetails";
import Terms            from "./Terms";
import TermsOwned       from "./TermsOwned";
import TermsCSH         from "./TermsCSH";
import TermsPHP         from "./TermsPHP";
import TermsPython      from "./TermsPython";
import TermsJavaScript  from "./TermsJavaScript";
import TermsASP         from "./TermsASP";
import TermsLaravel     from "./TermsLaravel";
import TermsDjango      from "./TermsDjango";
import TermsReactJS     from "./TermsReactJS";
import TermsSQL         from "./TermsSQL";
import TermsMySQL       from "./TermsMySQL";

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
                    <Route exact path={`${RouteConfig.HomeComponents.VerifyAuthPage}`}     component={VerifyPhoneEmail}/>
                    <Route exact path={`${RouteConfig.HomeComponents.VerifyEmailPage}`}    component={VerifyEmail}/>
                    <Route exact path={`${RouteConfig.HomeComponents.ResetPasswordPage}`}  component={ResetPassword}/>
                    <Route exact path={`${RouteConfig.HomeComponents.IndexPage}`}          component={Index}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermDetailsPage}`}    component={TermDetails}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsPage}`}          component={Terms}/>
                    <Route exact path={`${RouteConfig.HomeComponents.TermsOwnedPage}`}     component={TermsOwned}/>
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