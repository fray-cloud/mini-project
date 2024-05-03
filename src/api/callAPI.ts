import { encoding, decoding } from "./key"
import axios, { AxiosResponse } from 'axios';
const endPoint=`http://apis.data.go.kr/1543061/abandonmentPublicSrvc`
const frontPoint=`localhost:3000`

type defaultResponse<T> = {
    response : {
        body : {
            items : {
                item : T
            },
            numOfRows? : number, //한 페이지 결과 수
            pageNo? : number, // 페이지 번호
            totalCount? : number // 전체 결과 수
        },
        header : {
            reqNo : number, // 요청번호
            resultCode : string, //결과코드
            resultMsg : string, // 결과 메세지
            errorMsg? : string
        }
    }
}

export type Sido = {
    orgCd : string, // 시도 코드
    orgdownNm : string //시도명
}

export const sidoGET = async (numOfRows=20, type='json') : Promise<Sido[]> => {
    const result = await axios.get<defaultResponse<Sido[]>>(`${endPoint}/sido?serviceKey=${encoding}&numOfRows=${numOfRows}&_type=${type}`)
    
    if (result.data.response) {
        return result.data.response.body.items.item;
    }
    else{
        const error = [{
            orgCd : "error", // 시도 코드
            orgdownNm : "서버 오류" //시도명
        }]
        return error
    }
}

export type Sigungu = {
    uprCd : string, // 상위 시도 코드
    orgCd : string, // 시군구 코드
    orgdownNm : string //시군구명
}

export const sigunguGET = async (upr_cd : string, type='json') : Promise<Sigungu[]> => {
    console.log(`sigungu update ${upr_cd}`);
    const result = await axios.get<defaultResponse<Sigungu[]>>(`${endPoint}/sigungu?serviceKey=${encoding}&upr_cd=${upr_cd}&_type=${type}`)
    if (result.data.response) {
        if(result.data.response.header.resultCode == "11") {
            const noData = [{
                uprCd : "nodata", // 상위 시도 코드
                orgCd : "nodata", // 시군구 코드
                orgdownNm : "데이터가 없습니다." //시군구명
            }]
            return noData;
        }
        return result.data.response.body.items.item;
    }
    else{
        const error = [{
            uprCd : "error", // 상위 시도 코드
            orgCd : "error", // 시군구 코드
            orgdownNm : "서버 오류" //시군구명
        }]
        return error;
    }
}

export type Kind = {
    kindCd : string, // 품종코드
    knm : string // 품종명
}

export const kindGET = async (up_kind_cd : string, type='json') : Promise<Kind[]> => {
    const result = await axios.get<defaultResponse<Kind[]>>(`${endPoint}/kind?serviceKey=${encoding}&up_kind_cd=${up_kind_cd}&_type=${type}`)
    if (result.data.response) {
        if(result.data.response.header.resultCode == "11") {
            const noData = [{
                kindCd : "nodata", // 상위 시도 코드
                knm : "nodata", // 시군구 코드
            }]
            return noData;
        }
        return result.data.response.body.items.item;
    }
    else{
        const error = [{
            kindCd : "error", // 상위 시도 코드
            knm : "error", // 시군구 코드
        }]
        return error;
    }
}