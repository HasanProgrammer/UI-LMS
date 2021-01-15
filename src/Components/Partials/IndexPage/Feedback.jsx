import React from "react";

/*-------------------------------------------------------------------*/

//Plugins
import OWLSlider from "react-owl-carousel";

/*-------------------------------------------------------------------*/

class Feedback extends React.Component
{
    static ResponsiveOWL = {
        480 : {
            items : 1
        },
        736 : {
            items : 1
        },
        980 : {
            items : 1
        },
        1280 : {
            items : 1
        },
        1366 : {
            items : 1
        },
        1690 : {
            items : 1
        }
    };

    render()
    {
        return (
            <section className="feedback-area feedback-area-three ptb-100 jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="container">
                    <div dir="ltr">
                        <OWLSlider nav={false} autoplay={true} autoplayHoverPause={true} autoplayTimeout={2500} loop margin={10} responsive={Feedback.ResponsiveOWL}>
                            <div className="feedback-item feedback">
                                <i className="flaticon-quotation"/>
                                <p>دوره برنامه نویسی پی اچ پی بهترین دوره ای هست که من دیدم ، از این بهتر نمیشه ، خیلی عالی بود . ممنون از کرمی محب بابت دوره پی اچ پی</p>
                                <div className="feedback-title">
                                    <img src="assets/img/feedback-img/feedback-img-1.jpg" alt="Image"/>
                                    <h3>رضا ترک</h3>
                                    <span>دوره پی اچ پی</span>
                                </div>
                            </div>

                            <div className="feedback-item feedback">
                                <i className="flaticon-quotation"/>
                                <p>
                                    دوره برنامه نویسی پی اچ پی بهترین دوره ای هست که من دیدم ، از این بهتر نمیشه ، خیلی عالی بود . ممنون از کرمی محب بابت دوره پی اچ پی
                                    دوره برنامه نویسی پی اچ پی بهترین دوره ای هست که من دیدم ، از این بهتر نمیشه ، خیلی عالی بود . ممنون از کرمی محب بابت دوره پی اچ پی
                                </p>
                                <div className="feedback-title">
                                    <img src="assets/img/feedback-img/feedback-img-1.jpg" alt="Image"/>
                                    <h3>رضا ترک</h3>
                                    <span>دوره پی اچ پی</span>
                                </div>
                            </div>
                        </OWLSlider>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feedback;