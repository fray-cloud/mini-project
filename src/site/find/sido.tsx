import React, {useState, useEffect, createContext} from "react";
import { Stack, Badge, Container, Row, Col } from "react-bootstrap";
import { Sido, apiGET } from "../../api/callAPI";

type SidoContextProps = {
    sidoCode : string,
}

type SidoProp = {
    numOfRows? : number,
}

export const SidoContext = createContext<SidoContextProps | null>(null);


const SidoComponent: React.FC<{children : React.ReactNode}> = ({children}) => {
    const [sido, SetSido] = useState<Sido[]>();
    const [getClickedSidoCode, SetClickedSidoCode] = useState<SidoContextProps>({
        sidoCode : "-1"
    });
    // const GetSidoContext = useContext(SidoContext);

    const OnClickSido : React.MouseEventHandler<HTMLElement> = (e) => {
        SetClickedSidoCode(e.currentTarget.dataset.id? {sidoCode : e.currentTarget.dataset.id} : {sidoCode : ''})
    }

    useEffect(()=>{
        const data = apiGET<Sido, SidoProp>('sido', {numOfRows : 30});
        console.log("SidoComponent mount");
        return () => {
            data.then((res) => {
                SetSido(res)
            })
        }
    }, []);


    return (
        <SidoContext.Provider value={getClickedSidoCode}>
            <Stack direction="horizontal" gap={2} className="overflow-auto flex-wrap">
            {
                sido?.map((res, index)=>{
                    return(
                        <Badge bg="primary" pill onClick={OnClickSido} data-id={res.orgCd} key={index}>{res.orgdownNm}</Badge>
                    )
                })
            }
            </Stack>
            {children}
        </SidoContext.Provider>
    )
}

export default SidoComponent;