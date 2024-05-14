import React, {useState, useEffect} from "react";
import { Row, Col, Card } from "react-bootstrap";
import { AbandonmentPublic, apiGET } from "../../api/callAPI";

type AbandonmentPublicProp = {
    bgnde? : string, // 유기날짜 시작일
    endde? : string, // 유기날짜 종료일
    upkind? : string, // 축종코드
    kind? : string, // 품종코드
    upr_cd? : string, // 시도코드
    org_cd? : string, // 시군구코드
    care_reg_no? : string, // 보호소번호
    state? : string, // 상태
    neuter_yn? : string, // 중성화여부
    pageNo? : string, // 페이지 번호
    numOfRows? : string, // 페이지당 보여줄 갯수
}

const AbandonmentPublicComponent = ({...prop} :AbandonmentPublicProp) => {
    const [abandonmentPublic, SetabandonmentPublic] = useState<AbandonmentPublic[]>();
    
    useEffect(() => {
        const data = apiGET<AbandonmentPublic, AbandonmentPublicProp>('abandonmentPublic', 
            {
                ...prop, 
                numOfRows : '20' // 기본 10개만 줌
            }
        )
        data.then((res) => {
            SetabandonmentPublic(res);
            console.log('조회 :: ', res);
        })
    },[])

    return(
        <Row xs={1} md={2} className="g-4">
            {
                abandonmentPublic?.map((data, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={data.filename}/>
                            <Card.Body>
                                <Card.Title>{data.desertionNo}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
    </Row>
    )
}

export default AbandonmentPublicComponent;