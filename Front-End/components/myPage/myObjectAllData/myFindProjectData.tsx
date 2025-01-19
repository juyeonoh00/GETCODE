import { GET } from "@/pages/api/axios";

/** ------------------------------------------------------------- */
/** 내가 작성|찜한 프로젝트 모집 게시물 목록 데이터 컴포넌트 */ //
/** ------------------------------------------------------------- */
// 사용되는 검색 항목 : 
/**[TODO]
 */

/** GET 파라미터값(검색에사용), 데이터를 저장할 status */
//[TODO] year제거 & 모집파트,모집여부추가해야함
interface FindProjectProps {
    params: {
        sort: string;
        page: number;
        size: number;
        keyword: string;
        subject: string;
        techStack: [];
        year?: number;
        recruitment?: string;
        part?: string;
        memberId?: number;
    }
    setMyObjectData?: any;
}


/** ------------------------------------------------------------- */
/** 내가 작성한 프로젝트 모집 게시물 전체 데이터 */
/** ------------------------------------------------------------- */

export const getMyWriteObjectData = async ({params,setMyObjectData}:FindProjectProps) => {
    
    return await GET(`/api/mypage/my/recruit`)
    .then((res)=>{
        setMyObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}

/** ------------------------------------------------------------- */
/** 내가 찜한 프로젝트 모집 게시물 전체 데이터 */
/** ------------------------------------------------------------- */

export const getMyWishObjectData = async ({params,setMyObjectData}:FindProjectProps) => {
    
    return await GET(`/api/mypage/my/recruit/wish`,{
        page:1,
        siae:999
    })
    .then((res)=>{
        setMyObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}