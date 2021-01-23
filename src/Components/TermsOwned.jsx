import React from "react";

/*-------------------------------------------------------------------*/

//Components
import Master       from "./Master";
import Content      from "./Partials/TermsOwnedPage/Content";
import PageTitle    from "./Partials/Commons/PageTitle";
import HeaderSingle from "./Commons/HeaderSingle";

/*-------------------------------------------------------------------*/

class TermsOwned extends React.Component
{
    render()
    {
        return (
            <Master>
                <HeaderSingle/>
                <PageTitle title="دوره های برنامه نویسی خریداری شده ؛" subtitle="شما در این قسمت، می توانید لیست تمام دوره های خریداری شده خود را مشاهده نمایید"/>
                <Content/>
            </Master>
        )
    }
}

export default TermsOwned;