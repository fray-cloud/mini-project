import { useFormContext, useWatch } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useQuerySigungu } from "../../../query/query";

const SelectSiqungu = () => {
    const { register, control } = useFormContext();
 
    const watchSido = useWatch({
        control,
        name : 'upr_cd',
    });

    const {data , queryInfo} = useQuerySigungu(watchSido);
    
    return(
        <Form.Group>
            <Form.Label>시군구</Form.Label>
            <Form.Select {...register('org_cd')} aria-label="시도군">
            {
                queryInfo.isPending ? <span>Loading...</span> :
                queryInfo.isFetching ? <span>Fetching...</span> :
                data?.response.body.items.item?.map((res, index) => {
                    return(
                        <option
                        key={index}
                        value={res.orgCd}
                        >
                            {res.orgdownNm}
                        </option>
                    )
                })
            }
            </Form.Select>
        </Form.Group>
    )

}

export default SelectSiqungu;