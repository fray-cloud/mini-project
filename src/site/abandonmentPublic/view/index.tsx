import { Row, Col, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import { useQueryAbandonment } from "../../query/query";
import InfiniteScroll from 'react-infinite-scroller';

import ViewCard from "./viewCard";
import DetailModalView from "./detailModal";

import { AbandonmentPublic } from "../../../api/callAPI";

const AbandonmentPublicView = () => {
    const {formState, getValues, trigger} = useFormContext();
    const {data, update, queryInfo} = useQueryAbandonment(getValues());

    const [detailData, SetDetailData] = useState<AbandonmentPublic>();
    const [modalShow, SetModalShow] = useState(false);

    useEffect(() => {
        if (formState.isSubmitting) {
            console.log('useEffect update');
            update(getValues());
        }
    }, [trigger()]);

    return(
        <>
        <DetailModalView isShow={modalShow} setShow={SetModalShow} data={detailData}/>
        {
            formState.isSubmitted ? 
            <InfiniteScroll 
            hasMore={queryInfo.hasNextPage} 
            loadMore={() => {console.log('..??');queryInfo.fetchNextPage()}}
            >
                <Row xs={3} md={3}>
                    <Col xs="auto" md={5}/>
                    <Col xs={2} md={2}>
                    {
                        queryInfo.isFetching && !queryInfo.isFetchingNextPage ? <Spinner animation="grow" /> : null
                    }
                    </Col>
                    <Col xs="auto" md={5}/>
                </Row>
                <Row xs={1} md={2} className="g-4">
                        {
                            
                            data?.pages?.map((data, _) => (
                                data?.response.body.items.item?
                                data?.response.body.items.item.map((res, idx) => {
                                    return(
                                            <ViewCard idx={idx} data={res} setModalShow={SetModalShow} setDetailData={SetDetailData} />
                                    )
                                    
                                }) :
                                <div>데이터가 존재하지 않습니다.</div>
                            ))
                        }
                        
                </Row>
                <Row xs={3} md={3}>
                    <Col xs="auto" md={5}/>
                    <Col xs={2} md={2}>
                    {
                        queryInfo.isFetchingNextPage ? <Spinner animation="grow" /> : null
                    }
                    </Col>
                    <Col xs="auto" md={5}/>
                </Row>
            </InfiniteScroll> : null
        }
        </>
    )
}

export default AbandonmentPublicView;