import { useFormContext, useWatch } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

import Form from "react-bootstrap/Form";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useQueryUpKind } from "../../../query/query";



const RadioUpKind = () => {
    const { register } = useFormContext();
    const { data, queryInfo } = useQueryUpKind();

    if (queryInfo.isPending) {
        return <span>Loading...</span>
    }

    if (queryInfo.isFetching) {
        return <span>Fetching...</span>
    }

    return(
        <Form.Group>
            <Form.Label>종류</Form.Label>
            <div key={`inline-radio`}>
            {
                data?.map((res, index) => {
                    return(
                        <OverlayTrigger
                        placement="top"
                        key={index}
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            <Tooltip>{res.upknm}</Tooltip>
                        }
                        >
                            <Form.Check
                            {...register('upkind')}
                            inline
                            type="radio"
                            value={res.up_kind_cd}
                            key={index}
                            id={`inline-radio-${index}`}
                            label={res.emoji}
                            />
                        </OverlayTrigger>
                        
                    )
                })
            }
            </div>
        </Form.Group>
        
    )
}

export default RadioUpKind;