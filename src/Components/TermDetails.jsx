import React from "react";

/*-------------------------------------------------------------------*/

//Components
import Master       from "./Master";
import HeaderSingle from "./Commons/HeaderSingle";
import PageTitle    from "./Partials/Commons/PageTitle";
import ContentTerm  from "./Partials/TermDetailsPage/ContentTerm";

/*-------------------------------------------------------------------*/

class TermDetails extends React.Component
{
    render()
    {
        return (
            <Master>
                <HeaderSingle/>
                <PageTitle title="محتوای دوره برنامه نویسی ؛" subtitle="شما در این قسمت، می توانید لیست تمام فیلم های این دوره را مشاهده نمایید"/>
                <ContentTerm pathValue={this.props.match.params.id}/>
            </Master>
        );
    }
}

export default TermDetails;