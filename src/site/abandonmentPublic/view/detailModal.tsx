import { Modal, Button } from "react-bootstrap";
import DetailView from "./detailTable";
import { AbandonmentPublic } from "../../../api/callAPI";

const DetailModalView = (
    props : {
        isShow : boolean, 
        setShow : React.Dispatch<React.SetStateAction<boolean>>, 
        data? : AbandonmentPublic | undefined
    }
) => {
    const handleClose = () => props.setShow(false);

    return(
        <Modal show={props.isShow} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>상세 정보</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DetailView data={props.data}></DetailView>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailModalView;