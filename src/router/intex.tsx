import React from "react";
import {Route, Routes} from "react-router-dom"
import AbandonmentPublicSearch from "../site";
import Home from "../site/home";

const SiteRouter = () => {
    return (
        <Routes>
            <Route path="/search" element={<AbandonmentPublicSearch/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}

export default SiteRouter;