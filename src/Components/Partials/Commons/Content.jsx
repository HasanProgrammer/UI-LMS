import React from "react";

/*-------------------------------------------------------------------*/

//Components
import CardTerm from "../../Commons/CardTerm";

/*-------------------------------------------------------------------*/

//Configs
import RouteServerConfig from "../../../Configs/RouteServer";

/*-------------------------------------------------------------------*/

//Plugins
import Axios from "axios";

/*-------------------------------------------------------------------*/

class Content extends React.Component
{
    state =
    {
        Terms : []
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

        await Axios.get(path).then(response =>
        {

            if(response?.data?.code == 200)
                this.setState({
                    Terms : response?.data?.body.terms
                });

        }).catch(response => {});
    }

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
                        {
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
                        }
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