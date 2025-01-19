import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState, useEffect } from "react";
import { POST, GET } from "@/pages/api/axios";
import axios, { AxiosError } from "axios";
import {
  SelectSubject,
  TextArea,
} from "@/components/community/post/ObjectForm";

const CommunityPostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [content, setContent] = useState<string>();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setTitle(target);
  };

  const Post = () => {
    if (title && subject !== "주제를 입력하세요") {
      const handleLogin = async () => {
        await POST("api/community", {
          title: title,
          content: content,
          category: subject,
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
      console.log(title);
      console.log(subject);
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
      <UserName>작성자 닉네임</UserName>
      <hr style={{ width: "100%" }} />
      <Content>
        <SelectSubject setSubject={setSubject} />
      </Content>
      <TextArea post={() => Post()} setContent={setContent} />
    </Layout>
  );
};

export default CommunityPostPage;

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
