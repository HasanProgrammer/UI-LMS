import React from "react";

class Content extends React.Component
{
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
                                                <input className="form-control default-font" type="text" placeholder="رمز عبور جدید خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label> کد 8 رقمی پست الکترونیکی<span className="text-danger">{" "} *</span></label>
                                                <input className="form-control default-font" type="text" placeholder="کد تایید 8 رقمی پست الکترونیکی خود را در این قسمت وارد نمایید"/>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="default-btn" type="submit">
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
}

export default Content;