import styled from "styled-components";
import NavBarForm from "@/components/community/NavBarForm";
import ContentsForm from "@/components/community/ContentsForm";

const CommunityPage = ({id}:any) => {
    return (
        <Layout>
            <NavBarForm/>
            <ContentsForm id={id}/>
        </Layout>
    )
}
export default CommunityPage;

const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`;