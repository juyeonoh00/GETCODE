import { GET } from "@/pages/api/axios";

interface ProjectProps {
    params: {
        sort: string;
        pageNumber: number;
        size: number;
        keyword: string;
        year: number|string;
        page: number;
        category: string;
    }
    setObjectData?: any;
}

/** ------------------------------------------------------------- */
/** 커뮤니티 전체 게시물 데이터 */
/** ------------------------------------------------------------- */
export const getObjectData = async ({params,setObjectData}:ProjectProps) => {
    
    return await GET(`/api/project/all?year=${params.year}&keyword=${params.keyword}&pageNumber=${params.pageNumber}&size=${params.size}&sort=${params.sort}&category=${params.category}`,{})
    .then((res)=>{
        setObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}