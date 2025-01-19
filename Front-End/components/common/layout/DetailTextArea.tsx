import React, { useState } from "react";
import styled from "styled-components";
import { PUT, DELETE } from "@/pages/api/axios";
import { useRouter } from "next/router";
interface TextAreaProps {
  content: string;
  isWriter: boolean;
  Update: any;
}

const DetailTextArea = ({ content, isWriter, Update }: TextAreaProps) => {
  const router = useRouter();
  const num = 15;
  const Delete = () => {
    const handleLogin = async () => {
      await DELETE(`/api/project/${num}/delete`)
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
    router.push("/project");
  };
  // const Update = () => {
  //   router.push("/project/post");
  //   const handleLogin = async () => {
  //     await PUT(`api/project/${num}/update`, {
  //       title: "string",
  //       content: "strinZXCXZcXZcXZCg",
  //       introduction: "string",
  //       githubUrl: "string",
  //       techStackList: ["Css"],
  //       subject: "여행",
  //     })
  //       .then((res) => {
  //         console.log(res);
  //         alert(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         alert(err);
  //       });
  //     handleLogin();
  //   };
  // };
  return (
    <div>
      <Hr />
      <div style={{ margin: "80px" }}>{content}</div>
      {isWriter && (
        <>
          <Hr />
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: "20px",
            }}
          >
            <Button onClick={Update} color="white" backgroundcolor="#FF4B13">
              수정
            </Button>
            <Button onClick={Delete} color="#FF4B13" backgroundcolor="white">
              삭제
            </Button>
          </div>
        </>
      )}
      <Hr />
    </div>
  );
};

export default DetailTextArea;

interface ButtonProps {
  color: string;
  backgroundcolor: string;
}
const Button = styled.button<ButtonProps>`
  width: 100px;
  height: 23px;
  background-color: ${(props) => props.backgroundcolor};
  border: none;
  color: ${(props) => props.color};
  border-radius: 8px;
  font-weight: 700;
  border: 1px solid ${(props) => props.color};
`;

const Hr = styled.hr`
  width: 100%;
  margin: 30px 0;
`;
