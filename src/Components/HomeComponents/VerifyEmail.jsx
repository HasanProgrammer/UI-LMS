import React from "react";

/*-------------------------------------------------------------------*/

//Components
import PageTitle    from "../Partials/Commons/HomeComponents/PageTitle";
import HeaderSingle from "../Commons/HomeComponents/HeaderSingle";
import Content      from "../Partials/HomeComponents/VerifyEmail/Content";
import MasterPage   from "./../HomeComponents/MasterPage";

/*-------------------------------------------------------------------*/

class VerifyEmail extends React.Component
{
    render()
    {
        return (
            <MasterPage>
                <HeaderSingle/>
                <PageTitle title="اعتبارسنجی پست الکترونیکی" subtitle="شما در این قسمت، باید پست الکترونیکی خود را برای دریافت کد اعتبارسنجی ( تغییر رمز عبوری ) به سرور ارسال نمایید"/>
                <Content/>
            </MasterPage>
        );
    }
}

export default VerifyEmail;