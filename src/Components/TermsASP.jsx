import React from "react";

/*-------------------------------------------------------------------*/

//Components
import PageTitle    from "./Partials/Commons/PageTitle";
import Content      from "./Partials/Commons/Content";
import HeaderSingle from "./Commons/HeaderSingle";
import Master       from "./Master";

/*-------------------------------------------------------------------*/

class TermsASP extends React.Component
{
    render()
    {
        return (
            <Master>
                <HeaderSingle/>
                <PageTitle title="دوره های برنامه نویسی ASP Core ؛" subtitle="شما در این قسمت، میتوانید تمام دوره های برنامه نویسی ASP Core منتشر شده را مشاهده نمایید"/>
                <Content category="ASP"/>
            </Master>
        );
    }
}

export default TermsASP;