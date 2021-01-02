import React from "react";

/*-------------------------------------------------------------------*/

//Components
import PageTitle    from "../Partials/Commons/HomeComponents/PageTitle";
import HeaderSingle from "../Commons/HomeComponents/HeaderSingle";
import Content      from "../Partials/HomeComponents/ResetPassword/Content";
import MasterPage   from "./../HomeComponents/MasterPage";

/*-------------------------------------------------------------------*/

class ResetPassword extends React.Component
{
    render()
    {
        return (
            <MasterPage>
                <HeaderSingle/>
                <PageTitle title="تغییر رمز عبوری" subtitle="شما در این قسمت، باید پست الکترونیکی خود را برای دریافت کد اعتبارسنجی ( پست الکترونیکی ) وارد نمایید"/>
                <Content/>
            </MasterPage>
        );
    }
}

export default ResetPassword;