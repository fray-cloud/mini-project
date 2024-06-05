import { FieldValues, useFormContext } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import SelectSido from "./select/sido";
import SelectSiqungu from "./select/sigungu";
import SelectKind from "./select/kind";
import RadioUpKind from "./radio/upKind";
import AbandonmentPublicDate from "./datePicker";

import { AbandonmentPublic, apiGET } from "../../../api/callAPI";
import dayjs, { Dayjs } from "dayjs";
import { Row, Col } from "react-bootstrap";

interface AbandonmentPublicForm extends FieldValues {
    bgnde? : Dayjs // 유기날짜 시작일
    endde? : Dayjs // 유기날짜 종료일
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

interface AbandonmentPublicProps {
    bgnde? : string // 유기날짜 시작일
    endde? : string // 유기날짜 종료일
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

const AbandonmentPublicForm = () => {
    const {handleSubmit, trigger} = useFormContext();

    const onSubmit = (formData : AbandonmentPublicForm) => {
        console.log('submit', formData);
        console.log('submit change Date :: ',dayjs(formData.bgnde).format('YYYYMMDD'));
        trigger();
    };

    return(
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row md={1}>
                    <Col>
                        <SelectSido/>
                    </Col>
                    <Col>
                        <SelectSiqungu/>
                    </Col>
                </Row>
                <hr/>
                <Row md={1}>
                    <Col>
                        <RadioUpKind/>
                        <SelectKind/>
                    </Col>
                </Row>
                <hr/>
                <Row md={1}>
                    <Col>
                        <AbandonmentPublicDate/>
                    </Col>
                </Row>
                <hr/>
                <Row md={1}>
                    <Col>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Col>
                </Row>
            </Form>

    )
}

export default AbandonmentPublicForm;