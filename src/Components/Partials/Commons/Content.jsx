import React from "react";

/*-------------------------------------------------------------------*/

//Components
import CardTerm from "../../Commons/CardTerm";

/*-------------------------------------------------------------------*/

//Configs
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
        Terms             : [],
        CurrentPageNumber : null,
        CountSizePerPage  : null,
        TotalPages        : null,
        HasNextPage       : false,
        HasPrevPage       : false,
        IsShowPreLoad     : true,
        IsSearch          : false,
        SearchMSG         : null
    };


    constructor(props)
    {
        super(props);

        this.timer = null; /*یک متغیر ( متغیر کلاسی Property ) برای نگه داشتن تایمر جاوا اسکریپتی و پردازش روی آن*/
    }

    async componentDidMount()
    {
        let path;

        switch (this.props.category)
        {
            case "All"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllTerm}`;                       break;
            case "CSH"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "CSH"}`;       break;
            case "PHP"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "PHP"}`;       break;
            case "PYT"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "PYT"}`;       break;
            case "JS"        : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "JS"}`;        break;
            case "ASP"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "ASP"}`;       break;
            case "Laravel"   : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "Laravel"}`;   break;
            case "Django"    : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "Django"}`;    break;
            case "ReactJS"   : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "ReactJS"}`;   break;
            case "SQLServer" : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "SQLServer"}`; break;
            case "MySQL"     : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "MySQL"}`;     break;
        }

        await Axios.get(path + "?PageNumber=1&CountSizePerPage=" + PaginationConfig.CountItemPerPage).then(response =>
        {
            let paginationHeader = JSON.parse(response.headers["x-pagination"]);

            if(response?.data?.code == 200)
                this.setState({
                    Terms             : response?.data?.body.terms,
                    CurrentPageNumber : paginationHeader?.CurrentPage,
                    CountSizePerPage  : paginationHeader?.CountSizePerPage,
                    TotalPages        : paginationHeader?.TotalPages,
                    HasNextPage       : paginationHeader?.HasNext,
                    HasPrevPage       : paginationHeader?.HasPrev,
                    IsShowPreLoad     : false
                });

        }).catch(response => {

            this.setState({
                IsShowPreLoad : false,
                SearchMSG     : "( متاسفیم ، هیچ دوره ی مشخصی یافت نگردید )"
            });

        });
    };

    render()
    {
        let Pagination = null;
        if(this.state.TotalPages > 0)
        {
            Pagination = <ReactPaginate
                className="pagination"
                previousLabel={"ق"}
                nextLabel={"ب"}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.state.TotalPages}
                marginPagesDisplayed={3}
                pageRangeDisplayed={5}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                onPageChange={this.onClickPaginateLink}
            />
        }

        return (
            <section className="courses-area-style ptb-70">
                <div className="container">
                    <div className="showing-result">
                        <div className="row">
                            <div className="col-lg-12">
                                <input onChange={this.search} className="form-control default-font default-input" style={{textAlign: "center"}} placeholder="دنبال کدوم دوره می گردی ( فقط دوره مورد نظر رو تایپ کن )" type="text"/>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <hr/>
                    </div>
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

                        <div className="col-lg-12 col-md-12">
                            <div style={{textAlign: "center"}}>
                                <PulseLoader loading={this.state.IsShowPreLoad} color="#ffb607" size={10}/>
                            </div>
                        </div>

                        {/*در این قسمت اگر دوره های دریافت شده از طرق جستجو دریافت شده باشد ، نباید Pagination نمایش داده شود*/}
                        {
                            !this.state.IsSearch
                            ?
                            (
                                <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area">
                                        {Pagination}
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


    /*متد BuiltIn's React زیر موقعی اجرا میشود که React ، سند مجازی خود را یا همان VirtualDOM خود را پردازش یا Render کرده*/
    /*در این قسمت به DOM حقیقی دسترسی داریم*/
    /*پس در این قسمت که همانند همان رویداد onload در داخل HTML است ، ما اعداد لینک های Pagination را فارسی می کنیم*/
    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const UL = document.getElementsByClassName("pagination");
        for (let i = 0; i < UL.length; i++)
        {
            let childs = UL[i].children;
            for (let j = 0; j < childs.length; j++)
            {
                let A = childs[j].getElementsByTagName("a")[0];
                A.innerHTML = toPersian(A.textContent)
            }
        }
    };

    /*---------------------------------------------------------------CUSTOM---------------------------------------------------------------*/

    onClickPaginateLink = async (page) =>
    {
        this.setState({
            IsShowPreLoad : true
        });

        let path;

        switch (this.props.category)
        {
            case "All"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllTerm}`;                       break;
            case "CSH"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "CSH"}`;       break;
            case "PHP"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "PHP"}`;       break;
            case "PYT"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "PYT"}`;       break;
            case "JS"        : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "JS"}`;        break;
            case "ASP"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "ASP"}`;       break;
            case "Laravel"   : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "Laravel"}`;   break;
            case "Django"    : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "Django"}`;    break;
            case "ReactJS"   : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "ReactJS"}`;   break;
            case "SQLServer" : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "SQLServer"}`; break;
            case "MySQL"     : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "MySQL"}`;     break;
        }

        clearTimeout(this.timer);
        this.timer = setTimeout(async () =>
        {
            await Axios.get(`${path + "?PageNumber=" +  ( page.selected + 1 ) + "&CountSizePerPage=" + PaginationConfig.CountItemPerPage}`).then(response => {

                let paginationHeader = JSON.parse(response.headers["x-pagination"]);

                this.setState({
                    Terms             : response?.data?.body?.terms,
                    CurrentPageNumber : paginationHeader?.CurrentPage,
                    CountSizePerPage  : paginationHeader?.CountSizePerPage,
                    TotalPages        : paginationHeader?.TotalPages,
                    HasNextPage       : paginationHeader?.HasNext,
                    HasPrevPage       : paginationHeader?.HasPrev,
                    IsShowPreLoad     : false
                });

            }).catch(response => {});
        }, 1000);
    };

    search = async (event) =>
    {
        this.setState({
            Terms         : [],
            IsSearch      : true,
            IsShowPreLoad : true,
            SearchMSG     : null
        });

        if(event.target.value?.trim().length > 0)
        {
            let path;

            switch (this.props.category)
            {
                case "All"       : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTerm + event.target.value}`;                        break;
                case "CSH"       : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTermCategory + "CSH/"       + event.target.value}`; break;
                case "PHP"       : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTermCategory + "PHP/"       + event.target.value}`; break;
                case "PYT"       : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTermCategory + "PYT/"       + event.target.value}`; break;
                case "JS"        : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTermCategory + "JS/"        + event.target.value}`; break;
                case "ASP"       : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTermCategory + "ASP/"       + event.target.value}`; break;
                case "Laravel"   : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTermCategory + "Laravel/"   + event.target.value}`; break;
                case "Django"    : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTermCategory + "Django/"    + event.target.value}`; break;
                case "ReactJS"   : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTermCategory + "ReactJS/"   + event.target.value}`; break;
                case "SQLServer" : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTermCategory + "SQLServer/" + event.target.value}`; break;
                case "MySQL"     : path = `${RouteServerConfig.Root + RouteServerConfig.SearchTermCategory + "MySQL/"     + event.target.value}`; break;
            }

            clearTimeout(this.timer); /*در این قسمت می بایست تا زمانی که دست از تایپ کردن بر نداشتیم ، تایمر Reset گردد و هنگامی که عمل تایپ کردن تمام شد ، بعد از اتمام تایمر عمل کامل جستجو شکل بگیرد*/
            this.timer = setTimeout(async () =>
            {
                await Axios.get(path).then(response =>
                {
                    let terms = response?.data?.body.terms;

                    this.setState({
                        Terms         : terms,
                        IsShowPreLoad : false,
                        SearchMSG     : terms.length == 0 ? "( متاسفیم ، دوره مورد نظر یافت نگردید )" : null
                    });

                }).catch(response => {

                    this.setState({
                        IsShowPreLoad : false,
                        SearchMSG     : "( متاسفیم ، دوره مورد نظر یافت نگردید )"
                    });

                });
            }, 2000);
        }
        else
        {
            let path;

            switch (this.props.category)
            {
                case "All"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllTerm}`;                       break;
                case "CSH"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "CSH"}`;       break;
                case "PHP"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "PHP"}`;       break;
                case "PYT"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "PYT"}`;       break;
                case "JS"        : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "JS"}`;        break;
                case "ASP"       : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "ASP"}`;       break;
                case "Laravel"   : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "Laravel"}`;   break;
                case "Django"    : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "Django"}`;    break;
                case "ReactJS"   : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "ReactJS"}`;   break;
                case "SQLServer" : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "SQLServer"}`; break;
                case "MySQL"     : path = `${RouteServerConfig.Root + RouteServerConfig.AllCategoryTerm + "MySQL"}`;     break;
            }

            clearTimeout(this.timer); /*در این قسمت می بایست تا زمانی که دست از تایپ کردن بر نداشتیم ، تایمر Reset گردد و هنگامی که عمل تایپ کردن تمام شد ، بعد از اتمام تایمر عمل کامل جستجو شکل بگیرد*/
            this.timer = setTimeout(async () =>
            {
                await Axios.get(path + "?PageNumber=1&CountSizePerPage=" + PaginationConfig.CountItemPerPage).then(response =>
                {

                    let paginationHeader = JSON.parse(response.headers["x-pagination"]);

                    this.setState({
                        Terms             : response?.data?.body.terms,
                        CurrentPageNumber : paginationHeader?.CurrentPage,
                        CountSizePerPage  : paginationHeader?.CountSizePerPage,
                        TotalPages        : paginationHeader?.TotalPages,
                        HasNextPage       : paginationHeader?.HasNext,
                        HasPrevPage       : paginationHeader?.HasPrev,
                        IsShowPreLoad     : false,
                        IsSearch          : false
                    });

                }).catch(response => {

                    this.setState({
                        IsShowPreLoad : false,
                        SearchMSG     : "( متاسفیم ، دوره مورد نظر یافت نگردید )"
                    });

                });
            }, 2000);
        }
    }
}

export default Content;