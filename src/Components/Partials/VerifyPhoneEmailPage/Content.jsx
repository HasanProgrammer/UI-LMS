import React from "react";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig       from "../../../Configs/Route";
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Plugins
import Axios from "axios";

import { PulseLoader }    from "react-spinners";
import { toast as Toast } from "react-toastify";

/*-------------------------------------------------------------------*/

class Content extends React.Component
{
    state =
    {
        EmailCode : null,
        PhoneCode : null,

        IsShowPreLoadVerify : false,
    }

    render()
    {
        return (
            <section className="user-area-style ptb-100">
                <div className="container">
                    <div className="row" style={{cursor: "default", margin: "auto"}}>
                        <div className="col-lg-6" style={{margin: "auto"}}>
                            <div className="section-title">
                                <h2>بررسی عضویت</h2>
                            </div>
                            <div className="contact-form-action mb-50">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> کد اعتبارسنجی پست الکترونیکی <span className="text-danger">{" "} *</span></label>
                                                <input onChange={this.setEmailCode} className="form-control default-font" type="text" placeholder="کد اعتبارسنجی پست الکترونیکی خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> کد اعتبارسنجی تلفن همراه<span className="text-danger">{" "} *</span></label>
                                                <input onChange={this.setPhoneCode} className="form-control default-font" type="text" placeholder="کد اعتبارسنجی تلفن همراه خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button onClick={this.VerifyAccount} className="default-btn" type="button">
                                                تایید نهایی عضویت
                                            </button>
                                        </div>

                                        <div className="col-12">
                                            <div style={{textAlign: "center"}}>
                                                <PulseLoader loading={this.state.IsShowPreLoadVerify} color="#ffb607" size={10}/>
                                            </div>
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
     * @function setPhoneCode
     */
    setPhoneCode = (event) =>
    {
        //console.log(event.target.value);

        this.setState({
            PhoneCode : parseInt(event.target.value)
        });
    };

    /**
     * @function VerifyAccount
     */
    VerifyAccount = async (event) =>
    {
        event.preventDefault();

        this.setState({
            IsShowPreLoadVerify : true
        });

        let Configs = {
            headers : {
                "Content-Type" : "application/json"
            }
        };

        let Data = {
            EmailCode : this.state.EmailCode,
            PhoneCode : this.state.PhoneCode
        }

        await Axios.patch(`${RouteServerConfig.Root + RouteServerConfig.VerifyAccount}`, JSON.stringify(Data), Configs).then(response => {

            this.setState({
                IsShowPreLoadVerify : false
            });

            if(response?.data?.code == 201 || response?.data?.code == 200)
            {
                Toast.warning("شما تا 5 ثانیه دیگر به صفحه لاگین هدایت خواهید شد", { autoClose : 5000 });
                Toast.success(response?.data?.msg, { autoClose: 5000 });
                setTimeout(() => { window.location.href = `${RouteConfig.HomeComponents.AuthPage}` }, 5000);
            }
            else Toast.error(response?.data?.msg);

        }).catch(response => {

            this.setState({
                IsShowPreLoadVerify : false
            });

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