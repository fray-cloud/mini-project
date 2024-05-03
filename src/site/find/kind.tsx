import React, {useState, useEffect} from "react";
import { Stack, Badge } from "react-bootstrap";
import { kindGET, Kind } from "../../api/callAPI";

const KindComponent = () => {
    const up_kind_cd_list = [
        {up_kind_cd : '417000', upknm : '개'},
        {up_kind_cd : '422400', upknm : '고양이'},
        {up_kind_cd : '429900', upknm : '기타'},
    ]

    const [upKindCode, SetUpKindCode] = useState(up_kind_cd_list[0].up_kind_cd);
    const [kindCode, SetKindCode] = useState("");
    const [kind, SetKind] = useState<Kind[]>();
    

    const OnClickUpKind : React.MouseEventHandler<HTMLElement> = (e) => {
        console.log(e.currentTarget.dataset.id);
        SetUpKindCode(e.currentTarget.dataset.id? e.currentTarget.dataset.id : upKindCode)
    }

    const OnClickKind : React.MouseEventHandler<HTMLElement> = (e) => {
        console.log(e.currentTarget.dataset.id);
        SetKindCode(e.currentTarget.dataset.id? e.currentTarget.dataset.id : upKindCode)
    }

    useEffect(() => {
        const data = kindGET(upKindCode);
        data.then((res)=>{
            SetKind(res);
        })
    }, [upKindCode]);

    return(
        <>
        <Stack direction="horizontal" gap={2} className="overflow-auto flex-wrap">
        {
            up_kind_cd_list?.map((res)=>{
                return(
                    <Badge bg="primary" pill onClick={OnClickUpKind} data-id={res.up_kind_cd}>{res.upknm}</Badge>
                )
            })
        }
        
        </Stack>
        <Stack direction="horizontal" gap={2} className="overflow-auto flex-wrap">
        {
            kind?.map((res)=>{
                return(
                    // <div data-id={res.kindCd}>{res.knm}</div>
                    <Badge bg="secondary" pill data-id={res.kindCd}>{res.knm}</Badge>
                )
            })
        }
        </Stack>
        </>
        

    )
}

export default KindComponent