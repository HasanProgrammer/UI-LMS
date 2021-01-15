import React from "react";

/*-------------------------------------------------------------------*/

//Components
import Tutor    from "./Partials/IndexPage/Tutor";
import Banner   from "./Partials/IndexPage/Banner";
import Category from "./Partials/IndexPage/Category";
import Teachers from "./Partials/IndexPage/Teachers";
import Header   from "./Commons/Header";
import Master   from "./Master";

/*-------------------------------------------------------------------*/

class Index extends React.Component
{
    state = {};

    render()
    {
        return (
            <Master>
                <Header/>
                <Banner/>
                <Category/>
                <Tutor/>
                <Teachers/>
            </Master>
        )
    }
}

export default Index;