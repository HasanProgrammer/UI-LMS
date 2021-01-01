import React from "react";

/*-------------------------------------------------------------------*/

//Components
import MasterPage   from "./MasterPage";
import HeaderSingle from "../Commons/HomeComponents/HeaderSingle";
import PageTitle    from "../Partials/Commons/HomeComponents/PageTitle";
import ContentTerm  from "../Partials/HomeComponents/TermDetailsPage/ContentTerm";

/*-------------------------------------------------------------------*/

class TermDetails extends React.Component
{
    render()
    {
        return (
            <MasterPage>
                <HeaderSingle/>
                <PageTitle title="دوره ی مقدماتی برنامه نویسی #C" subtitle="شما در این قسمت، می توانید لیست تمام فیلم های این دوره را مشاهده نمایید"/>
                <ContentTerm/>
            </MasterPage>
        );
    }
}

export default TermDetails;