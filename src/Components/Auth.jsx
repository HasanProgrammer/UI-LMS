import React from "react";

/*-------------------------------------------------------------------*/

//Components
import PageTitle    from "./Partials/Commons/PageTitle";
import HeaderSingle from "./Commons/HeaderSingle";
import Content      from "./Partials/AuthPage/Content";
import MasterPage   from "./Master";

/*-------------------------------------------------------------------*/

class Auth extends React.Component
{
    render()
    {
        return (
            <MasterPage>
                <HeaderSingle/>
                <PageTitle title="احراز هویت کاربران ؛" subtitle="شما در این قسمت، میتوانید در سیستم عضو شده و یا در صورت داشتن عضویت، لاگین نمایید"/>
                <Content/>
            </MasterPage>
        );
    }
}

export default Auth;