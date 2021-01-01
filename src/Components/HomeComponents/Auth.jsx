import React from "react";

/*-------------------------------------------------------------------*/

//Components
import PageTitle    from "../Partials/Commons/HomeComponents/PageTitle";
import HeaderSingle from "../Commons/HomeComponents/HeaderSingle";
import Content      from "../Partials/HomeComponents/AuthPage/Content";
import MasterPage   from "./MasterPage";

/*-------------------------------------------------------------------*/

class Auth extends React.Component
{
    render()
    {
        return (
            <MasterPage>
                <HeaderSingle/>
                <PageTitle title="احراز هویت کاربران" subtitle="شما در این قسمت، میتوانید در سیستم ثبت نام کرده و یا در صورت اکانت داشتن، لاگین نمایید"/>
                <Content/>
            </MasterPage>
        );
    }
}

export default Auth;