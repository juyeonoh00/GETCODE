import NickNamePage from "@/components/auth/NickNamePage";
import styled from "styled-components";

/** 구글 회원가입 시 마지막 절차 : 닉네임 등록 */
const NickName = () => {

    return(
        <Layout>
            <NickNamePage/>
        </Layout>
    )
}

export default NickName;

const Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;