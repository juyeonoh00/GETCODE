import { POST } from "@/pages/api/axios";
import { WishOnSVG, WishOffSVG, HartOnSVG, HartOffSVG, ViewCountSVG } from "@/public/SVG/reactionCount";
import { useEffect, useState } from "react";
import styled from "styled-components";

/** ------------------------------------------------------------- */
/** 스터디모집 게시물 객체 폼 */
/** ------------------------------------------------------------- */

interface ObjectFormProps{
    style?:any;
    data?: any;
    setIsLoginAlertOn?: any;
}
/** 불러온 Respons 데이터 형식 참고: 스터디모집 게시글 */
interface FindStudyObjectData{
    id: number;
    title: string, //제목
    content: string, //내용
    siDo: string, //시도
    guGun: string, //구군
    recruitment: boolean|'', //모집여부
    online: boolean|'', //온오프라인여부
    views: number, //조회수
    likeCnt: number, //좋아요수
    contact: string[], //연락처
    createDate: string, //작성일
    modifiedDate: string, //수정일
    memberNickName: string; //작성자
    studyFields: string[]; //스터디분야
    checkLike: boolean; //좋아요클릭여부
    checkWish: boolean; //찜클릭여부
}
/** 불러온 Respons 데이터 형식 참고: 내가 작성한 스터디모집 게시글 */
interface MyWriteFindStudyObjectData{
    comments: [];
    contact: string[];
    content: string;
    count: number;
    date: string;
    member: {
        email: string;
        nickname: string;
        profileImg: null|string; //이 형식이 맞나?
    };
    online: boolean;
    recruitment: boolean;
    
}


const ObjectForm = ({data,setIsLoginAlertOn}:ObjectFormProps) => {

    /** 좋아요,찜하기 버튼 클릭 상태 */
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isWishOn, setIsWishOn] = useState<boolean>(false);

    const subject:any[] = [data.subjects];

    /** 좋아요 버튼 클릭 이벤트 */
    const handleHeartClick = async() => {
        setIsHartOn(!isHartOn);
        await POST(`/api/study-like/${data.id}`)
        .then((res)=>{
            //[TODO: res.data 값 확인, boolean값으로 조건 설정]
            //[TODO: catch err 부분에서 사용자가 존재하지 않습니다 메세지의 경우 res로 전환 가능성]
            if(res.data==='프로젝트 좋아요 성공'){
                setIsHartOn(true);
            }if(res.data==='프로젝트 좋아요 삭제 성공'){
                setIsHartOn(false);
            }
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
    //[TODO: 스터디모집글 더미데이터 작성된 후 테스트 가능]
    const handleWishClick = async() => {
        setIsWishOn(!isWishOn);
        await POST(`/api/project/${data.projectId}/wish`)
        .then((res)=>{
            //[TODO: res.data 값 확인, boolean값으로 조건 설정]
            //[TODO: catch err 부분에서 사용자가 존재하지 않습니다 메세지의 경우 res로 전환 가능성]
            if(res.data==='프로젝트 좋아요 성공'){
                setIsWishOn(true);
            }if(res.data==='프로젝트 좋아요 삭제 성공'){
                setIsWishOn(false);
            }
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

    return(
        <Layout>
            <Wish onClick={handleWishClick}>
                {isWishOn?<WishOnSVG/>:<WishOffSVG/>}
            </Wish>
            <Content>
                <Info>
                    <div id='title'>{data?.title}</div>
                    <div id='intro'>{data?.content}</div>
                    <Reaction>
                <Wrapper>
                    <ViewCountSVG/>
                    <span>{data?.views}</span>
                </Wrapper>
                <Wrapper onClick={handleHeartClick}>
                    {isHartOn?<HartOnSVG size="24"/>:<HartOffSVG size="24"/>}
                    <span>{data?.likeCnt}</span>
                </Wrapper>
                <RecruitmentStatus recruitment={data?.recruitStatus}>
                    {data?.recruitStatus===true ? '모집 중':'모집 완료'}
                </RecruitmentStatus>
            </Reaction>
                </Info>
                <Stack>
                    {data.studyFields && data?.studyFields?.map((i:any,idx:number)=>(
                        <StackName key={idx}>{i}</StackName>
                    ))}
                </Stack>
                <Create>
                    <span>{`작성자 : ${data.memberNickName}`}</span>
                    <span>{`작성일 : ${data.createDate}`}</span>
                </Create>
            </Content>
        </Layout>
    )
}

export default ObjectForm;

const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    margin-bottom: 30px;

    filter: drop-shadow(-4px 4px 40px rgba(0, 0, 0, 0.25));
`;

const Wish = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    min-width: 60px;
    
    background-color: #FF993A;
`;

const Content = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 15px;
    width: 100%;

    background-color: #fff;

`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    &> div:nth-child(1){
        font-size: 0.9375rem;
    }
    &> div:nth-child(2){
        font-size: 0.75rem;
    }
`;
const Stack = styled.div`
    display: flex;
    gap: 6px;
    width: 100%;
`;
const StackName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 15px;
    padding-top: 4px;
    box-sizing: border-box;

    border-radius: 6px;
    background-color: #4f4f4f;
    white-space: nowrap;
    
    color: #fff;
    font-size: 0.75rem;
`;
const Create = styled.div`
    display: flex;
    gap: 10px;

    font-size: 0.625rem;
`;

const Reaction = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    align-items: start;
    gap: 15px;
    padding: 15px;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    gap: 5px;

    &>span{
        font-size: 0.625rem;
    }
`;
const RecruitmentStatus = styled.div<{recruitment:boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    padding-top: 2px;
    box-sizing: border-box;

    border-radius: 50px;
    background-color: #00ff1a;
    background-color: ${({recruitment})=>(recruitment?'#00ff1a':'#a2a2a2')};

    font-size: 0.75rem
`;