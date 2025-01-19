import { media } from "@/styles/mediaQuery";
import styled from "styled-components";

const NavBarForm = () => {
    return(
        <Layout>
            <Wrapper>
                <CommunityMenu>자유게시판</CommunityMenu>
                <CommunityMenu>QnA</CommunityMenu>
                <CommunityMenu>고민상담</CommunityMenu>
            </Wrapper>
        </Layout>
    )
}
export default NavBarForm;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 260px;
    padding: 35px 0;

    background-color: #ff993a;

    ${media.mobile || media.tablet}{
        display: none;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* position: fixed; */
    width: 100%;
`;

const CommunityMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;

    color: #fff;

    cursor: pointer;

    &:hover{
        background-color: #f98111;
    }
`;