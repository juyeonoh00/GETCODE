import styled from "styled-components";
import SelectRoundBox from "@/components/common/selectObject/SelectRoundBox";
import { media } from "@/styles/mediaQuery";
import SelectToggle from "@/components/common/selectObject/SelectToggle";
import React, { useState, useEffect } from "react";
import SourceLink from "@/components/common/selectObject/SelectSourceLink";
import ToggleRoundBox from "@/components/common/selectObject/SelectToggleBox";
import { POST, GET } from "@/pages/api/axios";

interface SelectStatusProps {
  status: boolean;
  setStatus: (newValue: boolean) => void;
}

export const SelectStatus = ({ status, setStatus }: SelectStatusProps) => {
  const backgroundColor = ["white", "#00FF1A"];

  return (
    <MobileLayaout>
      <Query>
        <SelectRoundBox text="모집 여부" />
      </Query>
      <SelectRoundBox
        text="모집 중"
        backgroundcolor={backgroundColor[Number(status)]}
        border="black"
        color="black"
        fontWeight={500}
        cursor={"pointer"}
        onClick={() => {
          setStatus(true);
        }}
      />
      <SelectRoundBox
        text="모집 완료"
        backgroundcolor={backgroundColor[Number(!status)]}
        border="black"
        color="black"
        fontWeight={500}
        cursor={"pointer"}
        onClick={() => {
          setStatus(false);
        }}
      />
    </MobileLayaout>
  );
};

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

interface SelectTechProps {
  tech: string[];
  setTech: React.Dispatch<React.SetStateAction<string[]>>;
}
interface SelectOnOffProps {
  onoff: boolean;
  setOnoff: (newValue: boolean) => void;
}

export const SelectOnOff = ({ onoff, setOnoff }: SelectOnOffProps) => {
  const backgroundColor = ["white", "#00FF1A"];
  return (
    <MobileLayaout>
      <Query>
        <SelectRoundBox text="온/오프라인" />
      </Query>
      <SelectRoundBox
        text="온라인"
        backgroundcolor={backgroundColor[Number(onoff)]}
        border="black"
        color="black"
        fontWeight={500}
        cursor={"pointer"}
        onClick={() => {
          setOnoff(true);
        }}
      />
      <SelectRoundBox
        text="오프라인"
        backgroundcolor={backgroundColor[Number(!onoff)]}
        border="black"
        color="black"
        fontWeight={500}
        cursor={"pointer"}
        onClick={() => {
          setOnoff(false);
        }}
      />
    </MobileLayaout>
  );
};
export const SelectTech = ({ tech, setTech }: SelectTechProps) => {
  const optionSubject = [
    "기술 스택을 선택하세요",
    "Java",
    "C#",
    "Python",
    "php",
    "Node.js",
    "Go",
    "Ruby",
    "Kotlin",
    "Swift",
    "Peal",
    "Spring",
    "Django",
    "Express.js",
    "Flask",
    "Rails",
    "vue.js",
    "Springboot",
    "Next.js",
    "Nest.js",
    "MySQL",
    "Oracle",
    "PostgreSQL",
    "MariaDB",
    "Redis",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "React",
    "ReactNative",
    "Html",
    "Css",
    "Flutter",
    "Dart",
    "Git",
    "Github",
    "AWS",
  ];
  const handleInput = (value: string) => {
    if (value !== "기술 스택을 선택하세요" && !tech.includes(value)) {
      setTech((prev) => [...prev, value]);
    }
  };

  const deleteTopic = (value: string) => {
    const newTopic = tech.filter((tech) => tech !== value);
    setTech(newTopic);
  };

  return (
    <MobileLayaout>
      <SelectRoundBox text="기술 스택" />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <SelectToggle
          onCreate={(value) => {
            handleInput(value);
          }}
          options={optionSubject}
        />
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {tech.map((value) => (
            <ToggleRoundBox
              key={value}
              text={value}
              deleteTopic={() => {
                deleteTopic(value);
              }}
            />
          ))}
        </div>
      </div>
    </MobileLayaout>
  );
};

interface WishPartProps {
  wishPart: string[];
  setWishPart: React.Dispatch<React.SetStateAction<string[]>>;
}

interface LinkProps {
  linkType: string;
  value: string;
}
interface AddLinkProps {
  allLink: LinkProps[];
  setAllLink: (newValue: LinkProps[]) => void;
}
export const AddLink = ({ allLink, setAllLink }: AddLinkProps) => {
  return (
    <MobileLayaout>
      <SelectRoundBox text="신청 방법" />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <SourceLink
          allLink={allLink}
          setAllLink={setAllLink}
          text="email"
          color="#5200FF"
          pattern={/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/}
        />
        <SourceLink
          allLink={allLink}
          setAllLink={setAllLink}
          text="Phone"
          color="#54E78F"
          pattern={/[0-9]{3}-[0-9]{4}-[0-9]{4}/}
        />
        <SourceLink
          allLink={allLink}
          setAllLink={setAllLink}
          text="Open-Kakao"
          color="#FFA800"
          fontSize="14px"
        />
        <SourceLink
          allLink={allLink}
          setAllLink={setAllLink}
          text="Form"
          color="#FF451D"
        />
      </div>
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

const Query = styled.div`
  ${media.mobile} {
    width: 100%;
  }
`;
