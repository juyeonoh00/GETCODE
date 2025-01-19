import AuthForm from "@/components/auth/authForm/AuthForm";
import AuthLayoutForm from "@/components/auth/authForm/AuthLayoutForm";
import InputForm from "@/components/auth/authForm/InputForm";
import { POST } from "@/pages/api/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CelebratingLoginPage = () => {

    const router = useRouter();

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

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

    /** 로그인POST */
    const handleLogin = async() => {
        await POST('/api/auth/login',{
            email: userEmail,
            password: userPassword,
        }).then((res)=>{

            localStorage.setItem('accessToken',res.data.accessToken);
            localStorage.setItem('refreshToken',res.data.refreshToken);
            console.log(res.data);

            // router.push('/');

        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }
    useEffect(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    },[]);

    return(
        <AuthLayoutForm>
            <AuthForm
                title="회원가입 완료!"
                subTitle="로그인 후 모든 서비스를 이용할 수 있습니다."
                buttonName="로그인"
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
            </AuthForm>
        </AuthLayoutForm>
    )
}
export default CelebratingLoginPage;