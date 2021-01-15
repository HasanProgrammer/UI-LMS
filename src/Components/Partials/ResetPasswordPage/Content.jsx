import React from "react";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig       from "../../../Configs/Route";
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Plugins
import Axios from "axios";
import { toast as Toast } from "react-toastify";

/*-------------------------------------------------------------------*/

class Content extends React.Component
{
    state =
    {
        EmailCode   : null,
        NewPassword : null
    }

    render()
    {
        return (
            <section className="user-area-style ptb-100">
                <div className="container">
                    <div className="row" style={{cursor: "default", margin: "auto"}}>
                        <div className="col-lg-6" style={{margin: "auto"}}>
                            <div className="section-title">
                                <h2>رمز عبور جدید</h2>
                            </div>
                            <div className="contact-form-action mb-50">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> رمز عبور جدید<span className="text-danger">{" "} *</span></label>
                                                <input onChange={this.setNewPassword} className="form-control default-font" type="text" placeholder="رمز عبور جدید خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> کد اعتبارسنجی پست الکترونیکی<span className="text-danger">{" "} *</span></label>
                                                <input onChange={this.setEmailCode} className="form-control default-font" type="text" placeholder="کد اعتبارسنجی پست الکترونیکی خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button onClick={this.ResetPassword} className="default-btn" type="button">
                                                تغییر رمز عبور
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    /*---------------------------------------------------------------CUSTOM---------------------------------------------------------------*/

    /**
     * @function setEmailCode
     */
    setEmailCode = (event) =>
    {
        //console.log(event.target.value);

        this.setState({
            EmailCode : event.target.value
        });
    };

    /**
     * @function setNewPassword
     */
    setNewPassword = (event) =>
    {
        //console.log(event.target.value);

        this.setState({
            NewPassword : event.target.value
        });
    };

    /**
     * @function ResetPassword
     */
    ResetPassword = async (event) =>
    {
        event.preventDefault();

        let Configs = {
            headers : {
                "Content-Type" : "application/json"
            }
        };

        let Data = {
            EmailCode   : this.state.EmailCode,
            NewPassword : this.state.NewPassword
        }

        await Axios.patch(`${RouteServerConfig.Root + RouteServerConfig.ResetPassword}`, JSON.stringify(Data), Configs).then(response => {

            if(response?.data?.code == 201 || response?.data?.code == 200)
            {
                Toast.warning("شما تا 5 ثانیه دیگر به صفحه لاگین هدایت خواهید شد", { autoClose : 5000 });
                Toast.success(response?.data?.msg, { autoClose: 5000 });
                setTimeout(() => { window.location.href = `${RouteConfig.HomeComponents.AuthPage}` }, 5000);
            }
            else Toast.error(response?.data?.msg);

        }).catch(response => {

            Toast.error(response.response?.data?.msg);
            if(typeof response?.response?.data?.body?.errors != "undefined")
            {
                response.response.data.body.errors.map(error => {

                    Toast.error(error);

                });
            }

        });
    }
}

export default Content;