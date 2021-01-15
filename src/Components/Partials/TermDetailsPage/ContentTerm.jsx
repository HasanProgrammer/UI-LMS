import React    from "react";
import { Link } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Components
import { Tab , Tabs , TabList , TabPanel } from 'react-tabs';

/*-------------------------------------------------------------------*/

//Plugins
import Axios        from "axios";
import fileDownload from 'js-file-download';

import { Modal }  from "react-responsive-modal";
import { Player } from 'video-react';

import { PulseLoader }    from "react-spinners";
import { toast as Toast } from "react-toastify";

/*-------------------------------------------------------------------*/

//Configs
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Styles
import "react-responsive-modal/styles.css";
import "video-react/dist/video-react.css";

/*-------------------------------------------------------------------*/

class ContentTerm extends React.Component
{
    state =
    {
        IsOpenModal : false,
        VideoSource : null,
        TermDetails : null,
        HasToken    : false, /*صرفا این کلید دستگیره ای است برای تغییر State ، در صورتی که Token منقضی می گردد و باید توکن پاک شود و ...*/
    }

    async componentDidMount()
    {
        let configs = {
            headers : {
                "Authorization" : `${"Bearer " + localStorage.getItem("Token")}`
            }
        };

        let path = localStorage.getItem("Token") === null
                   ?
                   `${RouteServerConfig.Root + RouteServerConfig.TermDetails + this.props.pathValue}`
                   :
                   `${RouteServerConfig.Root + RouteServerConfig.TermDetailsUser + this.props.pathValue}`

        await Axios.get(path, localStorage.getItem("Token") !== null ? configs : null).then(response =>
        {
            if(response?.data?.code == 200)
                this.setState({
                    TermDetails : response?.data?.body?.term
                });

        }).catch(response => {

            localStorage.removeItem("Token");
            this.setState({
                HasToken: false
            });

        });
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
                                    <h3 className="default-font">{this.state.TermDetails?.description}</h3>
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-rating">
                                                <img className="img-thumbnail image-thumb" style={{borderRadius: "0"}} src={this.state.TermDetails?.userImage != null ? RouteServerConfig.Root + "/" + this.state.TermDetails?.userImage : "/Assets/img/unknown-avatar.jpg"} alt="Image"/>
                                                <h4>مدرس دوره</h4>
                                                <span>{this.state.TermDetails?.userName}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-rating pl-0 text-center">
                                                <h4>دسته بندی</h4>
                                                <span dir="rtl">{this.state.TermDetails?.categoryName}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={RouteServerConfig.Root + "/" + this.state.TermDetails?.image} alt="Image"/>
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
                                                <ul className="course-list">
                                                    <li>
                                                        <i className="bx bx-check"/>
                                                        <h3>توضیحاتی در خصوص دوره</h3>
                                                        <p>{this.state.TermDetails?.description}</p>
                                                    </li>
                                                    <li>
                                                        <i className="bx bx-check"/>
                                                        <h3>مواردی که در این دوره تدریس می شود</h3>
                                                        <p>{this.state.TermDetails?.result}</p>
                                                    </li>
                                                    <li>
                                                        <i className="bx bx-check"/>
                                                        <h3>دوره مناسب چه کسانی است</h3>
                                                        <p>{this.state.TermDetails?.suitable}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="tabs_item">
                                                <div className="curriculum-content">
                                                    {
                                                        this.state.TermDetails?.hasChapterKey == 1
                                                        ?
                                                        this.state.TermDetails?.chapters?.map(chapter => (
                                                            <div className="curriculum-list">
                                                                <h4>{chapter.title}</h4>
                                                                <ul>
                                                                    {
                                                                        chapter.videos?.map(video => (
                                                                            <li>
                                                                                <a href="#" className="meet-title">
                                                                                    <i className="bx bx-right-arrow"/>
                                                                                    <span>{" "}</span>
                                                                                    {video.title}
                                                                                </a>
                                                                                <a href="#" className="meet-time">
                                                                                    <span className="min">{video.duration}</span>
                                                                                    <span>{" "}</span>
                                                                                    {
                                                                                        video.isFreeKey == 1
                                                                                        ?
                                                                                        (
                                                                                            <>
                                                                                                <span className="preview" id={video.id} onClick={this.onClickDownloadVideo}>دانلود فیلم</span>
                                                                                                <span>{" "}</span>
                                                                                                <span className="preview" id={video.video} onClick={this.onClickShowVideo}>نمایش</span>
                                                                                            </>
                                                                                        )
                                                                                        :
                                                                                            this.state.TermDetails?.isBuyed
                                                                                            ?
                                                                                            <span className="preview" id={video.id} onClick={this.onClickDownloadVideo}>دانلود فیلم</span>
                                                                                            :
                                                                                            <i className="bx bxs-lock"/>
                                                                                    }
                                                                                </a>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        ))
                                                        :
                                                        (
                                                            <div className="curriculum-list">
                                                                <br/>
                                                                <ul>
                                                                    {
                                                                        this.state.TermDetails?.videos?.map(video => (
                                                                            <li>
                                                                                <a href="#" className="meet-title">
                                                                                    <i className="bx bx-right-arrow"/>
                                                                                    <span>{" "}</span>
                                                                                    {video.title}
                                                                                </a>
                                                                                <a href="#" className="meet-time">
                                                                                    <span className="min">{video.duration}</span>
                                                                                    <span>{" "}</span>
                                                                                    {
                                                                                        video.isFreeKey == 1
                                                                                        ?
                                                                                        (
                                                                                            <>
                                                                                                <span className="preview" id={video.id} onClick={this.onClickDownloadVideo}>دانلود فیلم</span>
                                                                                                <span>{" "}</span>
                                                                                                <span className="preview" id={video.video} onClick={this.onClickShowVideo}>نمایش</span>
                                                                                            </>
                                                                                        )
                                                                                        :
                                                                                            this.state.TermDetails?.isBuyed
                                                                                            ?
                                                                                            <span className="preview" id={video.id} onClick={this.onClickDownloadVideo}>دانلود فیلم</span>
                                                                                            :
                                                                                            <i className="bx bxs-lock"/>
                                                                                    }
                                                                                </a>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        )
                                                    }
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
                                                                <img className="img-thumbnail" style={{borderRadius: "0"}} src={this.state.TermDetails?.userImage != null ? RouteServerConfig.Root + "/" + this.state.TermDetails?.userImage : "/Assets/img/unknown-avatar.jpg"} alt="Image"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="advisor-content">
                                                                <h3>{this.state.TermDetails?.userName}</h3>
                                                                <span>{this.state.TermDetails?.userExpert}</span>
                                                                <p>{this.state.TermDetails?.userDescription}</p>
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
                                                        <ul className="course-reviews comment-area">
                                                            {
                                                                this.state.TermDetails?.comments?.map(comment => (
                                                                    <>
                                                                        <li>
                                                                            <img className="image-thumb img-thumbnail" src={`${RouteServerConfig.Root + "/" + comment.userImage}`} alt="Image"/>
                                                                            <h3>{ comment.userName }</h3>
                                                                            <span>{ comment.title }</span>
                                                                            <p>
                                                                                { comment.content }
                                                                            </p>

                                                                            <ul className="course-reviews answer-area">
                                                                                {
                                                                                    comment.answers?.length == 0
                                                                                    ?
                                                                                    (<span style={{textAlign: "center"}}>{"به این پرسش پاسخی داده نشده است"}</span>)
                                                                                    :
                                                                                    comment.answers?.map(answer => (
                                                                                        <>
                                                                                            <li>
                                                                                                <img className="image-thumb img-thumbnail" src={`${RouteServerConfig.Root + "/" + answer.userImage}`} alt="Image"/>
                                                                                                <h3>{ answer.userName }</h3>
                                                                                                <p>
                                                                                                    { answer.content }
                                                                                                </p>
                                                                                            </li>
                                                                                        </>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        </li>

                                                                        <br/>
                                                                        <br/>
                                                                    </>
                                                                ))
                                                            }
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
                                            قیمت دوره <span className="bold">{this.state.TermDetails?.price} تومان </span>
                                        </li>
                                        <li>
                                            شروع دوره <span>16 خرداد 1395</span>
                                        </li>
                                        <li>
                                            پایان دوره <span>1 شهریور 1395</span>
                                        </li>
                                    </ul>
                                    <a href="" id={this.state.TermDetails?.id} onClick={this.onClickPurchaseTerm} className="default-btn">خرید دوره</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Modal open={this.state.IsOpenModal} onClose={this.onCloseModal} center>
                    <div style={ModalStyle}>
                        <Player
                            playsInline
                            poster={RouteServerConfig.Root + "/" + this.state.TermDetails?.image}
                            src={this.state.VideoSource}
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
        this.setState({
            VideoSource : `${RouteServerConfig.Root + "/" + event.target.id}`,
            IsOpenModal : true
        });
    };

    onClickDownloadVideo = async (event) =>
    {
        event.preventDefault();

        if(localStorage.getItem("Token") !== null)
        {
            let Configs =
            {
                responseType : 'arraybuffer',
                headers      :
                {
                    "Authorization" : `${"Bearer " + localStorage.getItem("Token")}`
                }
            };

            await Axios.get(`${RouteServerConfig.Root + RouteServerConfig.DownloadVideo + event.target.id}`, Configs).then(response => {

                let videoNameHeader = JSON.parse(response.headers["x-video-name"]);

                let bytes = new Uint8Array(response?.data); /*در این قسمت FileStream را به آرایه ای از Byte ها تبدیل می کنیم*/

                let blob = new Blob([bytes], { type : "application/octet-stream" });

                let link = document.createElement('a');

                link.href = window.URL.createObjectURL(blob);

                link.download = videoNameHeader.Name;

                link.click();

            }).catch(response => {

                if(response?.data?.code == 403)
                {
                    localStorage.removeItem("Token");
                    this.setState({
                        HasToken: false
                    });
                }

            });
        }
        else
        {
            let Configs =
            {
                responseType : 'arraybuffer'
            };

            await Axios.get(`${RouteServerConfig.Root + RouteServerConfig.DownloadVideoPublic + event.target.id}`, Configs).then(response => {

                let videoNameHeader = JSON.parse(response.headers["x-video-name"]);

                let bytes = new Uint8Array(response?.data); /*در این قسمت FileStream را به آرایه ای از Byte ها تبدیل می کنیم*/

                let blob = new Blob([bytes], { type : "application/octet-stream" });

                let link = document.createElement('a');

                link.href = window.URL.createObjectURL(blob);

                link.download = videoNameHeader.Name;

                link.click();

            }).catch(response => {

                //console.log(response);

            });
        }
    }

    onClickPurchaseTerm = async (event) =>
    {
        event.preventDefault();

        if(localStorage.getItem("Token") === null)
        {
            Toast.warning("شما برای خرید این دوره می بایست در سیستم ثبت نام نمایید، یا در صورت داشتن حساب کاربری، به حساب کاربری خود وارد شوید", {
                autoClose : 10000
            });
        }
        else
        {
            let Configs = {
                headers : {
                    "Authorization" : `${"Bearer " + localStorage.getItem("Token")}`
                }
            };

            await Axios.get(`${RouteServerConfig.Root + RouteServerConfig.PurchaseTerm + event.target.id}`, Configs).then(response =>
            {

                if(response?.data?.code == 200)
                {
                    Toast.warning(response?.data?.msg, {
                        autoClose : 10000
                    });

                    setTimeout(() =>
                    {
                        window.location.href = response?.data?.body?.url;
                    }, 10000)
                }
                else Toast.error(response?.data?.msg, {
                    autoClose : 5000
                });

            }).catch(response => {});
        }
    }

    onCloseModal = () =>
    {
        this.setState({ IsOpenModal : false });
    }
}

export default ContentTerm;