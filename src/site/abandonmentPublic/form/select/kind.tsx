import { useFormContext, useWatch } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Kind , apiGET } from "../../../../api/callAPI"

import Form from "react-bootstrap/Form";
import { useQueryKind } from "../../../query/query";


const SelectKind = () => {
    const { register, control } = useFormContext();
 
    const watchUpKind = useWatch({
        control,
        name : 'upkind',
    });
    
    const {data, queryInfo} = useQueryKind(watchUpKind);

    return(
        <Form.Group>
            <Form.Select {...register('kind')} aria-label="종류">
                {
                    queryInfo.isPending ? <span>Loading...</span> :
                    queryInfo.isFetching ? <span>Fetching...</span> :
                    data?.response.body.items.item.map((res, index) => {
                        return(
                            <option
                            key={index}
                            value={res.kindCd}
                            >
                                {res.knm}
                            </option>
                        )
                    })
                }
            </Form.Select>
        </Form.Group>
    )

}

export default SelectKind;