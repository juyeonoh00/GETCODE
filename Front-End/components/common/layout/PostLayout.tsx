import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState, useEffect } from "react";

interface DetailLayoutProps{
    pageName: string;
    writerName?: string;
}

export const TextArea = () =>{
    return(
      <div>
        <textarea style={{ height: "500px", width:"calc(100% - 100px)", margin:"50px" }} />
        <hr style={{ width: "100%", margin: "30px 0" }} />
        <div style={{ display:"flex", flexDirection:"row-reverse", gap:"20px"}}>
          <button style={{width:"100px"}}>등록</button>
          <button style={{width:"100px"}}>취소</button>
        </div>
        <hr style={{ width: "100%",margin: "30px 0" }} />
      </div>
    );
  }

const PostLayout = ({pageName}:DetailLayoutProps) => {
    const [ObjectForm, setObjectForm] = useState(null);

    useEffect(() => {
        import(`@/components/${pageName}/post/ObjectForm`)
        .then(module => setObjectForm(()=>module.default))
        .catch(error => console.error(error))
    },[pageName]);

    return(
        <Layout>
        <Title>프로젝트 제목</Title>
        <UserName>작성자 닉네임</UserName>
        <hr style={{ width: "100%" }} />
        <Content>
        {ObjectForm&&React.createElement(ObjectForm)}
        </Content>
        <TextArea />
      </Layout>
    );
}
export default PostLayout;


const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
  padding:20px;
  @media screen and (max-width: 800px){
    width: 100%;
  }
  ${media.mobile}{

  };
`;

const Title = styled.p`
  font-size: 1.8rem;
  padding: 80px 0 20px 0;
  text-align: left;
`;
const UserName = styled.p`
  font-size: 1.1rem;
  padding: 20px 0 20px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  padding: 20px 60px;
  @media screen and (max-width: 800px){
    padding: 20px calc(60px + (100% - 760px)/3);
  }
`;
