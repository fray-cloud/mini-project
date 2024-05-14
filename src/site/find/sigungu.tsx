import React, {useContext, useState, useEffect} from "react";
import { Sigungu, apiGET } from "../../api/callAPI";
import { Stack, Badge } from "react-bootstrap";
import { SidoContext } from "./sido";


type SigunguProp = {
    upr_cd? : string | null,
}

const SigunguComponent : React.FC = () => {
    const [sigungu, SetSigungu] = useState<Sigungu[]>();
    const getContext = useContext(SidoContext);
    
    useEffect(() => {
        console.log("first one mount / if getSidoCode updateed");
        const data = apiGET<Sigungu, SigunguProp>('sigungu', 
            getContext ? {upr_cd : getContext.sidoCode} : {});
        data.then((res)=>{
            SetSigungu(res);
        })
        return () => {   
        }
    }, [getContext]);
    
    return(
            <Stack direction="horizontal" gap={2} className="overflow-auto flex-wrap">
            {
                sigungu?.map((res, index)=>{
                    return(
                        <Badge bg="secondary" data-id={res.orgCd} key={index}>{res.orgdownNm}</Badge>
                    )
                })
            }
            </Stack>
    )
}

export default SigunguComponent;