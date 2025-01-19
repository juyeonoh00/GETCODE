import styled from "styled-components";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { POST } from "@/pages/api/axios";
import { useEffect, useState } from "react";
import InputForm from "@/components/auth/authForm/InputForm";
import AuthForm from "@/components/auth/authForm/AuthForm";
// import { useAuth } from "@/components/auth/authContexts/AuthContexts";

/** ------------------------------------------------------------- */
/** 로그인 페이지 컴포넌트 */
/** ------------------------------------------------------------- */
/**[TODO]
 * [1] Input 폰트 사이즈 확대
 * [2] 로그인 실패 알림창 설정
 * [3] 구글 소셜 로그인 구현
 */

const LoginPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    /** 로그인하기 POST */
    const handleLogin = async() => {
        await POST('/api/auth/login',{
            email: userEmail,
            password: userPassword,
        }).then((res)=>{

            localStorage.setItem('accessToken',res.data.accessToken);
            localStorage.setItem('refreshToken',res.data.refreshToken);

            router.push('/');
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }

    /** email 입력 (state 변경) */
    const handleUserEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setUserEmail(target);
    }
    /** password 입력 (state 변경) */
    const handleUserPassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.value;
        setUserPassword(target);
    }

    useEffect(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    },[]);

    return(
        <AuthForm
            title="로그인"
            buttonName="로그인"
            session={session}
            loginFC={handleLogin} 
        >
            <InputForm
                name="Email"
                type="email"
                placeholder="email@email.com"
                value={userEmail}
                onChange={handleUserEmail}
                validation={true}
            />
            <InputForm
                name="Password"
                type="password"
                placeholder="••••••••••"
                value={userPassword}
                onChange={handleUserPassword}
                validation={true}
            />
            <ForgetPassWord onClick={()=>router.push('/auth/login/find')}>비밀번호를 잊으셨나요?</ForgetPassWord>
        </AuthForm>
    )
}

export default LoginPage;

const ForgetPassWord = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  color: #ff4b13;
  font-size: 0.75rem;

  cursor: pointer;
`;
