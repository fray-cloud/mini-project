import dayjs, { Dayjs } from "dayjs";
import { AbandonmentPublic } from "../../../api/callAPI";
import { Row, Col, Card, Badge } from "react-bootstrap";


const ViewCard = (
    props : {
        idx : number, 
        data : AbandonmentPublic, 
        // onClick? : React.MouseEventHandler<HTMLElement>, 
        setModalShow? : React.Dispatch<React.SetStateAction<boolean>>,
        setDetailData? : React.Dispatch<React.SetStateAction<AbandonmentPublic | undefined>>,
    }) => {
    
    const onClick = () => {
        // props.setModalShow? props.setModalShow(true) : 
        // props.setDetailData? props.setDetailData(props.data) :
        // () => {}
        if(props.setModalShow) {
            props.setModalShow(true);
        }
        if(props.setDetailData){
            props.setDetailData(props.data);
        }
    }
    
    const processStateColor = props.data.processState === "보호중" ? "success" : "secondary";
    const processStateRegexp = props.data.processState === "보호중" ? props.data.processState : "종료" 
    const sexCdEmoji = 
        props.data.sexCd === "M" ? "♂️" : 
        props.data.sexCd === "F" ? "♀️" :
        "";
    const ageRegexp = props.data.age.match(/\d{4}/gi);
    const ageNumber = ageRegexp ? 
    `만 ${dayjs().diff(dayjs(ageRegexp.toString()), 'y')}살` :
    props.data.age
    const kindCdRegexp = props.data.kindCd.replace(/\[\W{0,}\]/gi,"");
    const startDate = dayjs(props.data.noticeSdt, 'YYYYMMDD');
    const endDate = dayjs(props.data.noticeEdt, 'YYYYMMDD');
    const dDay = endDate.diff(dayjs(), 'days');
    return(
        <Col 
        key={props.idx}
        >
            <Card
            border={processStateColor}
            onClick={onClick}
            >
                <Row xs={3} md={2}>
                    <Col>
                        <Card.Img 
                        variant="top" 
                        alt="Responsive image" 
                        style={{'height' : '150px', 'width' : '150px'}} 
                        src={props.data.filename}
                        />
                    </Col>
                    <Col xs={8}>
                        <Card.Body>
                            <Row xs={6} md={3}>
                                <Col>
                                    <Badge
                                    bg={processStateColor}
                                    >
                                        {processStateRegexp}
                                    </Badge>
                                </Col>
                                    {
                                        dDay > 0 && processStateColor == "success" ?
                                        <Col>
                                        <Badge bg="secondary">D-{dDay}</Badge>
                                        </Col>
                                        : null
                                        }
                            </Row>
                            <Row xs="auto">
                                <Col>
                                    <Card.Text className="fs-6 fw-bold">{props.data.careNm}</Card.Text>
                                </Col>
                            </Row>
                            <Row xs="auto">
                                <Col>
                                    <Card.Text className="fs-6 text">{sexCdEmoji}{kindCdRegexp}</Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text className="fs-6 text">{ageNumber}</Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default ViewCard;