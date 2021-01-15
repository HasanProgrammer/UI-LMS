import React from "react";

class Tutor extends React.Component
{
    render()
    {
        return (
            <section className="tutor-area pt-100 pb-70 jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4">
                            <div className="single-tutor">
                                <i className="flaticon-instructor-1"/>
                                <h3 style={{cursor: "default"}}>تدریس به روز</h3>
                                <p style={{cursor: "default"}}>تمامی دوره ها ، همگام با جدیدترین تغییرات زبان ها و فریم ورک ها به روز رسانی می گردند و در اختیار دانشجویان قرار میگیرد</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4">
                            <div className="single-tutor">
                                <i className="flaticon-instructor"/>
                                <h3 style={{cursor: "default"}}>مدرسان متخصص</h3>
                                <p style={{cursor: "default"}}>مدرسان مجموعه ، همگی از برنامه نویسان با تجربه می باشند که دارای حداقل سه سال سابقه برنامه نویسی در حوزه IT می باشند</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4">
                            <div className="single-tutor">
                                <i className="flaticon-consulting"/>
                                <h3 style={{cursor: "default"}}>پشتیبانی 24 ساعته</h3>
                                <p style={{cursor: "default"}}>برای دوره ها پشتیبانی 24 ساعته و نامحدود در نظر گرفته شده است تا به سوالات دانشجویان در خصوص دوره ها رسیدگی شود</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Tutor;