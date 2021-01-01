import React from "react";

/*-------------------------------------------------------------------*/

//Components
import PageTitle    from "../Partials/Commons/HomeComponents/PageTitle";
import Content      from "../Partials/Commons/HomeComponents/Content";
import HeaderSingle from "../Commons/HomeComponents/HeaderSingle";
import MasterPage   from "./MasterPage";

/*-------------------------------------------------------------------*/

class TermsPython extends React.Component
{
    render()
    {
        return (
            <MasterPage>
                <HeaderSingle/>
                <PageTitle title="دوره های برنامه نویسی Python" subtitle="شما در این قسمت، میتوانید تمام دوره های برنامه نویسی Python منتشر شده را مشاهده نمایید"/>
                <Content/>
            </MasterPage>
        );
    }
}

export default TermsPython;