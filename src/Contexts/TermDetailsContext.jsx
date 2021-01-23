import React from "react";

const TermDetailsContext = React.createContext(
{
    TermId            : null,
    TermDetails       : null,
    VideoSource       : null,
    EnNumberToPersian : () => {},
    ShowVideo         : () => {},
    DownloadVideo     : () => {},
    PurchaseTerm      : () => {}
});

export default TermDetailsContext;