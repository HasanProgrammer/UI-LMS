import React from "react";

/*-------------------------------------------------------------------*/

//Components
import PageTitle    from "./Partials/Commons/PageTitle";
import HeaderSingle from "./Commons/HeaderSingle";
import Content      from "./Partials/VerifyEmailPage/Content";
import MasterPage   from "./Master";

/*-------------------------------------------------------------------*/

class VerifyEmail extends React.Component
{
    render()
    {
        return (
            <MasterPage>
                <HeaderSingle/>
                <PageTitle title="اعتبارسنجی پست الکترونیکی ؛" subtitle="شما در این قسمت، باید پست الکترونیکی خود را برای دریافت کد اعتبارسنجی ( تغییر رمز عبوری ) به سرور ارسال نمایید"/>
                <Content/>
            </MasterPage>
        );
    }
}

export default VerifyEmail;