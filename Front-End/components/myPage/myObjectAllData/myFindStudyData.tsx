import { GET } from "@/pages/api/axios";

/** ------------------------------------------------------------- */
/** 내가 작성|찜한 스터디 모집 게시물 목록 데이터 컴포넌트 */ //
/** ------------------------------------------------------------- */
// 사용되는 검색 항목 : 
/**[TODO]
 */

/** GET 파라미터값(검색에사용), 데이터를 저장할 status */
//[TODO]memberId 필요하지않나?
interface FindStudyProps{
    params: {
        pageNumber: number; //필수값
        keyword: string;
        region: string;
        recruitment: boolean;
        online: boolean;
        year: number;
        subjects: string[];
        criteria: string;
    }
    setMyObjectData?: any;
}

/** ------------------------------------------------------------- */
/** 내가 작성한 스터디 모집 게시물 전체 데이터 */
/** ------------------------------------------------------------- */

export const getMyWriteObjectData = async ({params,setMyObjectData}:FindStudyProps) => {
    
    return await GET(`/api/mypage/studies`)
    .then((res)=>{
        setMyObjectData(res.data);
        console.log(res.data,'스터디모집게시물my');
    })
    .catch((err)=>{console.error(err)});
}

/** ------------------------------------------------------------- */
/** 내가 찜한 스터디 모집 게시물 전체 데이터 */
/** ------------------------------------------------------------- */

export const getMyWishObjectData = async ({params,setMyObjectData}:FindStudyProps) => {
    
    return await GET(`/`,{
        page:1,
        siae:999
    })
    .then((res)=>{
        setMyObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}