import styled from "styled-components";
import SelectRoundBox from "@/components/common/selectObject/SelectRoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/selectObject/SelectToggle";
import React, { useState } from "react";

interface SelectSubjectProps {
  subject: string[];
}
const SelectSubject = ({ subject }: SelectSubjectProps) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <SelectRoundBox
        text="주제"
        backgroundcolor="#FFF1E4"
        border="#FF4B13"
        color="#FF4B13"
      />
      <p style={{ marginLeft: "10px", fontSize: "17px" }}>{subject}</p>
    </div>
  );
};
const SelectIntroduction = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <SelectRoundBox
        text="프로젝트 소개"
        backgroundcolor="#FFF1E4"
        border="#FF4B13"
        color="#FF4B13"
      />
      <p style={{ marginLeft: "10px", fontSize: "17px" }}>주제 내용</p>
    </div>
  );
};
interface SelectTech {
  tech: any;
}
export const SelectTech = ({ tech }: SelectTech) => {
  return (
    <div style={{ display: "flex" }}>
      <SelectRoundBox
        text="기술 스택"
        backgroundcolor="#FFF1E4"
        border="#FF4B13"
        color="#FF4B13"
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          gap: "10px 0",
        }}
      >
        {tech.map((value: any) => (
          <SelectRoundBox
            text={value.techStack}
            backgroundcolor="#D9D9D9"
            border="white"
            color="black"
            fontWeight={500}
            key={value.id}
          />
        ))}
      </div>
    </div>
  );
};

const AddLink = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SelectRoundBox
        text="소스 링크"
        backgroundcolor="#FFF1E4"
        border="#FF4B13"
        color="#FF4B13"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          whiteSpace: "preLine",
        }}
      >
        <Link href="#" color="#5200FF">
          GITHUB
        </Link>
        <Link href="#" color="#54E78F">
          VELOG
        </Link>
        <Link href="#" color="#FFA800">
          GITLAB
        </Link>
      </div>
    </div>
  );
};

interface Props {
  color?: string;
}
const Link = styled.a<Props>`
  display: flex;
  background-color: ${(props) => props.color || "black"};
  color: white;
  width: 130px;
  height: 28px;
  place-items: center;
  text-align: top;
  justify-content: center;
  text-decoration: none;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;
const ObjectForm = (getData: any) => {
  console.log(getData);
  return (
    <>
      <SelectIntroduction />
      <SelectSubject subject={getData.subject} />
      <SelectTech tech={getData.techStacks} />
      <AddLink />
    </>
  );
};
export default ObjectForm;
