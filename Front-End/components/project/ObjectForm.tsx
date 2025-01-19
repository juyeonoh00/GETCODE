import { POST } from '@/pages/api/axios';
import { HartOnSVG, HartOffSVG, WishOnSVG, WishOffSVG, ViewCountSVG } from '@/public/SVG/reactionCount';
import { media } from '@/styles/mediaQuery';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

/** ------------------------------------------------------------- */
/** 프로젝트 게시물, 인기 게시물 객체 폼 */
/** ------------------------------------------------------------- */

interface ObjectFormProps{
    style?:any;
    data?: any;
    setIsLoginAlertOn?: any;
}

/** 불러온 Respons 데이터 형식 참고 : 프로젝트 데이터 */
/**[TODO: 썸네일(이미지) 데이터 누락됨 - 요청중] */
interface ProjectData{
    projectId: number;
    title: string;
    introduction: string;
    views: number;
    likeCnt: number;
    createDate: string;
    modifiedDate: string;
    techStacks: [{
        id: number;
        techStack: string;
    }];
    subject: string;
    memberNickName: string;
    checkLike: boolean|null;
    checkWish: boolean|null;
}
/** 불러온 Respons 데이터 형식 참고 : 내가 작성한 프로젝트 데이터 */
//[TODO: My프로젝트데이터와 프로젝트데이터 변수 통일되었는지 비교용 작성 ]
interface MyProjectData{
    projectId: number;
    title: string;
    introduction: string;
    views: number;
    likeCnt: number;
    checkLike: boolean|null;
    checkWish: boolean|null;
    dateTime: string;
    imageUrl: null; //정확한 형식 무엇인지?
    memberNickName: string;
    projectSubjects: [{
        id: number;
        subject: string;
    }];
    techStackList: [{
        id: number;
        techStack: string;
    }];
}

/** ------------------------------------------------------------- */
/** 프로젝트 게시물 객체 폼 */
/** ------------------------------------------------------------- */
export const ObjectForm = ({style, data, setIsLoginAlertOn}:ObjectFormProps) => {

    /** 좋아요,찜하기 버튼 클릭 상태 */
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isWishOn, setIsWishOn] = useState<boolean>(false);

    const subject:any [] = data?.subjects;

    /** 좋아요 버튼 클릭 이벤트 */
    const handleHeartClick = async() => {
        setIsHartOn(!isHartOn);
        await POST(`/api/project/${data.projectId}/like`)
        .then((res)=>{
        })
        .catch((err)=>{
            //사용자가존재하지않습니다 메세지일 경우 로그인할 것인지 묻는 alert창 띄우기
            if(err.response.data.message.includes('사용자')){
                setIsLoginAlertOn(true);
                setIsHartOn(!isHartOn);
            }
        });
    }
    /** 찜하기 버튼 클릭 이벤트 */
    const handleWishClick = async() => {
        setIsWishOn(!isWishOn);
        await POST(`/api/project/${data.projectId}/wish`)
        .then((res)=>{
            //[TODO: res.data 값 확인, boolean값으로 조건 설정]
            //[TODO: catch err 부분에서 사용자가 존재하지 않습니다 메세지의 경우 res로 전환 가능성]
            // if(res.data==='프로젝트 좋아요 성공'){
            //     setIsWishOn(true);
            // }if(res.data==='프로젝트 좋아요 삭제 성공'){
            //     setIsWishOn(false);
            // }
        })
        .catch((err)=>{
            //사용자가존재하지않습니다 메세지일 경우 로그인할 것인지 묻는 alert창 띄우기
            if(err.response.data.message.includes('사용자')){
                setIsLoginAlertOn(true);
                setIsWishOn(!isWishOn);

            }
        });
    }

    /** 처음 불러올 때 좋아요,찜하기 선택 상태 */
    useEffect(()=>{
        if(data.checkLike===true){
            setIsHartOn(true);
        }
        if(data.checkLike===false||null){
            setIsHartOn(false);
        }
        if(data.checkWish===true){
            setIsWishOn(true);
        }
        if(data.checkWish===false||null){
            setIsWishOn(false);
        }
    },[]);

    useEffect(()=>{
        // console.log(data,'projectData');
    },[]);

    return(
        <Layout style={style}>
            <Thumbnail>
                <Img src={data.imageUrl?.imageUrl}></Img>
                <ReactionCount>
                    <Wrapper onClick={()=>handleHeartClick()}>
                        {isHartOn?<HartOnSVG size="30"/>:<HartOffSVG size="30"/>}
                        <span>{data.likeCnt}</span>
                    </Wrapper>
                    <Wrapper>
                        <ViewCountSVG/>
                        <span>{data.views}</span>
                    </Wrapper>
                    <Wrapper id='Wish' onClick={handleWishClick}>
                        {isWishOn?<WishOnSVG/>:<WishOffSVG/>}
                    </Wrapper>
                </ReactionCount>
            </Thumbnail>
            <Content>
                <Title>
                    <span>{data.title}</span>
                </Title>
                <Info>
                    <Intro>
                        {data.introduction}
                    </Intro>
                    <Topic>{`주제 : ${data?.subject}`}</Topic>
                    <Stack>
                        {data.techStacks?.map((i:any,idx:number)=>(
                            <StackName key={idx}>{i.techStack}</StackName>
                        ))}
                    </Stack>
                    <Create><div>{`작성자 : ${data.memberNickName}`}</div><div>{`작성일 : ${data.createDate}`}</div></Create>
                </Info>
            </Content>
              
        </Layout>
    )
}

/** ------------------------------------------------------------- */
/** 인기 게시물 객체 폼 */
/** ------------------------------------------------------------- */
export const PopularityObjectForm = ({style, data}:ObjectFormProps) => {
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isWishOn, setIsWishOn] = useState<boolean>(false);
    const arr:string [] = data?.technologyStack;

    useEffect(()=>{
        setIsWishOn(data.Wishs);
    },[]);

    return(
        <Layout style={style}>
            <Thumbnail>
                <Img></Img>
            </Thumbnail>
            <ReactionCount>
                    <Wrapper onClick={()=>setIsHartOn(!isHartOn)}>
                        {isHartOn?<HartOnSVG size="30"/>:<HartOffSVG size="30"/>}
                        <span>{data.likes}</span>
                    </Wrapper>
                    <Wrapper>
                        <ViewCountSVG/>
                        <span>{data.views}</span>
                    </Wrapper>
                    <Wrapper id='Wish' onClick={()=>setIsWishOn(!isWishOn)}>
                        {isWishOn?<WishOnSVG/>:<WishOffSVG/>}
                    </Wrapper>
            </ReactionCount>
            <Content>
                <Title>
                    <span>{data.title}</span>
                </Title>
                <Info>
                    <Intro>
                        {data.introduction}
                    </Intro>
                    <Topic>{`주제 : ${data.subject}`}</Topic>
                    <Stack>
                        {data.techStackList?.map((i:any,idx:number)=>(
                            <StackName key={idx}>{i}</StackName>
                        ))}
                    </Stack>
                    <Create>
                        <div>{`작성자 : ${data.writer}`}</div>
                        <div>{`작성일 : ${data.createDate}`}</div>
                    </Create>
                </Info>
            </Content>
        </Layout>
    )
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 320px;
    padding: 0 10px;
    padding-bottom: 30px;

    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));

    ${media.mobile || media.tablet}{
        /* width: 160px; */
        width: 50%;
        height: 250px;
    filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.25));

    }
`;

const Thumbnail = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    flex: 1;
    overflow: hidden;

    background-color: #777777;
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const ReactionCount = styled.div`
    display: flex;
    position: absolute;
    gap: 15px;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    bottom: 0px;
    width: 100%;
    height: 35px;

    /* background: rgba(0, 0, 0, 0.34); */
    background: #FF993A;

    #Wish{
        position: absolute;
        right: 15px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &> span{
        font-size: 0.625rem;
        font-weight: 700;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    box-sizing: border-box;
    width: 100%;
    flex:0.85;

    border-bottom: 1px solid #e0e0e0;
    background-color: #fff;
`;
const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid #e0e0e0;

    & > span{
        padding-top: 3px;
        box-sizing: border-box;

        font-size: 1rem;
        font-weight: 900;
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 10px 0;
`;
const Intro = styled.div`
    font-size: 0.75rem;
    font-weight: 700;
`;
const Topic = styled.div`
    display: flex;
    flex-wrap: wrap;

    font-size: 0.625rem;    
`;
const Stack = styled.div`
    display: flex;
    gap: 4px;
    width: 100%;
    flex-wrap: wrap;

    font-size: 0.625rem;
`;
const StackName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 5px;
    box-sizing: border-box;

    background-color: #d9d9d9;
    border-radius: 30px;
    white-space: nowrap;

`;
const Create = styled.div`
    display: flex;
    gap: 8px;
    font-size: 0.5rem;
    &>div:nth-child(2){
        color: #7c7c7c;
    }
`;