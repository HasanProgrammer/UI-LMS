import React from "react";

class Content extends React.Component
{
    render()
    {
        return (
            <section className="user-area-style ptb-100">
                <div className="container">
                    <div className="row" style={{cursor: "default"}}>
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>ورود</h2>
                            </div>
                            <div className="contact-form-action mb-50">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>پست الکترونیکی ، تلفن همراه</label>
                                                <input className="form-control default-font" type="text" placeholder="پست الکترونیکی یا شماره همراه خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>رمز عبور</label>
                                                <input className="form-control default-font" type="text" placeholder="رمز عبور خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="login-action">
                                                {/*<span className="log-rem">*/}
                                                {/*    <input id="remember" type="checkbox"/>*/}
                                                {/*    <span>{" "}</span>*/}
                                                {/*    <label htmlFor="remember">من را به خاط بسپار</label>*/}
                                                {/*</span>*/}

                                                <span className="forgot-login">
                                                    <a href="recover-password.html">فراموشی رمز عبور</a>
                                                </span>
                                                <br/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="default-btn" type="submit">
                                                ورود به سیستم
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>عضویت</h2>
                            </div>
                            <div className="contact-form-action">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> نام کاربری<span className="text-danger">{" "} *</span></label>
                                                <input className="form-control default-font" type="text" placeholder="نام کاربری خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> پست الکترونیکی<span className="text-danger">{" "} *</span></label>
                                                <input className="form-control default-font" type="email" placeholder="پست الکترونیکی خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> شماره تماس ( تلفن همراه )<span className="text-danger">{" "} *</span></label>
                                                <input className="form-control default-font" type="email" placeholder="شماره تماس خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> رمز عبور<span className="text-danger">{" "} *</span></label>
                                                <input className="form-control default-font" type="text" placeholder="رمز عبور خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-sm-6">
                                                    <button className="default-btn register" type="submit">
                                                        عضو شوید
                                                    </button>
                                                </div>
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
}

export default Content;