import AuthForm from "@/components/auth/authForm/AuthForm";
import AuthLayoutForm from "@/components/auth/authForm/AuthLayoutForm";
import InputForm from "@/components/auth/authForm/InputForm";
import { useState } from "react";
import styled from "styled-components";

/** ------------------------------------------------------------- */
/** 비밀번호 찾기 페이지 컴포넌트 */
/** ------------------------------------------------------------- */
/**[TODO]
 * [1] Input 폰트 사이즈 확대
 * [2] 비밀번호 찾기 실패 알림창 설정
 * [3] 구글 소셜 로그인 구현
 * [4] 이메일 인증 버튼 - 전송성공여부 알림창, 버튼 활성화 조건
 * [5] 인증번호 인증 버튼 - 인증성공여부 알림창, 버튼 활성화 조건
 * [6] 비밀번호찾기가 A.새로운 비번 제공인지, B.기존 비번 넘겨주는지
 * [7] A라면 비번 변경 UI작성 필요
 */

const FindPage = () => {
    const [userEmail, setUserEmail] = useState<string>('');
    const [varificationNumber, setVarificationNumber] = useState<any>('');

    /** email 입력 (state 변경) */
    const handleUserEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setUserEmail(target);
    }
    //인증 번호 입력 (state 변경)
    const handleUserAuthenticationNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setVarificationNumber(target);
    }
    return (
        <AuthLayoutForm>
            <AuthForm
                title="비밀번호 찾기"
                buttonName="비밀번호 찾기"
            >
            <InputForm
                name="Email"
                type="email"
                placeholder="email@email.com"
                value={userEmail}
                onChange={handleUserEmail}
                validation={true}
            >
                <Certified>인증</Certified>
            </InputForm>
            <InputForm
                name="Authentication"
                type="string"
                placeholder="인증 번호를 입력해주세요."
                value={varificationNumber}
                onChange={handleUserAuthenticationNumber}
                validation={true}
                validationGuide=""
                >
                <Certified>완료</Certified>
            </InputForm>
            </AuthForm>
        </AuthLayoutForm>
    )
}
export default FindPage;

const Certified = styled.div`
        display:flex;
        position: absolute;
        right: 10px;
        top: 33.5px;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 25px;
        padding-top: 3px;

        background-color: #FF993A;
        border-radius: 8px;
        
        color: #fff;

        cursor: pointer;
`;
const CertifiedGET = styled.div<{isPostEmailVarification:boolean}>`
        display:flex;
        position: absolute;
        right: 10px;
        top: 33.5px;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 25px;
        padding-top: 3px;

        background-color: ${({isPostEmailVarification})=>(isPostEmailVarification?'#FF993A':'#B7B7B7')};
        border-radius: 8px;
        
        color: #fff;

        cursor: pointer;
        pointer-events: ${({isPostEmailVarification})=>(isPostEmailVarification?'unset':'none')};
`;