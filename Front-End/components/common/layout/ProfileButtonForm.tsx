import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import { media } from "@/styles/mediaQuery";

const ProfileButtonForm = ({isLogin, userInfo, isToggle, setIsToggle}:any) => {

    const router = useRouter();

    return(
        <Layout>
            {userInfo!==undefined ?
            <>
                <Wrapper onClick={()=>setIsToggle(!isToggle)}>
                    <Profile>
                        {userInfo.profileImg?
                          <ProfileImg src={userInfo.profileImg}></ProfileImg>
                        :
                        <>
                        {/** 임시SVG - 사용자 프로필 들어갈 부분 */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" fill="white" stroke="#848383"/>
                            <path d="M7 22C7 19.1875 10.75 19.1875 12.625 17.3125C13.5625 16.375 10.75 16.375 10.75 11.6875C10.75 8.56281 11.9997 7 14.5 7C17.0003 7 18.25 8.56281 18.25 11.6875C18.25 16.375 15.4375 16.375 16.375 17.3125C18.25 19.1875 22 19.1875 22 22" stroke="#BEBEBE" strokeLinecap="round"/>
                        </svg>
                        </>
                        }
                        
                    </Profile>
                    <span style={{width:'calc(100% - 30px)'}}>{`${userInfo?.nickname} 님`}</span>
                </Wrapper>
            </>
            :
                <span id='notLoginText' onClick={()=>router.push('/auth/login')}>로그인</span>
            }
        </Layout>
    )
}

export default ProfileButtonForm;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 145px;
  height: 40px;

  border-radius: 100px;
  background-color: #ff993a;

  font-size: 1rem;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;

  #notLoginText {
    color: #fff1e4;
  }

  cursor: pointer;
  ${media.mobile_550} {
    width: 100px;
    height: 30px;
    font-size: 0.8rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding: 0 8px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  aspect-ratio: 1/1;
  overflow: hidden;

  border-radius: 100px;
  border: 1px solid #848383;
`;

const ProfileImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;
