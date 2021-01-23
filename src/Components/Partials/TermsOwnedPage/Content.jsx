import React from "react";

/*-------------------------------------------------------------------*/

//Components
import CardTerm from "../../Commons/CardTerm";

/*-------------------------------------------------------------------*/

//Configs
import RouteConfig       from "../../../Configs/Route";
import RouteServerConfig from "../../../Configs/RouteServer";
import PaginationConfig  from "../../../Configs/Pagination.json";

/*-------------------------------------------------------------------*/

//Plugins
import Axios         from "axios";
import ReactPaginate from "react-paginate";

import { toPersian }   from "persian";
import { PulseLoader } from "react-spinners";

/*-------------------------------------------------------------------*/

class Content extends React.Component
{
    state =
    {
        Terms         : [],
        IsShowPreLoad : true,
        SearchMSG     : null
    };

    async componentDidMount()
    {
        let Configs = {
            headers : {
                "Authorization" : `${"Bearer " + localStorage.getItem("Token")}`
            }
        };

        await Axios.get(`${RouteServerConfig.Root + RouteServerConfig.AllTermOwned}`, Configs).then(response =>
        {

            if(response?.data?.code == 200)
                this.setState({
                    Terms         : response?.data?.body.terms,
                    IsShowPreLoad : false,
                });

        }).catch(response => {

            if(response?.response?.data?.code == 403)
            {
                window.location.href = `${RouteConfig.HomeComponents.IndexPage}`;
                localStorage.removeItem("Token");
            }

            this.setState({
                SearchMSG     : "( متاسفیم ، هیچ دوره ی مشخصی یافت نگردید )",
                IsShowPreLoad : false
            });

        });
    };

    render()
    {
        return (
            <section className="courses-area-style ptb-70">
                <div className="container">
                    <div className="row">
                        {
                            this.state.Terms?.length > 0
                            ?
                            this.state.Terms?.map(term => (
                                <div className="col-lg-4 col-md-6">
                                    <CardTerm id          = {term.id}
                                              image       = {term.image}
                                              price       = {term.price}
                                              title       = {term.name}
                                              description = {term.description}
                                              countUser   = {term.countStudent}
                                              countVideo  = {term.countVideos}
                                    />
                                </div>
                            ))
                            :
                            (
                                <div className="col-lg-12">
                                    <h3 style={{textAlign: "center", padding: "1em", cursor: "default"}}>{this.state.SearchMSG}</h3>
                                </div>
                            )
                        }

                        {

                            this.state.IsShowPreLoad
                            ?
                            (
                                <div className="col-lg-12 col-md-12">
                                    <div style={{textAlign: "center"}}>
                                        <PulseLoader loading={this.state.IsShowPreLoad} color="#ffb607" size={10}/>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                            )
                            :
                            null
                        }

                    </div>
                </div>
            </section>
        );
    }
}

export default Content;