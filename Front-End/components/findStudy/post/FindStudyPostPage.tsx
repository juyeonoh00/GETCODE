import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
import React, { useState, useEffect } from "react";
import { POST, GET } from "@/pages/api/axios";
import axios, { AxiosError } from "axios";
import {
  SelectStatus,
  SelectPart,
  SelectOnOff,
  AddLink,
  TextArea,
} from "@/components/findStudy/post/ObjectForm";
import SelectLocation from "@/components/common/selectObject/SelectLocation";

interface LinkProps {
  linkType: string;
  value: string;
}
const FindStudyPostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<boolean>(true);
  const [part, setPart] = useState<string[]>([]);
  const [onoff, setOnoff] = useState<boolean>(true);
  const [siDo, setSiDo] = useState<string>("");
  const [guGun, setGuGun] = useState<string>("");
  const [allLink, setAllLink] = useState<LinkProps[]>([]);
  const [content, setContent] = useState<string>();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setTitle(target);
  };

  const Post = () => {
    if (title && part && siDo !== "시/도 선택/" && allLink) {
      const handleLogin = async () => {
        await POST("api/study", {
          title: title,
          content: content,
          siDo: siDo,
          guGun: guGun,
          recruitment: status,
          online: onoff,
          contact: ["010-1234-5678", "ojs258@naver.com"],
          fields: part,
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
      console.log(content);
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
        <SelectPart part={part} setPart={setPart} />
        <SelectStatus status={status} setStatus={setStatus} />
        <SelectOnOff onoff={onoff} setOnoff={setOnoff} />
        <SelectLocation
          setSiDo={setSiDo}
          setGuGun={setGuGun}
          text="스터디 지역"
        />
        <AddLink allLink={allLink} setAllLink={setAllLink} />
      </Content>
      <TextArea post={() => Post()} setContent={setContent} />
    </Layout>
  );
};

export default FindStudyPostPage;

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
