import React from "react";

/*-------------------------------------------------------------------*/

//Components
import { Tab , Tabs , TabList , TabPanel } from 'react-tabs';

/*-------------------------------------------------------------------*/

//Plugins
import { Modal }  from "react-responsive-modal";
import { Player } from 'video-react';
import "react-responsive-modal/styles.css";
import "video-react/dist/video-react.css";

/*-------------------------------------------------------------------*/

class ContentTerm extends React.Component
{
    state =
    {
        IsOpenModal : false
    }

    render()
    {
        const ModalStyle =
        {
            width  : "1200px",
            height : "700px"
        }

        return (
            <>
                <section className="single-course-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="single-course-content" style={{cursor: "default"}}>
                                    <h3>دوره ی برنامه نویسی سی شارپ ؛ سطح مقدماتی ، تو این دوره یاد میگیریم که چطور یه برنامه رو توی سی شارپ اجرا کنیم</h3>
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-rating">
                                                <img src="assets/img/single-course/rating-img-1.jpg" alt="Image"/>
                                                <h4><a href="#">مدرس دوره</a></h4>
                                                <span>حسن کرمی محب</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-rating pl-0 text-center">
                                                <h4>دسته بندی</h4>
                                                <span>برنامه نویسی #C</span>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="/Assets/img/509454-0373.jpg" alt="Image"/>
                                </div>
                                <div className="tab single-course-tab" style={{cursor: "default"}}>

                                    <Tabs>
                                        <TabList>
                                            <Tab>درباره دوره</Tab>
                                            <Tab>نمایش فیلم ها</Tab>
                                            <Tab>مدرس دوره</Tab>
                                            <Tab>نظرات کاربران</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div className="tabs_item">
                                                <br/>
                                                <h3>توضیحاتی در خصوص دوره</h3>
                                                <p>ما در این دوره قرار است درباره اصول اصلی برنامه نویسی سی شارپ صحبت کنیم</p>

                                                <h3>مواردی که در این دوره آموزش داده می شود</h3>
                                                <ul className="course-list">
                                                    <li>
                                                        <i className="bx bx-check"/>
                                                        تدریس اصول اولیه برنامه نویسی تحت بستر دات نت
                                                    </li>
                                                    <li>
                                                        <i className="bx bx-check"/>
                                                        تدریس اصول اولیه برنامه نویسی تحت بستر دات نت
                                                    </li>
                                                    <li>
                                                        <i className="bx bx-check"/>
                                                        تدریس اصول اولیه برنامه نویسی تحت بستر دات نت
                                                    </li>
                                                    <li>
                                                        <i className="bx bx-check"/>
                                                        تدریس اصول اولیه برنامه نویسی تحت بستر دات نت
                                                    </li>
                                                </ul>

                                                <h3>دوره مناسب چه کسانی است</h3>
                                                <p>این دوره به دلیل جامعیت مناسب برای همه ی کسانی است که می خواهند به شکل حرفه ای برنامه نویسی سی شارپ را یاد بگیرند و وارد دنیای برنامه نویسی بشوند</p>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="tabs_item">
                                                <div className="curriculum-content">
                                                    <div className="curriculum-list">
                                                        <h4>فصل اول</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#" className="meet-title">
                                                                    <i className="bx bx-right-arrow"/>
                                                                    <span>{" "}</span>
                                                                    معرفی دوره
                                                                </a>
                                                                <a href="#" className="meet-time">
                                                                    <span className="min">1 ساعت و 30 دقیقه</span>
                                                                    <span>{" "}</span>
                                                                    <span className="preview" onClick={this.onClickShowVideo}>نمایش</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="meet-title">
                                                                    <i className="bx bx-right-arrow"/>
                                                                    <span>{" "}</span>
                                                                    راه اندازی محیط کار با زبان #C
                                                                </a>
                                                                <a href="#" className="meet-time">
                                                                    <span className="min">1 ساعت و 30 دقیقه</span>
                                                                    <span>{" "}</span>
                                                                    <span className="preview" onClick={this.onClickShowVideo}>نمایش</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="meet-title">
                                                                    <i className="bx bx-right-arrow"/>
                                                                    <span>{" "}</span>
                                                                    راه اندازی محیط کار با زبان #C
                                                                </a>
                                                                <a href="#" className="meet-time">
                                                                    <span className="min">1 ساعت و 30 دقیقه</span>
                                                                    <span>{" "}</span>
                                                                    <i className="bx bxs-lock-alt"/>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="curriculum-list">
                                                        <h4>فصل دوم</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#" className="meet-title">
                                                                    <i className="bx bx-right-arrow"/>
                                                                    <span>{" "}</span>
                                                                    راه اندازی محیط کار با زبان #C
                                                                </a>
                                                                <a href="#" className="meet-time">
                                                                    <span className="min">1 ساعت و 30 دقیقه</span>
                                                                    <span>{" "}</span>
                                                                    <i className="bx bxs-lock-alt"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="meet-title">
                                                                    <i className="bx bx-right-arrow"/>
                                                                    <span>{" "}</span>
                                                                    راه اندازی محیط کار با زبان #C
                                                                </a>
                                                                <a href="#" className="meet-time">
                                                                    <span className="min">1 ساعت و 30 دقیقه</span>
                                                                    <span>{" "}</span>
                                                                    <i className="bx bxs-lock-alt"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="meet-title">
                                                                    <i className="bx bx-right-arrow"/>
                                                                    <span>{" "}</span>
                                                                    راه اندازی محیط کار با زبان #C
                                                                </a>
                                                                <a href="#" className="meet-time">
                                                                    <span className="min">1 ساعت و 30 دقیقه</span>
                                                                    <span>{" "}</span>
                                                                    <i className="bx bxs-lock-alt"/>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="curriculum-list">
                                                        <h4>فصل سوم</h4>
                                                        <ul>
                                                            <li>
                                                                <a href="#" className="meet-title">
                                                                    <i className="bx bx-right-arrow"/>
                                                                    <span>{" "}</span>
                                                                    راه اندازی محیط کار با زبان #C
                                                                </a>
                                                                <a href="#" className="meet-time">
                                                                    <span className="min">1 ساعت و 30 دقیقه</span>
                                                                    <span>{" "}</span>
                                                                    <i className="bx bxs-lock-alt"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="meet-title">
                                                                    <i className="bx bx-right-arrow"/>
                                                                    <span>{" "}</span>
                                                                    راه اندازی محیط کار با زبان #C
                                                                </a>
                                                                <a href="#" className="meet-time">
                                                                    <span className="min">1 ساعت و 30 دقیقه</span>
                                                                    <span>{" "}</span>
                                                                    <i className="bx bxs-lock-alt"/>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="meet-title">
                                                                    <i className="bx bx-right-arrow"/>
                                                                    <span>{" "}</span>
                                                                    راه اندازی محیط کار با زبان #C
                                                                </a>
                                                                <a href="#" className="meet-time">
                                                                    <span className="min">1 ساعت و 30 دقیقه</span>
                                                                    <span>{" "}</span>
                                                                    <i className="bx bxs-lock-alt"/>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="tabs_item">
                                                <br/>
                                                <div className="instructor-content">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-4">
                                                            <div className="advisor-img">
                                                                <img src="/Assets/img/1996 . 1.jpg" alt="Image"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="advisor-content">
                                                                <a href="#">
                                                                    <h3>حسن کرمی محب</h3>
                                                                </a>
                                                                <span>مهندس نرم افزار</span>
                                                                <p>حسن کرمی محب هستم ، مهندس نرم افزار و مسلط به زبان های پی اچ پی و سی شارپ</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="tabs_item">
                                                <div className="review-content">
                                                    <div className="course-reviews-content">
                                                        <ul className="course-reviews">
                                                            <li>
                                                                <img src="assets/img/course-reviews-img.jpg" alt="Image"/>
                                                                <h3>جواد جعفری</h3>
                                                                <span>همه ی نیاز های من رو پوشش داد</span>
                                                                <p>
                                                                    یکی از بهترین دوره ها در زمینه برنامه نویسی
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </Tabs>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="account-wrap" style={{cursor: "default"}}>
                                    <ul>
                                        <li>
                                            قیمت دوره <span className="bold">250,000 تومان</span>
                                        </li>
                                        <li>
                                            شروع دوره <span>16 خرداد 1395</span>
                                        </li>
                                        <li>
                                            پایان دوره <span>1 شهریور 1395</span>
                                        </li>
                                    </ul>
                                    <a href="#" className="default-btn">خرید دوره</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Modal open={this.state.IsOpenModal} onClose={this.onCloseModal} center>
                    <div style={ModalStyle}>
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        />
                    </div>
                </Modal>
            </>
        );
    }

    /*---------------------------------------------------------------CUSTOM---------------------------------------------------------------*/

    onClickShowVideo = (event) =>
    {
        event.preventDefault();
        this.setState({ IsOpenModal : true });
    }

    onCloseModal = () =>
    {
        this.setState({ IsOpenModal : false });
    }
}

export default ContentTerm;