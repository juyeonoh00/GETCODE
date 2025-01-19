import { DownWardToggleSVG } from "@/public/SVG/profile";
import { media } from "@/styles/mediaQuery";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const MyPostsPage = () => {

    /** 로그인Alert OnOff */
    const [isLoginAlertOn, setIsLoginAlertOn] = useState<boolean>(false);

    /** 나의 작성 게시글 카테고리, 카테고리 토글 OnOff, 현재 선택된 카테고리 */
    const postCategory:any[] = ['프로젝트','프로젝트 모집','스터디 모집','커뮤니티'];
    const [isToggleOn, setIsToggleOn] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('프로젝트');

    // const sortArr:any [] = ["최신순","과거순","좋아요순"]; //정렬은 개발 제외하기로 함

    /** 게시물 데이터를 불러 올 모듈 이름, 객체 폼을 불러 올 페이지 이름 */
    const [moduleName, setModuleName] = useState<string>('ProjectData');
    const [pageName, setPageName] = useState<string>('project');

    /** 카테고리 별 게시물 폼, 데이터 */
    const [objectData, setObjectData] = useState<any[]>([]);
    const [objectForm, setobjectForm] = useState(null);

    /** 게시물 불러오기 파라미터 (쿼리스트링) */
    const page = 1;
    const size = 999;

    /** 카테고리 별 게시물 전체 목록 불러오기 파라미터 SET */
    const [params, setParams] = useState<any>({page:page, size:size});
    const projectParams = {page, size};
    const findProjectParams = {page, size};
    const findStudyParams = {page, size};
    const communityParams = {};

    /** 카테고리 별 ModuleName, ParamsSet 설정 */
    useEffect(() => {
        const categorySettings = () => {
            let moduleName = '';
            switch (selectedCategory){
                case '프로젝트':
                    moduleName = 'ProjectData';
                    setParams(projectParams);
                    setPageName('project');
                    break;
                case '프로젝트 모집':
                    moduleName = 'FindProjectData';
                    setParams(findProjectParams);
                    setPageName('findProject');
                    break;
                case '스터디 모집':
                    moduleName = 'FindStudyData';
                    setParams(findStudyParams);
                    setPageName('findStudy');
                    break;
                case '커뮤니티':
                    moduleName = 'CommunityData';
                    setParams(communityParams);
                    setPageName('community');
                    break;
                default:
                    return;
            }
            setModuleName(moduleName);
        }
        categorySettings();
    },[selectedCategory]);

    /** 카테고리 별 객체 폼 불러오기 */
    useEffect(() => {
        const getObjectForm = () => {
            import(`@/components/${pageName}/ObjectForm`)
            .then(module => {
                pageName=='project'?setobjectForm(()=>module.ObjectForm):setobjectForm(()=>module.default)
            })
            .catch(error=>console.error(error));
        }
        getObjectForm();
    },[pageName, setObjectData]);

    /** 카테고리 별 데이터 불러오기 */
    useEffect(()=>{
        const getData = async() => {
            try{
                const getModule = await import(`@/components/common/objectAllData/${moduleName}`);
                await getModule.getMyWriteObjectData({
                    params, setObjectData
                })
            }
            catch (error){
                console.error(error);
            }
        }
        getData();
    },[setSelectedCategory,moduleName])

    useEffect(()=>{
        // console.log(moduleName,'moduleName');
    },[selectedCategory]);

    useEffect(()=>{
        console.log(objectData,'objectDataMy');
    },[]);


    return(
        <BackLayout>
            <Layout>
                <Wrapper>
                    <Title>나의 작성 게시글</Title>
                    <PostsToggle onClick={()=>setIsToggleOn(!isToggleOn)}>
                        <span id="selectedToggle">{selectedCategory}</span>
                        <DownWardToggleSVG/>
                        {isToggleOn?
                            <ToggleList>
                                {postCategory.map((i:any, idx:number)=>(
                                    <Toggle key={idx} onClick={()=>setSelectedCategory(i)}>{i}</Toggle>
                                ))
                                }
                            </ToggleList>
                        :   <></>
                        }
                    </PostsToggle>
                </Wrapper>
                <TotalSortWrapper>
                    <Total>{`총 ${objectData?.length}개 ${selectedCategory}`}</Total>
                </TotalSortWrapper>
                <ObjectList selectedCategory={selectedCategory}>
                    {Array.isArray(objectData)&&objectData?.map((i:any,idx:number)=>(
                        objectForm ? React.createElement(objectForm, {
                            key:idx, data:i, setIsLoginAlertOn:setIsLoginAlertOn
                        }) : null
                    ))}
                </ObjectList>
            </Layout>
        </BackLayout>
    )
}
export default MyPostsPage;

const D = styled.div``;

const BackLayout = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
    min-height: 100vh;
    width: 100%;

    ${media.mobile || media.tablet}{
        padding: 50px 20px;
    }
`;
const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    height: 100%;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-bottom: 100px;
    width: 100%;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const PostsToggle = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    width: 290px;
    height: 30px;
    padding: 2px 10px 0;

    background-color: #1f1f1f;
    border-radius: 6px;

    color: #fff;

    cursor: pointer;
`;
const ToggleList = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    top: 32px;
    flex-direction: column;
    gap: 1px;
    width: 100%;
`;
const Toggle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 2px 10px 0;

    background-color: #535353;
    border-radius: 6px;

    cursor: pointer;
`;

const TotalSortWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const Total = styled.div`
    display: flex;
`;
const Sort = styled.div`
    display: flex;
    gap: 10px;
`;

const ObjectList = styled.div<{selectedCategory:string}>`
    display: flex;
    flex-direction: ${({selectedCategory})=>(selectedCategory==='프로젝트'?'unset':'column')};
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

    ${media.tablet || media.mobile}{
        justify-content: ${({selectedCategory})=>(selectedCategory==='프로젝트'?'center':'unset')};
    }
`;