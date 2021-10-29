import React from "react";
import { Helmet } from 'react-helmet';

export default function title(){
    const titleName = "Inquizitive";
    return(<>
        <Helmet>
        <title>{titleName}</title>
        </Helmet>
        </>)
}