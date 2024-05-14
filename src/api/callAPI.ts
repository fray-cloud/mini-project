import { encoding, decoding } from "./key"
import axios, { AxiosResponse } from 'axios';
const endPoint=`http://apis.data.go.kr/1543061/abandonmentPublicSrvc`
const localEndPoint = `http://localhost:8000`
const frontPoint=`localhost:3000`


/**
 ** 공공데이터 포털 에러코드   
 * 1 : APPLICATION_ERROR   
 * 4 : HTTP_ERROR   
 * 12 : NO_OPENAPI_SERVICE_ERROR   
 * 20 : SERVICE_ACCESS_DENIED_ERROR   
 * 22 : LIMITED_NUMBER_OF_SERVICE_REQUESTS_EXCEEDS_ERROR   
 * 30 : SERVICE_KEY_IS_NOT_REGISTERED_ERROR   
 * 31 : DEADLINE_HAS_EXPIRED_ERROR   
 * 32 : UNREGISTERED_IP_ERROR   
 * 99 : UNKNOWN_ERROR   

 ** 제공기관 에러코드   
 * 01 : APPLICATION ERROR.   
 * 02 : DB_ERROR.   
 * 10 : INVALID REQUEST PARAMETER ERROR.   
 * 11 : NO MANDATORY REQUEST PARAMETERS ERROR.   
 * 12 : NO OPENAPI SERVICE ERROR.   
 * 13 : METHOD NOT ALLOWED ERROR.   
 * 30 : SERVICE KEY IS NOT REGISTERED ERROR.   
 * 32 : UNREGISTERED IP ERROR.    
*/
 
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

export const apiGET = async <T, U extends {}>(service : string, args : U) : Promise<T[]> => {
    const result = await axios.get<defaultResponse<T[]>>(`${localEndPoint}/${service}`, {params : args});
    return result.data.response.body.items.item;
}

export type Sido = {
    orgCd : string, // 시도 코드
    orgdownNm : string //시도명
}



// export const sidoGET = async (numOfRows=20, type='json') : Promise<Sido[]> => {
//     const result = await axios.get<defaultResponse<Sido[]>>(`${endPoint}/sido?serviceKey=${encoding}&numOfRows=${numOfRows}&_type=${type}`)
    
//     if (result.data.response) {
//         return result.data.response.body.items.item;
//     }
//     else{
//         const error = [{
//             orgCd : "error", // 시도 코드
//             orgdownNm : "서버 오류" //시도명
//         }]
//         return error
//     }
// }

export type Sigungu = {
    uprCd : string, // 상위 시도 코드
    orgCd : string, // 시군구 코드
    orgdownNm : string //시군구명
}

// export const sigunguGET = async (upr_cd : string, type='json') : Promise<Sigungu[]> => {
//     console.log(`sigungu update ${upr_cd}`);
//     const result = await axios.get<defaultResponse<Sigungu[]>>(`${endPoint}/sigungu?serviceKey=${encoding}&upr_cd=${upr_cd}&_type=${type}`)
//     if (result.data.response) {
//         if(result.data.response.header.resultCode == "11") {
//             const noData = [{
//                 uprCd : "nodata", // 상위 시도 코드
//                 orgCd : "nodata", // 시군구 코드
//                 orgdownNm : "데이터가 없습니다." //시군구명
//             }]
//             return noData;
//         }
//         return result.data.response.body.items.item;
//     }
//     else{
//         const error = [{
//             uprCd : "error", // 상위 시도 코드
//             orgCd : "error", // 시군구 코드
//             orgdownNm : "서버 오류" //시군구명
//         }]
//         return error;
//     }
// }

export type Kind = {
    kindCd : string, // 품종코드
    knm : string // 품종명
}

// export const kindGET = async (up_kind_cd : string, type='json') : Promise<Kind[]> => {
//     const result = await axios.get<defaultResponse<Kind[]>>(`${endPoint}/kind?serviceKey=${encoding}&up_kind_cd=${up_kind_cd}&_type=${type}`)
//     if (result.data.response) {
//         if(result.data.response.header.resultCode == "11") {
//             const noData = [{
//                 kindCd : "nodata",  // 품종코드
//                 knm : "nodata", // 품종명
//             }]
//             return noData;
//         }
//         return result.data.response.body.items.item;
//     }
//     else{
//         const error = [{
//             kindCd : "error", // 상위 시도 코드
//             knm : "error", // 시군구 코드
//         }]
//         return error;
//     }
// }


export type AbandonmentPublic = {
    desertionNo : string, // 유기번호
    filename : string, // 썸네일 이미지(링크)
    happenDt : string, // 접수일 YYYYMMDD
    happenPlace : string, // 발견장소
    kindCd : string, // 품종
    colorCd : string, // 색상
    age : string, // 나이
    weight : string, // 체중
    noticeNo : string, // 공고번호
    noticeSdt : string, // 공고 시작일 YYYYMMDD
    noticeEdt : string, // 공고 종료일 YYYYMMDD
    popfile : string, // 이미지(링크)
    processState : string, // 상태
    sexCd : "M" | "F" | "Q", // 성별 M : 남, F : 여, Q : 미상
    neuterYn : "Y" | "N" | "U", // 중성화 여부 Y : 예, N : 아니오, U : 미상
    specialMark : string, // 특징
    careNm : string, // 보호소 이름
    careTel : string, // 보호소 전화번호
    careAddr : string, // 보호장소
    orgNm : string, // 관할기관
    chargeNm : string, // 담당자
    officetel : string, // 담당자 연락처
    noticeComment : string, // 특이사항
}

// export const abandonmentPublicGET = async(
//     bgnde="", // 유기날짜 시작일
//     endde="", // 유기날짜 종료일
//     upkind="", // 축종코드
//     kind="", // 품종코드
//     upr_cd="", // 시도코드
//     org_cd="", // 시군구코드
//     care_reg_no="", // 보호소번호
//     state="", // 상태
//     neuter_yn="", // 중성화여부
//     pageNo="", // 페이지 번호
//     numOfRows="", // 페이지당 보여줄 갯수
//     type="json"
// ) : Promise<AbandonmentPublic[]> => {
//     const result = await axios.get<defaultResponse<AbandonmentPublic[]>>(
//         `${endPoint}/abandonmentPublic?serviceKey=${encoding}&bgnde=${bgnde}&endde=${endde}&upkind=${upkind}&kind=${kind}&upr_cd=${upr_cd}&org_cd=${org_cd}&care_reg_no=${care_reg_no}&state=${state}&neuter_yn=${neuter_yn}&pageNo=${pageNo}&numOfRows=${numOfRows}&_type=${type}`
//     )
// }