import { POST } from "@/pages/api/axios";
import { WishOffSVG, WishOnSVG, HartOffSVG, HartOnSVG, ViewCountSVG } from "@/public/SVG/reactionCount";
import { useEffect, useState } from "react";
import styled from "styled-components";

/** ------------------------------------------------------------- */
/** 프로젝트모집 게시물 객체 폼 */
/** ------------------------------------------------------------- */

interface ObjectFormProps{
    style?:any;
    data?: any;
    setIsLoginAlertOn?: any;
}
/** 불러온 Respons 데이터 형식 참고 : 프로젝트 모집 데이터 */
//[TODO] 모집파트 추가해야함,?
interface FindProjectObjectData{
    projectRecruitmentId: number;
    title: string;
    content: string;
    siDo: string;
    guGun: string;
    online: boolean;
    recruitment: boolean;
    views: number;
    likeCnt: number;
    createDate: string;
    modifiedDate: string;
    subjects: [{
        id: number;
        subject: string;
    }]
    techStacks: [{
        id: number;
        teckStack: string;
    },]
    memberNickName: string;
    checkLike: boolean|null;
    checkWish: boolean|null;
}
/** 불러온 Respons 데이터 형식 참고 : 내가 작성한 프로젝트 모집 데이터 */
/**[TODO: 변수명 통일 및 미사용 변수명 처리 요청 중(240206)] */
interface MyWriteFindProjectObjectData{
    projectId: number; //변수명통일요청
    title: string;
    introduction: string; //변수명통일요청
    views: number;
    likeCnt: number;
    checkLike: boolean|null;
    checkWish: boolean|null;
    dateTime: string; //변수명통일요청
    imageUrl: string|null; //알수없는변수명
    memberNickName: string;
    projectSubjects: [{ //변수명통일요청
        id: number;
        subject: string;
    }];
    techStackList: [{ //변수명통일요청
        id: number;
        techStack: string;
    }]
}

const ObjectForm = ({style,data,setIsLoginAlertOn}:ObjectFormProps) => {

    /** 좋아요,찜하기 버튼 클릭 상태 */
    const [isHartOn, setIsHartOn] = useState<boolean>(false);
    const [isWishOn, setIsWishOn] = useState<boolean>(false);

    /** 해당 프로젝트모집 게시물의 주제,기술 배열,모집중여부 */
    const subjects:any[] = data.subjects;
    // const techStacks:any[] = [...data.techStacks];
    const techStacks:any[] = data.techStacks;
    const [recruitMentBoolean, setRecruitMentBoolean] = useState<boolean>(false);

    /** 좋아요 버튼 클릭 이벤트 */
    const handleHeartClick = async() => {
        setIsHartOn(!isHartOn);
        await POST(`/api/projectrecruitment/${data.projectRecruitmentId}/like`)
        .then((res)=>{
            //[TODO: res.data 값 확인, boolean값으로 조건 설정]
            //[TODO: catch err 부분에서 사용자가 존재하지 않습니다 메세지의 경우 res로 전환 가능성]
            // if(res.data==='프로젝트 좋아요 성공'){
            //     setIsHartOn(true);
            // }if(res.data==='프로젝트 좋아요 삭제 성공'){
            //     setIsHartOn(false);
            // }
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
        await POST(`/api/projectrecruitment/${data.projectRecruitmentId}/wish`)
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


    /**[TODO]recruitment속성이 boolean인지, boolean|다른무엇 인지 정확하지 않아서 작성 */
    useEffect(() => {
        if(data.recruitment === true){
            setRecruitMentBoolean(true);
        }if(data.recruitment === false){
            setRecruitMentBoolean(false);
        }if(data.recruitment !== true||false){
            setRecruitMentBoolean(false);
        }
    },[]);

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
        // console.log(data,'findProjectObjectData');
    },[]);
    
    return (
        <Layout>
            <Wish onClick={handleWishClick}>
                {isWishOn?<WishOnSVG/>:<WishOffSVG/>}
            </Wish>
            <Content>
                <Info>
                    <div id='title'>{data?.title}</div>
                    <div id='intro'>{data.content}</div>
                    <Reaction>
                        <Wrapper>
                            <ViewCountSVG/>
                            <span>{data.views}</span>
                        </Wrapper>
                        <Wrapper id="hartClick" onClick={handleHeartClick}>
                            {isHartOn?<HartOnSVG size="24"/>:<HartOffSVG size="24"/>}
                            <span>{data.likeCnt}</span>
                        </Wrapper>
                        <RecruitmentStatus recruitment={recruitMentBoolean}>
                            {recruitMentBoolean===true ? '모집 중':'모집 완료'}
                        </RecruitmentStatus>
                    </Reaction>
                </Info>
                <Stack>
                    {/* [TODO: 변수명 통일 후 작업 가능 부분(240206)]
                    <div>
                        {data.techStacks.map((i:any,idx:number)=>(
                            <StackName key={idx}>{i.teckStack}</StackName>
                        ))}
                    </div> */}
                    {/* <div>
                        {subjects.map((i:any,idx:number)=>(
                            <StackName id='part' key={idx}>{i.subject}</StackName>
                        ))}
                    </div> */}
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
    
    background-color: #FFF1E4;

    cursor: pointer;
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
    flex-direction: column;
    gap: 6px;
    width: 100%;

    #part{
        background-color: #c6c6c6;
        color: #000;
    }

    &>div{
        display: flex;
        gap: 10px;
    }
`;
const StackName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
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

    #hartClick {
        cursor: pointer;
    }
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