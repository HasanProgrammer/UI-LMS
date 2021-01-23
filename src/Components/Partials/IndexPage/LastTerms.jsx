import React from "react";

/*-------------------------------------------------------------------*/

//Contexts
import MasterContext from "../../../Contexts/MasterContext"; /*Using*/

/*-------------------------------------------------------------------*/

//Plugins
import OWLSlider from "react-owl-carousel";
import CardTerm from "../../Commons/CardTerm";

/*-------------------------------------------------------------------*/

class LastTerms extends React.Component
{
    static contextType = MasterContext;

    static ResponsiveOWL = {
        480:{
            items : 1
        },
        736:{
            items : 2
        },
        980:{
            items : 2
        },
        1280:{
            items : 3
        },
        1366:{
            items : 3
        },
        1690:{
            items : 3
        }
    };

    render()
    {
        return (
            <section className={"courses-area-style " + this.props.class} style={this.props.style}>
                <div className="container">
                    <div className="row">
                        {
                            this.props.term?.length > 0
                            ?
                            <h4 className="last-terms">
                                {this.props.title}
                            </h4>
                            :
                            <h4 className="last-terms-zero">
                                {"هنوز دوره ای منتشر نگردیده است"}
                            </h4>
                        }
                    </div>

                    <div className="row" dir="ltr">
                        {
                            this.props.term?.length > 0
                            ?
                            <OWLSlider nav={false} autoplay={true} autoplayHoverPause={true} autoplayTimeout={2500} loop margin={15} responsive={LastTerms.ResponsiveOWL}>
                                {
                                    this.props.term?.map(term => (
                                        <CardTerm id          = {term.id}
                                                  image       = {term.image}
                                                  price       = {term.price}
                                                  title       = {term.name}
                                                  description = {term.description}
                                                  countUser   = {term.countStudent}
                                                  countVideo  = {term.countVideos}
                                        />
                                    ))
                                }
                            </OWLSlider>
                            :
                            null
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default LastTerms;