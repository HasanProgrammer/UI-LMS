import React from "react";

/*-------------------------------------------------------------------*/

//Components
import CardTerm from "../../../Commons/HomeComponents/CardTerm";

/*-------------------------------------------------------------------*/

class Content extends React.Component
{
    render()
    {
        return (
            <section className="courses-area-style ptb-70">
                <div className="container">
                    <div className="showing-result">
                        <div className="row">
                            <div className="col-lg-12">
                                <input className="form-control default-font default-input" style={{textAlign: "center"}} placeholder="دنبال کدوم دوره می گردی ( فقط دوره مورد نظر رو تایپ کن )" type="text"/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <CardTerm/>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CardTerm/>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CardTerm/>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CardTerm/>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CardTerm/>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <CardTerm/>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">

                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className="bx bx-chevron-right"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;