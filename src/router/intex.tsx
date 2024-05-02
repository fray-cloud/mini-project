import React from "react";
import {Route, Routes} from "react-router-dom"
import Main from "../site";

const SiteRouter = () => {
    return (
        <Routes>
            <Route path="/main" element={<Main/>}/>
        </Routes>
    )
}

export default SiteRouter;