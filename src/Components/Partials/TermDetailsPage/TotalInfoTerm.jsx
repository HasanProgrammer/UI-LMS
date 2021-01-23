import React from "react";

/*-------------------------------------------------------------------*/

//Contexts
import TermDetailsContext from "../../../Contexts/TermDetailsContext"; /*Using*/

/*-------------------------------------------------------------------*/

class TotalInfoTerm extends React.Component
{
    static contextType = TermDetailsContext;

    render()
    {
        return (
            <div className="account-wrap" style={{cursor: "default"}}>
                {
                    this.context.TermDetails?.isBuyed
                    ?
                    <div className="term-state">
                        شما دانشجوی این دوره هستید
                    </div>
                    :
                    (
                        <>
                            <ul>
                                <li>
                                    قیمت دوره <span className="bold">{this.context.EnNumberToPersian(this.context.TermDetails?.price.toString())} تومان </span>
                                </li>
                                <li>
                                    شروع دوره <span dir="ltr">{this.context.EnNumberToPersian(this.context.TermDetails?.dateStart)}</span>
                                </li>
                                <li>
                                    پایان دوره <span dir="ltr">{this.context.EnNumberToPersian(this.context.TermDetails?.dateEnd)}</span>
                                </li>
                            </ul>
                            <a href="" id={this.context.TermDetails?.id} onClick={this.context.PurchaseTerm} className="default-btn register purchase-btn">خرید دوره</a>
                        </>
                    )
                }
            </div>
        );
    }
}

export default TotalInfoTerm;