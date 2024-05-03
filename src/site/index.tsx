import React, { useEffect, useState } from "react";
// import { sidoGET, Sido, Sigungu, sigunguGET } from "../api/callAPI";
import { Badge, Stack, Container } from "react-bootstrap";
import SidoComponent from "./find/sido";
import SigunguComponent from "./find/sigungu";
import KindComponent from "./find/kind";


const Main = () => {

    return(
        <>
            <SidoComponent>
                <SigunguComponent/>
            </SidoComponent>
            <KindComponent/>
        </>
    )
}

export default Main;