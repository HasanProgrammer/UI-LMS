import React from "react";

/*-------------------------------------------------------------------*/

//Components
import PageTitle    from "./Partials/Commons/PageTitle";
import Content      from "./Partials/Commons/Content";
import HeaderSingle from "./Commons/HeaderSingle";
import Master       from "./Master";

/*-------------------------------------------------------------------*/

class Terms extends React.Component
{
    render()
    {
        return (
            <Master>
                <HeaderSingle/>
                <PageTitle title="دوره های برنامه نویسی ؛" subtitle="شما در این قسمت، می توانید لیست تمام دوره های منتشر شده را مشاهده نمایید"/>
                <Content category="All"/>
            </Master>
        );
    }
}

export default Terms;