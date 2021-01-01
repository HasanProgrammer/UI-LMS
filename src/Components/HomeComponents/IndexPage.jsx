import React from "react";

/*-------------------------------------------------------------------*/

//Components
import Tutor      from "../Partials/HomeComponents/IndexPage/Tutor";
import Banner     from "../Partials/HomeComponents/IndexPage/Banner";
import Category   from "../Partials/HomeComponents/IndexPage/Category";
import Teachers   from "../Partials/HomeComponents/IndexPage/Teachers";
import Header     from "../Commons/HomeComponents/Header";
import MasterPage from "./MasterPage";

/*-------------------------------------------------------------------*/

class IndexPage extends React.Component
{
    state = {};

    render()
    {
        return (
            <MasterPage>
                <Header/>
                <Banner/>
                <Category/>
                <Tutor/>
                <Teachers/>
            </MasterPage>
        )
    }
}

export default IndexPage;