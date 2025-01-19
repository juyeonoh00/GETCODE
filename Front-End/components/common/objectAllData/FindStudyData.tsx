import { GET } from "@/pages/api/axios";

/** ------------------------------------------------------------- */
/** [스터디 모집 전체 게시물] 불러오기 GET 컴포넌트 */
/** ------------------------------------------------------------- */
// 1. 스터디 모집 전체 게시물 데이터
// 2. 내가 작성한 스터디 모집 전체 게시물 데이터
// 3. 내가 찜한 스터디 모집 전체 게시물 데이터

/** GET 파라미터값(검색에사용), 데이터를 저장할 status */
//[TODO]memberId 필요하지않나?
interface FindStudyProps{
    params: {
        pageNumber: number; //필수값
        size: number; //필수값
        keyword: string;
        sort: string;
        siDo: string;
        guGun: string;
        recruitment: boolean|'';
        online: boolean|'';
        year: number|string;
        field: string[]; //스터디 분야(프론트에서 넣어서 보냄 like 기술스택,주제)
    }
    setObjectData?: any;
}

/** ------------------------------------------------------------- */
/** 스터디 모집 전체 게시물 데이터 */
/** ------------------------------------------------------------- */
export const getObjectData = async({params,setObjectData}:FindStudyProps) => {

    const subjectQueryString = () => {
        let field = '';
        if(params.field.length > 0){
            field = params.field?.map((stack) => `techStack=${encodeURIComponent(stack)}`).join('&');
        }
        return field;
    }

    return await GET(`/api/search/studies?page=${params.pageNumber}&size=${5}&keyword=${params.keyword}&sort=${params.sort}&siDo=${params.siDo}&guGun=${params.guGun}&recruitment=${true}&online=${params.online}&year=${params.year}&field=${subjectQueryString()}`,{})
    .then((res)=>{
        setObjectData(res.data);
        // console.log(res);
    })
    .catch((err)=>{console.error(err)});

    // const createQueryString = () => {
    //     const query:string[] = [];
    //     Object.keys(params).forEach(key => {
    //         const value = params[key as keyof typeof params];
    //         if (value || value === 0) {
    //             if (key === 'field') {
    //                 const filedQuery = subjectQueryString();
    //                 if (filedQuery) {
    //                     query.push(filedQuery);
    //                 }
    //             } else {
    //                 query.push(`${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`);
    //             }
    //         }
    //     });
    //     return query.join('&');
    // }
    
    // return await GET(`/api/search/studies?page=${params.pageNumber}&${createQueryString()}`)
    // .then((res)=>{
    //     setObjectData(res.data);
    //     // console.log(res);
    // })
    // .catch((err)=>{console.error(err)});
}

/** ------------------------------------------------------------- */
/** 내가 작성한 스터디 모집 게시물 전체 데이터 */
/** ------------------------------------------------------------- */
export const getMyWriteObjectData = async ({params,setObjectData}:FindStudyProps) => {
    
    return await GET(`/api/mypage/studies`)
    .then((res)=>{
        setObjectData(res.data);
        console.log(res.data,'스터디모집게시물my');
    })
    .catch((err)=>{console.error(err)});
}

/** ------------------------------------------------------------- */
/** 내가 찜한 스터디 모집 게시물 전체 데이터 */
/** ------------------------------------------------------------- */
export const getMyWishObjectData = async ({params,setObjectData}:FindStudyProps) => {
    
    return await GET(`/`,{
        page:1,
        siae:999
    })
    .then((res)=>{
        setObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}