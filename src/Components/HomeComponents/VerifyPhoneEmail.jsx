import React from "react";

/*-------------------------------------------------------------------*/

//Components
import PageTitle    from "../Partials/Commons/HomeComponents/PageTitle";
import HeaderSingle from "../Commons/HomeComponents/HeaderSingle";
import Content      from "../Partials/HomeComponents/VerifyPhoneEmail/Content";
import MasterPage   from "./../HomeComponents/MasterPage";

/*-------------------------------------------------------------------*/

class VerifyPhoneEmail extends React.Component
{
    render()
    {
        return (
            <MasterPage>
                <HeaderSingle/>
                <PageTitle title="اعتبارسنجی پست الکترونیکی و تلفن همراه" subtitle="شما در این قسمت، باید کد اعتبارسنجی ارسال شده برای پست الکترونیکی و تلفن همراه خود را به سرور ارسال نمایید"/>
                <Content/>
            </MasterPage>
        );
    }
}

export default VerifyPhoneEmail;