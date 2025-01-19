import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState, useEffect } from "react";
import { POST, GET } from "@/pages/api/axios";
import { useRouter } from "next/router";
import {
  SelectSubject,
  AddLink,
  TextArea,
  SelectTech,
  WriteIntroduction,
} from "@/components/project/post/ObjectForm";

interface LinkProps {
  linkType: string;
  value: string;
}
const ProjectPostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [tech, setTech] = useState<string[]>([]);
  const [allLink, setAllLink] = useState<LinkProps[]>([]);
  const [content, setContent] = useState<string>();

  const router = useRouter();
  useEffect(() => {
    if (router) {
      const getData = router.query;
      console.log(getData);
      console.log(getData.techStacks);
      setTitle(String(getData.title));
      setContent(String(getData.content));
      setIntroduction(String(getData.introduction));
      // setTech((getData.techStacks));
      setSubject(String(getData.subject));
    }
  }, [router]);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setTitle(target);
  };

  const Post = () => {
    if (title && subject !== "주제를 입력하세요" && tech && allLink) {
      const handleLogin = async () => {
        await POST("api/project/add", {
          title: title,
          content: content,
          introduction: introduction,
          githubUrl: "sdfsdf",
          techStacks: tech,
          subject: subject,
        })
          .then((res) => {
            console.log(res);
            alert(res.data);
          })
          .catch((err) => {
            console.log(err);
            alert(err);
          });
      };
      handleLogin();
    } else {
      alert("추가입력");
    }
  };

  return (
    <Layout>
      <Title
        name="Title"
        type="text"
        placeholder="제목"
        value={title}
        onChange={handleTitle}
      />
      <hr style={{ width: "100%" }} />
      <Content>
        <WriteIntroduction setIntroduction={setIntroduction} />
        <SelectSubject setSubject={setSubject} />
        <SelectTech tech={tech} setTech={setTech} />
        <AddLink allLink={allLink} setAllLink={setAllLink} />
      </Content>
      <TextArea post={() => Post()} content={content} setContent={setContent} />
    </Layout>
  );
};

export default ProjectPostPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
  padding: 20px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Title = styled.input`
  font-size: 1.8rem;
  margin: 60px 20px 20px;
  text-align: left;
  border: none;
  ${media.mobile} {
    margin: 10px 40px;
  }
`;
const UserName = styled.p`
  font-size: 1rem;
  padding: 20px;
  ${media.mobile} {
    padding: 10px 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  padding: 20px 60px;
  @media screen and (max-width: 800px) {
    padding: 20px calc(60px + (100% - 760px) / 3);
  }
  ${media.mobile} {
    flex-wrap: wrap;
    display: flex;
    place-content: center;
  }
`;
