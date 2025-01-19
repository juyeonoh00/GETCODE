import styled from "styled-components";
import SearchInput from "@/components/common/search/SearchInput";
import { media } from "@/styles/mediaQuery";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import Alert from '@/components/common/notification/Alert';

/** ------------------------------------------------------------- */
/** 게시물 목록 페이지 레이아웃 재사용 폼 */ //
/** ------------------------------------------------------------- */
// 페이지타이틀,소타이틀,검색단,총NN개,정렬(최신순/과거순/인기순),게시물목록,글쓰기버튼
/**[TODO]
 * [1] 
 */

// 게시물 목록 페이지 레이아웃에 필요한 Props
interface MainContentsLayoutProps {
    pageName: string;
    title: string;
    subTitle?: string;
    sumTitle?: string;
    children?: any;
    detailSearchSelectedData: any;
    id?:any;
}

interface Params {
    year?: string;
    keyword?: string;
    size?: number;
    pageNumber?: number;
    sort?: string;
    subjeck?: string;
    techStack?: string[];
}

/** 프로젝트, 프로젝트모집, 스터디모집의 메인 페이지 레이아웃 컴포넌트*/

const MainContantsLayout = ({pageName, title, subTitle, sumTitle, children, detailSearchSelectedData, id}:MainContentsLayoutProps) => {
    const router = useRouter();
    const objectListRef = useRef<HTMLDivElement>(null);

    /** 로그인Alert OnOff */
    const [isLoginAlertOn, setIsLoginAlertOn] = useState<boolean>(false);

    /** 게시물 데이터를 불러 올 모듈 이름 */
    const [moduleName, setModuleName] = useState<string>('');

    /** 정렬 구성(최신순,과거순,좋아요순) */
    const sortArr:any [] = ["최신순","과거순","좋아요순"];

    /** 페이지 별 게시물 폼, 데이터 */
    const [objectData, setObjectData] = useState<any[]>([]);
    const [objectForm, setObjectForm] = useState(null);

    /** 게시물 전체 목록 불러오기 GET API 파라미터 데이터 리스트 */
    const [keyword, setKeyword] = useState<string>('');//검색키워드
    const [pageNumber, setPageNumber] = useState<number>(1);//페이지
    const [size, setSize] = useState<number>(999);//페이지객체수
    const [sort, setSort] = useState<string>('latestOrder');//정렬
    const [techStack, setTechStack] = useState<string[]>([]);//기술스택
    const [subject, setSubject] = useState<string>('');//주제
    const [field, setField] = useState<string>('');//스터디 분야
    const [online, setOnline] = useState<boolean|string>('');//온라인여부
    const [recruitment, setRecruitment] = useState<boolean|string>('');//모집여부
    const [siDo, setSiDo] = useState<string>('');//시도
    const [guGun, setGuGun] = useState<string>('');//구군
    const [year, setYear] = useState<string>('');//연도
    const [category, setCategory] = useState<string>('');//연도

    /** 페이지 별 게시물 전체 목록 불러오기 GET 파라미터 SET*/
    const [params, setParams] = useState<Params>();
    const projectParams = {year, keyword, size, pageNumber, sort, subject, techStack};
    const findProjectParams = {year, keyword, size, pageNumber, sort, subject, techStack, online, siDo, guGun, recruitment};
    const findStudyParams = {year, keyword, size, pageNumber, sort, siDo, guGun, recruitment, online, field};
    const communityParams = {year,keyword,size, pageNumber, sort, category};

    /** 상세 검색 항목 SET */
    

    /** 토탈(총 N..N개 프로젝트) 함수 작성 예정*/

    /** 정렬(최신순, 과거순, 좋아요순) */
    const handleSort = (sortName:string) => {
        if(sortName === '최신순'){
            setSort('latestOrder');
        }
        if(sortName === '과거순'){
            setSort('pastOrder');
        }
        if(sortName === '좋아요순'){
            setSort('likeCnt');
        }
    } 

    /** 페이지 별 데이터 불러오기 함수 */
    const getData = async() => {
            try{
                const getModule = await import(`@/components/common/objectAllData/${moduleName}`);
                await getModule.getObjectData({
                    params,setObjectData
                });
            }
            catch (error){
                console.error(error);
            }
    };

    /** 상세 검색 적용 */

    /** 페이지 별 객체 폼 불러오기 */
    useEffect(() => {
        import(`@/components/${pageName}/ObjectForm`)
        .then(module => {pageName=='project'?
            setObjectForm(()=>module.ObjectForm)
        : setObjectForm(()=>module.default)
        })
        .catch(error => console.error(error))
    },[pageName, setObjectData]);

    /** 페이지 별 ModuleName,ParamsSet 설정 */
    useEffect(() => {
        let moduleName = '';
        switch (pageName){
            case 'project':
                moduleName = 'ProjectData';
                setParams(projectParams);
                break;
            case 'findProject':
                moduleName = 'FindProjectData'
                setParams(findProjectParams);
                break;
            case 'findStudy':
                moduleName = 'FindStudyData'
                setParams(findStudyParams);
                break;
            case 'community':
                moduleName = 'CommunityData'
                setParams(communityParams);
                break;
            default:
                return;
        }
        setModuleName(moduleName);
        setParams((prevParams: any) => ({ ...prevParams, sort}));

    },[pageName, sort, year, keyword, size, pageNumber, subject, techStack, online, recruitment, siDo, guGun, field]);

    /** 페이지 별 데이터 불러오기, 정렬 상태 반영 */
    useEffect(()=>{
        if(!moduleName) return;
        getData();
    },[moduleName,params?.sort]);

    useEffect(()=>{
        if (detailSearchSelectedData && detailSearchSelectedData.length > 0) {
            const data = detailSearchSelectedData[0];
            
            setYear(data?.year === '전체' ? '' : data?.year || '');
            setSubject(data?.subject === '전체' ? '' : data?.subject || '');
            setTechStack(data?.stack === '전체' ? [] : data?.stack || []);
            setField(data?.field === '전체' ? [] : data?.field || []);
            setOnline(data?.online === '전체' ? '' : data?.online===true?true:data?.online===false?false:'');
            setRecruitment(data?.recruitment === '전체' ? '' : data?.recruitment===true?true: data?.recruitment===false?false: '');
            setSiDo(data?.siDo === '시/도 선택' ? '' : data?.siDo || '');
            setGuGun(data?.guGun === '구/군 선택' ? '' : data?.guGun || '');

        }
    },[detailSearchSelectedData]);

    useEffect(() => {
        // console.log(detailSearchSelectedData,'SearchSelected');
        console.log(objectData,'objectData');
    },[]);

    return(
        <BackLayout>
            <Layout>
                <Title>
                    {`GETCODE ${title}`}
                    {subTitle?
                        <div id="subTitle">{subTitle}</div>
                    :   <></>
                    }
                </Title>
                <SearchInput setKeyword={setKeyword} searchButtonFC={getData}>
                    <Search>
                        <div>
                            {children}
                        </div>
                        <SearchButton onClick={getData}>검색하기</SearchButton>
                    </Search>
                </SearchInput>
                
                <Contents>
                    <TotalSortWrapper>
                        {subTitle?
                            <Total>{`총 ${objectData?.length}개 ${sumTitle}`}</Total>
                        :   <Total>{`총 ${objectData?.length}개 ${title}`}</Total>
                        }
                        <Sort>
                            {sortArr.map((i:any,idx:number)=>(
                                <span key={idx} onClick={()=>handleSort(i)}>{i}</span>
                            ))}
                        </Sort>
                    </TotalSortWrapper>
                    <ObjectList ref={objectListRef} pageName={pageName}>
                        {Array.isArray(objectData)&&objectData?.map((i:any,idx:number)=>(
                            objectForm ? React.createElement(objectForm, {
                                key:idx, data:i, setIsLoginAlertOn:setIsLoginAlertOn
                            }) : null
                        ))}
                    </ObjectList>
                </Contents>
                <WritingButton onClick={()=>router.push(`/${pageName}/post`)}>글쓰기</WritingButton>
            </Layout>
            {isLoginAlertOn?
                <Alert 
                    setIsAlertOn={setIsLoginAlertOn}
                    notice={<>{'로그인이 필요한 서비스입니다.'}<br/>{'로그인 하시겠습니까?'}</>}
                    yesButtonFC={()=>router.push('/auth/login')}
                    noButtonFC={()=>setIsLoginAlertOn(false)}
                />
            :null}
        </BackLayout>
    )
}
export default MainContantsLayout;

const BackLayout = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    padding: 55px 0;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 10px; */
    width: 1000px;
    overflow: hidden;

    ${media.tablet || media.mobile}{
        width: 100%;
        padding: 0 20px;
        gap: 20px;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    color: #ff4b13;
    font-weight: 700;
    font-size: 1.125rem;

    & #subTitle{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 15px;

        border-radius: 16px;
        background-color: #FF993A;

        color: #fff;
        font-size: 16px;
        font-weight: 500;
    }
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 100%;
`;

const TotalSortWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 100%;
`;

const Total = styled.div`
    display: flex;
`;
const Sort = styled.div`
    display: flex;
    gap: 10px;

    & > span{
        cursor: pointer;
    }
`;

const ObjectList = styled.div<{pageName:string}>`
    display: flex;
    flex-direction: ${({pageName})=>(pageName==='project'?'unset':'column')};
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

    ${media.tablet || media.mobile}{
        justify-content: ${({pageName})=>(pageName==='project'?'center':'unset')};
    }
`;

const WritingButton = styled.div`
    display: flex;
    position: fixed;
    right: 20px;
    bottom: 30px;
    justify-content: center;
    align-items: center;
    width: 70px;
    aspect-ratio: 1/1;

    background-color: #FF4b13;
    border-radius: 100px;

    color: #fff;
    font-weight: 700;

    cursor: pointer;
`;

const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    width: 100%;
`;
const SearchButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 35px;

    background-color: #FF993A;
    border-radius: 30px;

    cursor: pointer;
`;