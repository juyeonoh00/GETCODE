import { GET } from '@/pages/api/axios';
import { GoogleLogoSVG } from '@/public/SVG/auth';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

/** ------------------------------------------------------------- */
/** Google 소셜 로그인 버튼 */ //authForm/loginButton in 각 소셜로그인 버튼
/** ------------------------------------------------------------- */

const GoogleLoginButton = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleGoogleLogin = async() => {
        try {
            // await GET('/api/auth/google'); // 백엔드 구글 인가 엔드포인트로 get요청
            signIn('google',{callbackUrl:`${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}`})
        }
        catch (error) {
            console.error('Google login error:', error);
        }
    }

    return(
        <Layout onClick={()=>handleGoogleLogin()}>
            <GoogleLogoSVG/><span>Google Login</span>
        </Layout>
    )
}

export default GoogleLoginButton;

const Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    height: 45px;

    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #B7B7B7;

    cursor: pointer;
`;
