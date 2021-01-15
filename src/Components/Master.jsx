import React from "react";

/*-------------------------------------------------------------------*/

//Components
import Header from "./Commons/Header";
import Footer from "./Commons/Footer";

/*-------------------------------------------------------------------*/

//Plugins
import { toast as Toast , ToastContainer } from "react-toastify";

/*-------------------------------------------------------------------*/

class Master extends React.Component
{
    state = {};

    render()
    {
        return (
            <>
                {this.props.children}
                <Footer/>
                <ToastContainer/>
            </>
        )
    }
}

export default Master;