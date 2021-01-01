import React from "react";

/*-------------------------------------------------------------------*/

//Components
import Header from "./../Commons/HomeComponents/Header";
import Footer from "./../Commons/HomeComponents/Footer";

/*-------------------------------------------------------------------*/

class MasterPage extends React.Component
{
    state = {};

    render()
    {
        return (
            <>
                {this.props.children}
                <Footer/>
            </>
        )
    }
}

export default MasterPage;