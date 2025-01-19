import { media } from "@/styles/mediaQuery";
import styled from "styled-components";
import SearchInput from "@/components/common/search/SearchInput";
import MainContantsLayout from "@/components/common/layout/MainContantsLayout";

const ContentsForm = ({id}:any) => {
    return(
        <BackLayout>
            <Layout>
                <MainContantsLayout
                    // pageName={`community/${id}`}
                    pageName={`community`}
                    title="커뮤니티"
                    subTitle="자유게시판"
                    sumTitle="게시글"
                    id={id} 
                    detailSearchSelectedData={undefined}                
                />
            </Layout>
        </BackLayout>
    )
}
export default ContentsForm;

const D = styled.div``;

const BackLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;

    ${media.mobile || media.tablet}{
        padding: 30px 20px;
    }
`;
const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    width: 80%;
    height: 100%;
    padding: 50px 0;

    background-color: #fff;

    ${media.mobile || media.tablet}{
        width: 100%;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Search = styled.div`
    display: flex;
    width: 90%;
`;