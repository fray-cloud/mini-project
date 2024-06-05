import { UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import dayjs, { Dayjs } from 'dayjs';
import { useQueryEndDate, useQueryStartDate } from '../../../query/query';
import { Row, Col, Form } from "react-bootstrap";


interface props {
    isRange? : boolean
}

const AbandonmentPublicDate = ({isRange = true} : props) => {
    const StartDate = () => {
        const {control, setValue, getValues} = useFormContext();
        const {update} = useQueryStartDate(getValues('bgnde'));

        const handleChange = (dateChange : Dayjs | null) => {
            setValue("bgnde", dateChange);
            update(dateChange);
        };
        
        return(
            <Controller
            name='bgnde'
            control={control}
            //defaultValue={initialData}
            render={({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    format="YYYY/MM/DD"
                    value={value}
                    onChange={(data) => {handleChange(data) ; onChange(data)}}
                    />
                </LocalizationProvider>
                
            )}
            />
        )
    }

    const EndDate = () => {
        const {control, setValue, getValues} = useFormContext();
        const {update} = useQueryEndDate(getValues('endde'));

        const handleChange = (dateChange : Dayjs | null) => {
            setValue("endde", dateChange);
            update(dateChange);
        };
        
        return(
            <Controller
            name='endde'
            control={control}
            //defaultValue={initialData}
            render={({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    format="YYYY/MM/DD"
                    value={value}
                    onChange={(data) => {handleChange(data) ; onChange(data)}}
                    />
                </LocalizationProvider>
                
            )}
            />
        )
    }

    return(
        <Form.Group>
            <Form.Label>유기일</Form.Label>
            <Row md={1}>
                <Col>
                    <StartDate/>
                </Col>
                    {
                        isRange? 
                        <Col>
                            <EndDate/>
                        </Col> : null
                        
                    }  
            </Row>
        </Form.Group>
    )
}

export default AbandonmentPublicDate;