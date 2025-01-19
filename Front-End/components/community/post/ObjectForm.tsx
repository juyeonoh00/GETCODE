import styled from "styled-components";
import SelectRoundBox from "@/components/common/selectObject/SelectRoundBox";
import { media } from "@/styles/mediaQuery";
import SelectToggle from "@/components/common/selectObject/SelectToggle";
import React, { useState, useEffect } from "react";
import SourceLink from "@/components/common/selectObject/SelectSourceLink";
import ToggleRoundBox from "@/components/common/selectObject/SelectToggleBox";
import { POST, GET } from "@/pages/api/axios";

interface SelectSubjectProps {
  setSubject: (newValue: string) => void;
}

export const SelectSubject = ({ setSubject }: SelectSubjectProps) => {
  const optionSubject = [
    "주제를 입력하세요",
    "여행",
    "이커머스",
    "소셜 네트워크",
    "공유 서비스",
    "의료",
    "금융",
    "교육",
    "모임",
    "스포츠",
    "게임",
    "부동산",
    "뷰티",
    "패션",
  ];
  return (
    <MobileLayaout>
      <SelectRoundBox text="주제" />
      <SelectToggle
        options={optionSubject}
        onCreate={(value) => {
          setSubject(value);
        }}
      />
    </MobileLayaout>
  );
};

interface PostProps {
  post: () => void;
  setContent: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const TextArea = ({ post, setContent }: PostProps) => {
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <TextAreaDiv onChange={handleTextArea} />
      <Hr />
      <div
        style={{ display: "flex", flexDirection: "row-reverse", gap: "20px" }}
      >
        <Button onClick={post} color="white" backgroundcolor="#FF4B13">
          등록
        </Button>
        <Button color="#FF4B13" backgroundcolor="white">
          삭제
        </Button>
      </div>
      <Hr />
    </div>
  );
};

interface ButtonProps {
  color: string;
  backgroundcolor: string;
}
const TextAreaDiv = styled.textarea`
  height: 500px;
  width: calc(100% - 100px);
  margin: 50px;
  ${media.mobile_550} {
    display: flex;
    width: 90%;
    margin: 50px auto;
  }
`;
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
const MobileLayaout = styled.div`
  display: flex;
  ${media.mobile} {
    width: 330px;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
