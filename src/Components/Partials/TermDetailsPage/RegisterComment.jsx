import React from "react";

/*-------------------------------------------------------------------*/

//Contexts
import TermDetailsContext from "../../../Contexts/TermDetailsContext"; /*Using*/

/*-------------------------------------------------------------------*/

//Configs
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Plugins
import Axios from "axios";

import { toast as Toast } from "react-toastify";

/*-------------------------------------------------------------------*/

class RegisterComment extends React.Component
{
    static contextType = TermDetailsContext;

    state =
    {
        TermId    : this.context.TermId,
        Title     : null,
        Question  : null
    };

    render()
    {
        return (
            <div className="leave-reply-wrap">
                <h3>طرح سوال ( دیدگاه )</h3>

                <br/>

                <form>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="form-group">
                                <label>عنوان سوال / دیدگاه ( الزامی )</label>
                                <input onChange={this.setTitle} style={{backgroundColor: "white", border: "1px solid #dedede"}} placeholder="عنوان سوال / دیدگاه خود را در این قسمت وارد نمایید" className="form-control default-font"/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <label>متن سوال / دیدگاه ( الزامی )</label>
                                <textarea onChange={this.setQuestion} className="form-control default-font"
                                          rows="8"
                                          placeholder="متن سوال / دیدگاه خود را در این قسمت وارد نمایید"
                                          style={{backgroundColor: "white", border: "1px solid #dedede"}}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <button style={{marginBottom: "0.3em"}} onClick={this.RegisterQuestion} className="default-btn register">طرح سوال ( دیدگاه )</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    /*---------------------------------------------------------------CUSTOM---------------------------------------------------------------*/

    setTitle = (event) =>
    {
        this.setState({
            Title : event.target.value
        });
    }

    setQuestion = (event) =>
    {
        this.setState({
            Question : event.target.value
        });
    }

    RegisterQuestion = async (event) =>
    {
        event.preventDefault();

        if(localStorage.getItem("Token") !== null)
        {
            let Configs = {
                headers : {
                    "Content-Type"  : "application/json",
                    "Authorization" : `${"Bearer " + localStorage.getItem("Token")}`
                }
            };

            let Data = {
                Title   : this.state.Title,
                Content : this.state.Question
            }

            await Axios.put(`${RouteServerConfig.Root + RouteServerConfig.RegisterQuestion + this.state.TermId}`, JSON.stringify(Data), Configs).then(response => {

                if(response?.data?.code == 201 || response?.data?.code == 200)
                    Toast.success("سوال ( دیدگاه ) شما با موفقیت در سیستم ثبت گردید و پس از تایید توسط مدرس ، پاسخ از طریق پست الکترونیکی و در اسرع وقت ارسال خواهد شد و در صورت نیاز مدرس با شما تماس خواهد گرفت . سپاس از همراهی شما .  ( دوتریس )", {
                        autoClose : 15000
                    });

            }).catch(response => {

                Toast.error(response.response?.data?.msg);
                if(typeof response?.response?.data?.body?.errors != "undefined")
                {
                    response.response.data.body.errors.map(error => {

                        Toast.error(error);

                    });
                }

            });
        }
        else Toast.warning("شما برای ارسال سوال ( دیدگاه ) خود باید در سیستم عضو شوید ، یا در صورت داشتن حساب کاربری ، لاگین نمایید", {
            autoClose : 10000
        })
    }
}

export default RegisterComment;