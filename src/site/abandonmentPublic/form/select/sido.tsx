import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useQuerySido } from "../../../query/query";


const SelectSido = () => {
    const {register} = useFormContext();
    
    const {data, queryInfo} = useQuerySido();

    return(
        <Form.Group>
            <Form.Label>시도</Form.Label>
            <Form.Select {...register('upr_cd')} aria-label="시도">
            <option
                key={0}
                value={-1}
                >
                지역을 선택하세요.
                </option>
            {
                queryInfo.isPending ? <span>Loading...</span> :
                queryInfo.isFetching ? <span>Fetching...</span> :
                
                data?.response.body.items.item.map((res, index) => {
                    return(
                        <option
                        key={index + 1}
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

export default SelectSido;