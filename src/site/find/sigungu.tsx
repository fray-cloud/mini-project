import React, {useContext, useState, useEffect} from "react";
import { sigunguGET, Sigungu } from "../../api/callAPI";
import { Stack, Badge } from "react-bootstrap";
import { SidoContext } from "./sido";


const SigunguComponent = () => {
    const [sigungu, SetSigungu] = useState<Sigungu[]>();
    const getContext = useContext(SidoContext);
    
    useEffect(() => {
        console.log("first one mount / if getSidoCode updateed");
        const data = sigunguGET(getContext? getContext.sidoCode : "");
        data.then((res)=>{
            SetSigungu(res);
        })
        return () => {   
        }
    }, [getContext]);
    
    return(
            <Stack direction="horizontal" gap={2} className="overflow-auto flex-wrap">
            {
                sigungu?.map((res)=>{
                    return(
                        <Badge bg="secondary" data-id={res.orgCd}>{res.orgdownNm}</Badge>
                    )
                })
            }
            </Stack>
    )
}

export default SigunguComponent;