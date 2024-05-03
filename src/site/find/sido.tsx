import React, {useState, useEffect, createContext} from "react";
import { Stack, Badge, Container, Row, Col } from "react-bootstrap";
import { sidoGET, Sido } from "../../api/callAPI";

type SidoContextProps = {
    sidoCode : string,
}

export const SidoContext = createContext<SidoContextProps | null>(null);


const SidoComponent: React.FC<{children : React.ReactNode}> = ({children}) => {
    const [sido, SetSido] = useState<Sido[]>();
    const [getClickedSidoCode, SetClickedSidoCode] = useState<SidoContextProps>({
        sidoCode : ""
    });
    // const GetSidoContext = useContext(SidoContext);

    const OnClickSido : React.MouseEventHandler<HTMLElement> = (e) => {
        SetClickedSidoCode(e.currentTarget.dataset.id? {sidoCode : e.currentTarget.dataset.id} : {sidoCode : ''})
    }

    useEffect(()=>{
        const data = sidoGET();
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
                sido?.map((res)=>{
                    return(
                        <Badge bg="primary" pill onClick={OnClickSido} data-id={res.orgCd}>{res.orgdownNm}</Badge>
                    )
                })
            }
            </Stack>
            {children}
        </SidoContext.Provider>
    )
}

export default SidoComponent;