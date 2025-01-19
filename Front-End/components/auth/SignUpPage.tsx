import styled from "styled-components";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { GET, POST } from "@/pages/api/axios";
import InputForm from "@/components/auth/authForm/InputForm";
import AuthForm from "@/components/auth/authForm/AuthForm";
import AuthLayoutForm from "@/components/auth/authForm/AuthLayoutForm";
import Toast from "@/components/common/notification/Toast";
import { FailSVG, NoticeSVG } from "@/public/SVG/toast";

/** ------------------------------------------------------------- */
/** 회원가입 페이지 컴포넌트 */
/** ------------------------------------------------------------- */
/**[TODO]
 * [1] Toast 처리(이메일인증,인증번호인증, Toast로드 속도 향상)
 * [2] 유효성문구처리(백엔드response필요, Input창 아래 문구 삽입-UI작성은되어있음 약간의 수정 필요)
 * [3] 회원가입 API 연결(불필요request.body-'authority':'ROLE_USER'제거, 연결작동확인)
 * [4] 회원가입 실패 유효성 처리
 * [5] 회원가입 성공 전환 화면 연결(UI작성필요, 자동로그인 되는지 체크 필요)
 */

const SignUpPage = () => {

    const router = useRouter();

    /** 회원가입 폼 입력 내용(이메일,인증번호,비밀번호,닉네임) */
    const [userEmail, setUserEmail] = useState<string>('');
    const [varificationNumber, setVarificationNumber] = useState<any>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userNickname, setUserNickname] = useState<string>('');

    /** 인증번호 발송|인증 상태 체크(isPostEmailVarification:인증메일발송성공여부,isVarificationSuccess:인증번호인증성공여부) */
    const [isPostEmailVarification, setIsPostEmailVarification] = useState<boolean|undefined>(undefined);
    const [isVarificationSuccess, setIsVarificationSuccess] = useState<boolean|undefined>(undefined);

    /** 버튼 활성화 상태(인증,완료 버튼) */
    const [isAuthenticationButtonOn, setIsAuthenticationButtonOn] = useState<boolean>(false);

    /** Email 입력 수정 여부 체크 */
    const [changeStateEmail, setChangeStateEmail] = useState<boolean>(false);

    /** 토스트 연속 클릭 배열 */
    const [toasts, setToasts] = useState<any[]>([]);

    /** 토스트 추가 함수 */
    const addToasts = (message:any) => {
        setToasts(prevToasts => [...prevToasts, message]);
    };

    /** 입력값 STATE 변경(email,varificationNumber,password,nickname) */
    //
    //email 입력 (state 변경)
    const handleUserEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setUserEmail(target);
        // setVarificationNumber('');
        if(target.length > 0){
            if(userEmail !== target){
                setChangeStateEmail(true);
                setIsVarificationSuccess(undefined);
            }else{
                setChangeStateEmail(false);
            }
        }else{
            setChangeStateEmail(false);
        }
    }
    //인증 번호 입력 (state 변경)
    const handleUserAuthenticationNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setVarificationNumber(target);
    }
    //password 입력 (state 변경)
    const handleUserPassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.value;
        setUserPassword(target);
    }
    //nickname 입력 (state 변경)
    const handleUserNickname = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const target = e.target.value;
        setUserNickname(target);
    }

    /** 이메일 인증 번호 요청 및 확인 API */
    //
    //이메일 인증 번호 요청 POST
    const postEmailAuthentication = async() => {
        await POST(`/api/emails/verification-requests?email=${userEmail}`)
        .then((res)=>{
            console.log(res)
            if(res.data === ''){
                //이메일 인증 번호 요청 성공
                setIsPostEmailVarification(true);
                //인증번호 인증버튼 ON
                setIsAuthenticationButtonOn(true);
            }
        })
        .catch((error)=>{
            console.log(error);
            //토스트추가
            addToasts({iconSVG:<FailSVG/>,notice:"잘못된 이메일입니다."});
        });
    }
    //이메일 인증 번호 인증 GET
    const getVerification = async() => {
        await GET(`/api/emails/verifications?email=${userEmail}&code=${varificationNumber}`)
        .then((res)=>{
            setIsVarificationSuccess(res.data.result);
        })
        .catch((err)=>{
            console.error(err);
            setIsAuthenticationButtonOn(true);
        });
    }

    /** POST - 회원가입 */
    const handleSignUp = async() => {
        await POST(`/api/sign-up`,{
            email: userEmail,
            nickname: userNickname,
            password: userPassword,
            emailVerified: isVarificationSuccess 
        }).then((res)=>{
            console.log(res.data);
            router.push('/auth/login/celebration');

        }).catch((err)=>{
            console.log(err.response.data);
        })
    }

    useEffect(()=>{
        setIsPostEmailVarification(undefined);
        toasts.length = 0;
    },[])

    useEffect(()=>{
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    },[]);

    /** [TODO] 유효성검사 validation,validationGuide연결해야함 */
    // validation은 patch유효성검사 boolean값
    // validationGuide는 patch,post유효성검사 error메세지

    return(
        <AuthLayoutForm>
        <AuthForm
            title="회원가입"
            buttonName="회원가입"
            loginFC={handleSignUp}
        >
            <InputForm
                name="Email"
                type="email"
                placeholder="email@email.com"
                value={userEmail}
                onChange={handleUserEmail}
                validation={true}
                validationGuide=""
                >
                <CertifiedPOST 
                    onClick={postEmailAuthentication}
                    isPostEmailVarification={isPostEmailVarification}
                    changeStateEmail={changeStateEmail}
                >인증</CertifiedPOST>
            </InputForm>
            
            <InputForm
                name="Authentication"
                type="string"
                placeholder="인증 번호를 입력해주세요."
                value={varificationNumber}
                onChange={handleUserAuthenticationNumber}
                validation={isVarificationSuccess}
                validationGuide="인증 번호가 일치하지 않습니다."
                >
                <CertifiedGET 
                    onClick={getVerification}
                    isAuthenticationButtonOn={isAuthenticationButtonOn}
                >{isVarificationSuccess?'완료':'인증'}</CertifiedGET>
                {isVarificationSuccess === true?
                    <p style={{fontSize:'12px', color:'#FF993A'}}>인증 완료되었습니다.</p>
                :isVarificationSuccess === false?
                    <Toast iconSVG={<FailSVG/>} notice="인증 번호가 일치하지 않습니다."/>
                :<></>
                }
            </InputForm>
            <InputForm
                name="Password"
                type="password"
                placeholder="••••••••••"
                value={userPassword}
                onChange={handleUserPassword}
                validation={true}
            />
            <InputForm
                name="Nickname"
                type="text"
                placeholder="홍길동"
                value={userNickname}
                onChange={handleUserNickname}
                validation={true}
            />
            {isPostEmailVarification === true &&
                <Toast iconSVG={<NoticeSVG/>} notice="인증메일이 발송되었습니다."/>
            }
            {toasts.map((i:any, idx:number)=>(
                <Toast key={idx} iconSVG={i.iconSVG} notice={i.notice}/>
            ))}
        </AuthForm>
        </AuthLayoutForm>
    )
}

export default SignUpPage;

const CertifiedPOST = styled.div<{isPostEmailVarification:boolean|undefined; changeStateEmail:boolean}>`
        display:flex;
        position: absolute;
        right: 10px;
        top: 33.5px;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 25px;
        padding-top: 3px;

        background-color: ${({isPostEmailVarification,changeStateEmail})=>(!isPostEmailVarification||changeStateEmail?'#FF993A':'#B7B7B7')};
        border-radius: 8px;
        
        color: #fff;

        cursor: pointer;
        pointer-events: ${({isPostEmailVarification,changeStateEmail})=>(!isPostEmailVarification||changeStateEmail?'unset':'none')};
`;

const CertifiedGET = styled.div<{isAuthenticationButtonOn:boolean|undefined}>`
        display:flex;
        position: absolute;
        right: 10px;
        top: 33.5px;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 25px;
        padding-top: 3px;

        background-color: ${({isAuthenticationButtonOn})=>(isAuthenticationButtonOn?'#FF993A':'#B7B7B7')};
        border-radius: 8px;
        
        color: #fff;

        cursor: pointer;
        pointer-events: ${({isAuthenticationButtonOn})=>(isAuthenticationButtonOn?'unset':'none')};
`;