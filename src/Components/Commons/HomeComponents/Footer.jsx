import React from "react";

class Footer extends React.Component
{
    render()
    {
        return (
            <footer className="footer-top-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <h3 style={{cursor: "default"}}>راه های ارتباطی</h3>
                                <ul className="address">
                                    <li className="location" style={{cursor: "default"}}>
                                        <i className="bx bxs-location-plus"/>
                                        تهران، شهرستان شهریار، شهرک جعفریه
                                    </li>
                                    <li>
                                        <i className="bx bxs-envelope"/>
                                        <a
                                            href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#b4dcd1d8d8dbf4d1d0c1dbda9ad7dbd9"><span
                                            className="__cf_email__"
                                            data-cfemail="a2cac7cececde2c7c6d7cdcc8cc1cdcf">ارتباط از طریق پست الکترونیکی</span>
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-phone-call"/>
                                        <a href="tel:+98 9026676147" dir="ltr">+98 9026676147</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <h3 style={{cursor: "default"}}>دسترسی های مفید</h3>
                                <ul className="link">
                                    <li>
                                        <a href="courses.html">دوره های برنامه نویسی</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">پرسش و پاسخ</a>
                                    </li>
                                    <li>
                                        <a href="terms-conditions.html">درباره دوره ها</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">درباره شکل گیری سایت</a>
                                    </li>
                                    <li>
                                        <a href="about.html">درباره ما</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">قوانین سایت</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <h3 style={{cursor: "default"}}>دوره های برگزار شده</h3>
                                <ul className="link">
                                    <li>
                                        <a href="#">دوره های برنامه نویسی #C</a>
                                    </li>
                                    <li>
                                        <a href="#">دوره های برنامه نویسی PHP</a>
                                    </li>
                                    <li>
                                        <a href="#">دوره های برنامه نویسی JS</a>
                                    </li>
                                    <li>
                                        <a href="#">دوره های برنامه نویسی ASP Core</a>
                                    </li>
                                    <li>
                                        <a href="#">دوره های برنامه نویسی Laravel</a>
                                    </li>
                                    <li>
                                        <a href="#">دوره های برنامه نویسی ReactJS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;