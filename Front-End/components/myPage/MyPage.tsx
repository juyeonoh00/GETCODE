import { GET, PATCH, POST } from "@/pages/api/axios";
import { NickNameEditSVG, ProfileEditSVG } from "@/public/SVG/profile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Alert from "@/components/common/notification/Alert";

const MyPage = () => {

    const router = useRouter();

    const [isLogoutAlertOn, setIsLogoutAlertOn] = useState<boolean>(false);
    const [isUpdateProfileOn, setIsUpdateProfileOn] = useState<boolean>(false);

    const [userEmail, setUserEmail] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');
    const [userProfileImg, setUserProfileImg] = useState<string>('');

    /** 회원 정보 조회 GET */
    const getUserInfo = async() => {
        await GET(`/api/userInfo`)
        .then((res)=>{
            setUserEmail(res.data.email);
            setUserNickname(res.data.nickname);
            setUserProfileImg(res.data.profileImg);
        })
    }
    /** 로그아웃 PATCH */
    const handleLogout = async() => {
        await PATCH(`/api/logout`)
        .then((res)=>{
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            router.push('/');
        })
        .catch((err)=>console.error(err));
    }

    /** 프로필 이미지 변경 POST */
    const updateProfileImg = async() => {
        const inputImg = document.getElementById('profileInput');
        // if(inputImg.files[0]){

        // }
        await POST(`/api/update-profile`)
        .then((res)=>{

        })
        .catch((err)=>console.error(err));
    }

    useEffect(() => {
        getUserInfo();
    },[]);

    return (
        <BackLayout>
            <Layout>
                <Wrapper className="Profile">
                    <Profile>
                        <ProfilEditButton onClick={()=>setIsUpdateProfileOn(true)}>
                            <ProfileEditSVG/>
                        </ProfilEditButton>
                        {userProfileImg?
                            <ProfileImg src={userProfileImg}></ProfileImg>
                        :   <>
                                {/** 프로필 기본 이미지 임시 설정 SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 30 30" fill="none">
                                    <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="white" stroke="#848383"/>
                                    <path d="M7 22C7 19.1875 10.75 19.1875 12.625 17.3125C13.5625 16.375 10.75 16.375 10.75 11.6875C10.75 8.56281 11.9997 7 14.5 7C17.0003 7 18.25 8.56281 18.25 11.6875C18.25 16.375 15.4375 16.375 16.375 17.3125C18.25 19.1875 22 19.1875 22 22" stroke="#BEBEBE" strokeLinecap="round"/>
                                </svg>
                            </>
                        }
                    </Profile>
                    {isUpdateProfileOn?
                        <UpdateProfile>
                            <input id="profileInput" type="file"/>
                        </UpdateProfile>
                    : null
                    }
                    <NickName>{`${userNickname} 님`}</NickName>
                    <LogOut onClick={()=>setIsLogoutAlertOn(true)}>로그아웃</LogOut>
                </Wrapper>
                <Wrapper className="UserInfo">
                    <InfoMenu>
                        <span id="menu">닉네임</span>
                        <span id="info">
                            <span>{userNickname}</span>
                            <div style={{cursor:'pointer'}}><NickNameEditSVG/></div>
                        </span>
                    </InfoMenu>
                    <InfoMenu>
                        <span id="menu">이메일</span>
                        <span id="info">{userEmail}</span>
                    </InfoMenu>
                </Wrapper>
                <Wrapper className="PageMenu">
                    <PageMenu onClick={()=>router.push('/my/myPosts')}>
                        <span id="icon"></span>
                        <span id="menu">작성한 게시글</span>
                    </PageMenu>
                    <PageMenu onClick={()=>router.push('/my/myWishs')}>
                        <span id="icon"></span>
                        <span id="menu">찜한 게시글</span>
                    </PageMenu>
                </Wrapper>
            </Layout>
            {isLogoutAlertOn?
                <Alert
                    setIsAlertOn={setIsLogoutAlertOn}
                    notice='정말로 로그아웃 하시겠습니까?'
                    yesButtonFC={handleLogout}
                    noButtonFC={()=>setIsLogoutAlertOn(false)}
                />
            :   <></>
            }
        </BackLayout>
    )
}
export default MyPage;

const BackLayout = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 50px;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    min-height: 460px;
    padding: 20px;
    box-sizing: border-box;

    border-radius: 16px;
    border: 1px solid #ff4b13;

    & .Profile{
        padding-bottom: 20px;
    }
    & .UserInfo{
        align-items: start;

        border-top: 1px solid #e9e9e9;
        border-bottom: 1px solid #e9e9e9;
    }
    & .PageMenu{
        align-items: start;
        padding-top: 20px;
        gap: 20px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 0;
`;

const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 114px;
    height: 114px;
    /* aspect-ratio: 1/1; */

    border: 3px solid #ff4b13;
    border-radius: 100%;
`;

const UpdateProfile = styled.div`
    display: flex;
    justify-content: center;

    #profileInput{
        display: flex;
        justify-content: center;
    }
`;

const NickName = styled.div`
    font-size: 1.25rem;
    font-weight: 400;
`;

const LogOut = styled.div`
    font-size: 0.9375rem;
    font-weight: 400;

    cursor: pointer;
`;

const ProfilEditButton = styled.div`
    position: absolute;
    right: 0;
    top: 10px;

    cursor: pointer;
`;

const ProfileImg = styled.img``;

const InfoMenu = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    & #menu{
        width: 80px;
        white-space: nowrap;
    }
    & #info{        
        display: flex;
        align-items: center;
        gap: 5px;
        width: 100%;
    }
`;

const PageMenu = styled.div`
    display: flex;
    gap: 15px;

    & #icon{
        display: flex;
        align-items: center;
        width: 30px;
        height: 30px;

        background-color: #d9d9d9;
    }
    & #menu{
        display: flex;
        align-items: center;
    }

    cursor: pointer;
`;