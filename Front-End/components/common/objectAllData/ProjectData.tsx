import { GET } from "@/pages/api/axios";
import { useState } from "react";

/** ------------------------------------------------------------- */
/** [프로젝트 전체 게시물] 불러오기 GET 컴포넌트 */
/** ------------------------------------------------------------- */
// 1. 프로젝트 전체 게시물 데이터
// 2. 내가 작성한 프로젝트 전체 게시물 데이터
// 3. 내가 찜한 프로젝트 전체 게시물 데이터

/** 사용되는 검색 항목 : 
 * 정렬(sort), 페이지수(pageNumber), 한페이지에 담기는 개수(size), 
 * 검색어(keyword), *주제(subject), 기술 스택(techStack), 년도(year)*/

/** GET 파라미터값, 데이터를 저장할 status */
interface ProjectProps {
    params: {
        sort: string;
        pageNumber: number;
        size: number;
        keyword: string;
        subject: string;
        techStack: [string];
        year: number|string;
        page: number;
    }
    setObjectData?: any;
}

/** ------------------------------------------------------------- */
/** 프로젝트 전체 게시물 데이터 */
/** ------------------------------------------------------------- */
export const getObjectData = async ({params,setObjectData}:ProjectProps) => {

    const techStackQueryString = () => {
        let techStack = '';
        if(params.techStack.length > 0){
            techStack = params.techStack?.map((stack) => `techStack=${encodeURIComponent(stack)}`).join('&');
        }
        return techStack;
    }
    // console.log(params,'params');
    
    return await GET(`/api/project/all?year=${params.year}&keyword=${params.keyword}&pageNumber=${params.pageNumber}&size=${params.size}&sort=${params.sort}&subject=${params.subject}&${techStackQueryString()}`,{})
    .then((res)=>{
        setObjectData(res.data);
        // console.log(res.data,'res.data-ObjectData');
    })
    .catch((err)=>{console.error(err)});
}

/** ------------------------------------------------------------- */
/** 내가 작성한 프로젝트 게시물 전체 데이터 */
/** ------------------------------------------------------------- */
export const getMyWriteObjectData = async ({params,setObjectData}:ProjectProps) => {
    return await GET(`/api/mypage/my/project?page=${params.page}&size=${params.size}`)
    .then((res)=>{
        setObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}

/** ------------------------------------------------------------- */
/** 내가 찜한 프로젝트 게시물 전체 데이터 */
/** ------------------------------------------------------------- */
export const getMyWishObjectData = async ({params,setObjectData}:ProjectProps) => {

    
    
    return await GET(`/api/mypageNumber/my/project/wish?pageNumber=${params.pageNumber}&size=${params.size}`)
    .then((res)=>{
        setObjectData(res.data);
    })
    .catch((err)=>{console.error(err)});
}