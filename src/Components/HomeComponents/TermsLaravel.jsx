import React from "react";

/*-------------------------------------------------------------------*/

//Components
import PageTitle    from "../Partials/Commons/HomeComponents/PageTitle";
import Content      from "../Partials/Commons/HomeComponents/Content";
import HeaderSingle from "../Commons/HomeComponents/HeaderSingle";
import MasterPage   from "./MasterPage";

/*-------------------------------------------------------------------*/

class TermsLaravel extends React.Component
{
    render()
    {
        return (
            <MasterPage>
                <HeaderSingle/>
                <PageTitle title="دوره های برنامه نویسی Laravel" subtitle="شما در این قسمت، میتوانید تمام دوره های برنامه نویسی Laravel منتشر شده را مشاهده نمایید"/>
                <Content/>
            </MasterPage>
        );
    }
}

export default TermsLaravel;