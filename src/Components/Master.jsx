import React from "react";

/*-------------------------------------------------------------------*/

//Components
import Header from "./Commons/Header";
import Footer from "./Commons/Footer";

/*-------------------------------------------------------------------*/

//Plugins
import Persian from "persian";

import { toast as Toast , ToastContainer } from "react-toastify";

/*-------------------------------------------------------------------*/

//Contexts
import MasterContext from "./../Contexts/MasterContext";

/*-------------------------------------------------------------------*/

class Master extends React.Component
{
    state = {};

    render()
    {
        return (
            <MasterContext.Provider value={{
                EnNumberToPersian : this.EnNumberToPersian
            }}>

                {this.props.children}
                <Footer/>
                <ToastContainer/>

            </MasterContext.Provider>
        )
    }

    /*متد زیر اعداد انگلیسی را به فارسی تبدیل می کند*/
    EnNumberToPersian = ($string) =>
    {
        const numbers = ['۰', '١', '٢', '٣', '۴', '۵', '۶', '٧', '٨', '٩'];

        let chars = $string?.split('');
        for (let i = 0; i < chars?.length; i++)
        {
            if(/\d/.test(chars[i])) /*بررسی عدد بودن یا نبودن کاراکتر هدف*/
            {
                chars[i] = numbers[chars[i]];
            }
        }

        return chars?.join('');
    }
}

export default Master;