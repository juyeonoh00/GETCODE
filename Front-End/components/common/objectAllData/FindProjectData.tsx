import { GET } from "@/pages/api/axios";
import { useEffect } from "react";

/** ------------------------------------------------------------- */
/** 프로젝트 모집 전체 게시물 불러오기 GET 컴포넌트 */ //
/** ------------------------------------------------------------- */
// 사용되는 검색 항목 : 정렬(sort), 페이지수(page), 한페이지에 담기는 개수(size), 검색어(keyword), *검색 조건(subject), 기술 스택(techStack), 년도(year), 사용자ID(memberId)
/**[TODO]
 * [1] 
 */

/** GET 파라미터값(검색에사용), 데이터를 저장할 status */
interface FindProjectProps {
    params: {
        sort: string;
        pageNumber: number;
        size: number;
        keyword: string;
        subject: string;
        techStack: string[];
        year?: number|string;
        online: boolean|string;
        recruitment: boolean|string;
        siDo: string;
        guGun: string;
    }
    setObjectData?: any;
}

/** 프로젝트모집 전체 게시물 데이터 */
export const getObjectData = async({params,setObjectData}:FindProjectProps) => {

    const techStackQueryString = () => {
        let techStack = '';
        if(params.techStack.length > 0){
            techStack = params.techStack?.map((stack) => `techStack=${encodeURIComponent(stack)}`).join('&');
        }
        return techStack;
    }

    return await GET(`/api/projectrecruitment/all?year=${params.year}&keyword=${params.keyword}&size=${params.size}&page=${params.pageNumber}&sort=${params.sort}&subject=${params.subject}&${techStackQueryString()}&siDo=${params.siDo}&guGun=${params.guGun}&online=${params.online}&recruitment=${params.recruitment}`,{})
    .then((res)=>{
        setObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
    
}
