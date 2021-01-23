import React    from "react";
import { Link } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig       from "./../../../Configs/Route.json";
import RouteServerConfig from "./../../../Configs/RouteServer.json";

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
        UsernameRegister : null,
        UsernameLogin    : null,
        PasswordRegister : null,
        PasswordLogin    : null,
        Email            : null,
        Phone            : null,

        IsShowPreLoadRegister : false,
        IsShowPreLoadLogin    : false,
    }

    render()
    {
        return (
            <>
                <section className="user-area-style ptb-100">
                    <div className="container">
                        <div className="row" style={{cursor: "default"}}>
                            <div className="col-lg-6">
                                <div className="contact-form-action mb-50">
                                    <form method="post">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>نام کاربری</label>
                                                    <input onChange={this.setUsernameLogin} className="form-control default-font" type="text" placeholder="نام کاربری خود را در این قسمت وارد نمایید"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>رمز عبور</label>
                                                    <input onChange={this.setPasswordLogin} className="form-control default-font" type="text" placeholder="رمز عبور خود را در این قسمت وارد نمایید"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="login-action">
                                                    <span className="forgot-login">
                                                    <Link to={`${RouteConfig.HomeComponents.VerifyEmailPage}`}>فراموشی رمز عبور</Link>
                                                </span>
                                                    <br/>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button onClick={this.LoginUser} className="default-btn register" type="button">
                                                    ورود به سیستم
                                                </button>
                                            </div>

                                            <div className="col-12">
                                                <div style={{textAlign: "center"}}>
                                                    <PulseLoader loading={this.state.IsShowPreLoadLogin} color="#ffb607" size={10}/>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-form-action">
                                    <form method="post">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label> نام کاربری<span className="text-danger">{" "} *</span></label>
                                                    <input onChange={this.setUsernameRegister} className="form-control default-font" type="text" placeholder="نام کاربری خود را در این قسمت وارد نمایید"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label> پست الکترونیکی<span className="text-danger">{" "} *</span></label>
                                                    <input onChange={this.setEmail} className="form-control default-font" type="email" placeholder="پست الکترونیکی خود را در این قسمت وارد نمایید"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label> شماره تماس ( تلفن همراه )<span className="text-danger">{" "} *</span></label>
                                                    <input onChange={this.setPhone} className="form-control default-font" type="email" placeholder="شماره تماس خود را در این قسمت وارد نمایید"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label> رمز عبور<span className="text-danger">{" "} *</span></label>
                                                    <input onChange={this.setPasswordRegister} className="form-control default-font" type="text" placeholder="رمز عبور خود را در این قسمت وارد نمایید"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-12 col-sm-12">
                                                        <button onClick={this.RegisterUser} className="default-btn register" type="button">
                                                            عضو شوید
                                                        </button>
                                                    </div>
                                                </div>

                                                <div style={{textAlign: "center"}}>
                                                    <PulseLoader loading={this.state.IsShowPreLoadRegister} color="#ffb607" size={10}/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    /*---------------------------------------------------------------CUSTOM---------------------------------------------------------------*/

    /**
     * @function setUsernameRegister
     */
    setUsernameRegister = (event) =>
    {
        //console.log(event.target.value);

        this.setState({
            UsernameRegister : event.target.value
        });
    };

    /**
     * @function setUsernameLogin
     */
    setUsernameLogin = (event) =>
    {
        //console.log(event.target.value);

        this.setState({
            UsernameLogin : event.target.value
        });
    };

    /**
     * @function setPasswordRegister
     */
    setPasswordRegister = (event) =>
    {
        //console.log(event.target.value);

        this.setState({
            PasswordRegister : event.target.value
        });
    };

    /**
     * @function setPasswordLogin
     */
    setPasswordLogin = (event) =>
    {
        //console.log(event.target.value);

        this.setState({
            PasswordLogin : event.target.value
        });
    };

    /**
     * @function onChangeTextInInputEmail
     */
    setEmail = (event) =>
    {
        //console.log(event.target.value);

        this.setState({
            Email : event.target.value
        });
    };

    /**
     * @function onChangeTextInInputEmail
     */
    setPhone = (event) =>
    {
        //console.log(event.target.value);

        this.setState({
            Phone : event.target.value
        });
    };

    /**
     * @function RegisterUser
     */
    RegisterUser = async (event) =>
    {
        event.preventDefault();

        this.setState({
            IsShowPreLoadRegister : true
        });

        let Configs = {
            headers : {
                "Content-Type" : "application/json"
            }
        };

        let Data = {
            Username : this.state.UsernameRegister,
            Password : this.state.PasswordRegister,
            Email    : this.state.Email,
            Phone    : this.state.Phone
        }

        await Axios.put(`${RouteServerConfig.Root + RouteServerConfig.RegisterUser}`, JSON.stringify(Data), Configs).then(response => {

            this.setState({
                IsShowPreLoadRegister : false
            });

            if(response?.data?.code == 201 || response?.data?.code == 200)
            {
                this.setState({
                    UsernameRegister : null,
                    PasswordRegister : null,
                    Email            : null,
                    Phone            : null
                });

                Toast.warning("شما تا 20 ثانیه دیگر به صفحه اعتبارسنجی پست الکترونیکی و شماره تماس هدایت خواهید شد", { autoClose : 20000 });
                Toast.success(response?.data?.msg, { autoClose: 20000 });
                setTimeout(() => { window.location.href = `${RouteConfig.HomeComponents.VerifyAuthPage}` }, 20000);
            }
            else Toast.error(response?.data?.msg);

        }).catch(response => {

            this.setState({
                IsShowPreLoadRegister : false
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

    /**
     * @function LoginUser
     */
    LoginUser = async (event) =>
    {
        event.preventDefault();

        this.setState({
            IsShowPreLoadLogin : true
        });

        let Configs = {
            headers : {
                "Content-Type" : "application/json"
            }
        };

        let Data = {
            Username : this.state.UsernameLogin,
            Password : this.state.PasswordLogin
        }

        await Axios.patch(`${RouteServerConfig.Root + RouteServerConfig.LoginUser}`, JSON.stringify(Data), Configs).then(response => {

            this.setState({
                IsShowPreLoadLogin : false
            });

            if(response?.data?.code == 201 || response?.data?.code == 200)
            {
                Toast.success(response?.data?.msg, { autoClose : 500 });
                localStorage.setItem("Token" , response?.data?.body?.token);
                setTimeout(() => { window.location.href = `${RouteConfig.HomeComponents.TermsOwnedPage}` }, 500);
            }
            else Toast.error(response?.data?.msg);

        }).catch(response => {

            this.setState({
                IsShowPreLoadLogin : false
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