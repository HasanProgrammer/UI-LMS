import React    from "react";
import { Link } from "react-router-dom";

/*-------------------------------------------------------------------*/

//Components
import CourseTabs    from "./CourseTabs";
import ContentHeader from "./ContentHeader";
import TotalInfoTerm from "./TotalInfoTerm";

/*-------------------------------------------------------------------*/

//Plugins
import Axios      from "axios";
import { Player } from 'video-react';

import { toast as Toast } from "react-toastify";

/*-------------------------------------------------------------------*/

//Configs
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Styles
import "video-react/dist/video-react.css";

/*-------------------------------------------------------------------*/

//Context
import MasterContext      from "../../../Contexts/MasterContext";      /*Using*/
import TermDetailsContext from "../../../Contexts/TermDetailsContext"; /*Provider*/

/*-------------------------------------------------------------------*/

class ContentTerm extends React.Component
{
    state =
    {
        TermDetails : null,
        VideoSource : null
    }

    static contextType = MasterContext;

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
            let videoSources = [];

            if(response?.data?.body?.term?.hasChapterKey == 1)
            {
                response?.data?.body?.term?.chapters?.map(chapter => {
                    chapter.videos?.map(video => {
                        if(video.isFreeKey == 1)
                            videoSources.push(video);
                    });
                });
            }
            else
            {
                response?.data?.body?.term?.videos?.map(video => {
                    if(video.isFreeKey == 1)
                        videoSources.push(video);
                });
            }

            if(response?.data?.code == 200)
                this.setState({
                    VideoSource : ( typeof videoSources[0] !== "undefined" || videoSources.length > 0) ? `${RouteServerConfig.Root + "/" + videoSources[0].video}` : null,
                    TermDetails : response?.data?.body?.term
                });

        }).catch(async response => {

            if(response?.data?.code == 403)
            {
                localStorage.removeItem("Token");
                window.location.reload();
            }

        });
    };

    render()
    {
        const ModalStyle =
        {
            width  : "1200px",
            height : "700px"
        }

        return (
            <TermDetailsContext.Provider value={{
                TermId            : this.props.pathValue,
                TermDetails       : this.state.TermDetails,
                VideoSource       : this.state.VideoSource,
                EnNumberToPersian : (input) => this.context.EnNumberToPersian(input),
                ShowVideo         : (event) => this.onClickShowVideo(event),
                DownloadVideo     : (event) => this.onClickDownloadVideo(event),
                PurchaseTerm      : (event) => this.onClickPurchaseTerm(event)
            }}>

                <section className="single-course-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">

                                <ContentHeader/>
                                <CourseTabs/>

                            </div>
                            <div className="col-lg-4">

                                <TotalInfoTerm/>

                            </div>
                        </div>
                    </div>
                </section>

            </TermDetailsContext.Provider>
        );
    }

    /*---------------------------------------------------------------CUSTOM---------------------------------------------------------------*/

    onClickShowVideo = (event) =>
    {
        event.preventDefault();

        Toast.success("فیلم مورد نظر بارگزاری شده است و شما می توانید از قسمت بالا ، فیلم انتخابی خود ( رایگان ) را در پلیر تماشا نمایید", {
            autoClose : 10000
        });

        this.setState({
            VideoSource : `${RouteServerConfig.Root + "/" + event.target.id}`
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

            await Axios.get(`${RouteServerConfig.Root + RouteServerConfig.DownloadVideo + event.target.id}`, Configs).then(response =>
            {

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
                }

            });
        }
        else
        {
            let Configs =
            {
                responseType : 'arraybuffer'
            };

            await Axios.get(`${RouteServerConfig.Root + RouteServerConfig.DownloadVideoPublic + event.target.id}`, Configs).then(response =>
            {

                let videoNameHeader = JSON.parse(response.headers["x-video-name"]);

                let bytes = new Uint8Array(response?.data); /*در این قسمت FileStream را به آرایه ای از Byte ها تبدیل می کنیم*/

                let blob = new Blob([bytes], { type : "application/octet-stream" });

                let link = document.createElement('a');

                link.href = window.URL.createObjectURL(blob);

                link.download = videoNameHeader.Name;

                link.click();

            }).catch(response => {



            });
        }
    };

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
}

export default ContentTerm;