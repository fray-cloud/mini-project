import { Dayjs } from "dayjs";
import AbandonmentPublicForm from "./form";
import AbandonmentPublicView from "./view";

import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { useFormAbandonment } from "./form/form/form";

import { Container, Row, Col } from "react-bootstrap";

interface AbandonmentPublicProp extends FieldValues {
    bgnde? : Dayjs | string// 유기날짜 시작일
    endde? : Dayjs | string // 유기날짜 종료일
    upkind? : string // 축종코드
    kind? : string // 품종코드
    upr_cd? : string // 시도코드
    org_cd? : string // 시군구코드
    care_reg_no? : string // 보호소번호
    state? : string // 상태
    neuter_yn? : string // 중성화여부
    pageNo? : string // 페이지 번호
    numOfRows? : string // 페이지당 보여줄 갯수
}

const AbandonmentPublic = () => {
    const methods = useFormAbandonment();

    return(
        <>
        <FormProvider {...methods}>
            <Container className="fluid">
                <Row>
                    <Col md={3} className="border rounded">
                        <AbandonmentPublicForm/>
                    </Col>
                    <Col md={9} className="border rounded">
                        <AbandonmentPublicView/>
                    </Col>
                </Row>
            </Container>
        </FormProvider>
            
        </>
    )
}

export default AbandonmentPublic;