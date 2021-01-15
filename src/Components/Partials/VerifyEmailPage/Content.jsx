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
        Email : null,

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
                                <h2>بررسی پست الکترونیکی</h2>
                            </div>
                            <div className="contact-form-action mb-50">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> پست الکترونیکی <span className="text-danger">{" "} *</span></label>
                                                <input onChange={this.setEmail} className="form-control default-font" type="text" placeholder="پست الکترونیکی خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button onClick={this.VerifyEmail} className="default-btn" type="button">
                                                ارسال کد اعتبارسنجی
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
     * @function setEmail
     */
    setEmail = (event) =>
    {
        //console.log(event.target.value);

        this.setState({
            Email : event.target.value
        });
    };

    /**
     * @function VerifyEmail
     */
    VerifyEmail = async (event) =>
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
            Email : this.state.Email
        }

        await Axios.patch(`${RouteServerConfig.Root + RouteServerConfig.VerifyEmail}`, JSON.stringify(Data), Configs).then(response => {

            this.setState({
                IsShowPreLoadVerify : false
            });

            if(response?.data?.code == 201 || response?.data?.code == 200)
            {
                Toast.warning("شما تا 5 ثانیه دیگر به صفحه تغییر رمز عبوری هدایت خواهید شد", { autoClose : 5000 });
                Toast.success(response?.data?.msg, { autoClose: 5000 });
                setTimeout(() => { window.location.href = `${RouteConfig.HomeComponents.ResetPasswordPage}` }, 5000);
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