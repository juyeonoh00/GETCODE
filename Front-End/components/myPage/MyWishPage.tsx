import { DownWardToggleSVG } from "@/public/SVG/profile";
import { media } from "@/styles/mediaQuery";
import { useState } from "react";
import styled from "styled-components";

const MyPostsPage = () => {

    const data:any[] = ['프로젝트','프로젝트 모집','스터디 모집','커뮤니티'];
    const [isToggleOn, setIsToggleOn] = useState<boolean>(false);
    const [selectedToggle, setSelectedToggle] = useState<string>('프로젝트');
    const sortArr:any [] = ["최신순","과거순","좋아요순"];


    return(
        <BackLayout>
            <Layout>
                <Wrapper>
                    <Title>나의 찜 게시글</Title>
                    <PostsToggle onClick={()=>setIsToggleOn(!isToggleOn)}>
                        <span id="selectedToggle">{selectedToggle}</span>
                        <DownWardToggleSVG/>
                        {isToggleOn?
                            <ToggleList>
                                {data.map((i:any, idx:number)=>(
                                    <Toggle key={idx} onClick={()=>setSelectedToggle(i)}>{i}</Toggle>
                                ))
                                }
                            </ToggleList>
                        :   <></>
                        }
                    </PostsToggle>
                </Wrapper>
                <TotalSortWrapper>
                            <Total>{`총 ${data?.length}개 ${selectedToggle}`}</Total>
                            <Sort>
                                {sortArr.map((i:any,idx:number)=>(
                                    <span key={idx}>{i}</span>
                                ))}
                            </Sort>
                </TotalSortWrapper>
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
    height: 100vh;
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