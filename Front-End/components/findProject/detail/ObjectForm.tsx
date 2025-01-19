import styled from "styled-components";
import SelectRoundBox from "@/components/common/selectObject/SelectRoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/selectObject/SelectToggle";
import React, { useState } from "react";
interface SelectStatusProps {
  status: boolean;
}
export const SelectStatus = ({ status }: SelectStatusProps) => {
  const backgroundColor = ["white", "#D9D9D9"];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SelectRoundBox text="모집 여부" />
      <SelectRoundBox
        text="모집 중"
        backgroundcolor={backgroundColor[Number(status)]}
        border="black"
        color="black"
        fontWeight={500}
      />
      <SelectRoundBox
        text="모집 완료"
        backgroundcolor={backgroundColor[Number(!status)]}
        border="black"
        color="black"
        fontWeight={500}
      />
    </div>
  );
};
interface SelectSubjectProps {
  subject: string;
}
export const SelectSubject = ({ subject }: SelectSubjectProps) => {
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
            text={value.teckStack}
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
const SelectedSources = styled.div`
  display: flex;
  flex: 0 0 100px;
  height: 25px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: #d9d9d9;
  border-radius: 30px;
`;

export const WishPart = () => {
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
        <SelectRoundBox
          text="Spring Boot"
          backgroundcolor="#D9D9D9"
          border="white"
          color="black"
          fontWeight={500}
        />
        <SelectRoundBox
          text="Spring Boot"
          backgroundcolor="#D9D9D9"
          border="white"
          color="black"
          fontWeight={500}
        />
        <SelectRoundBox
          text="Spring Boot"
          backgroundcolor="#D9D9D9"
          border="white"
          color="black"
          fontWeight={500}
        />
        <SelectRoundBox
          text="Spring Boot"
          backgroundcolor="#D9D9D9"
          border="white"
          color="black"
          fontWeight={500}
        />
      </div>
    </div>
  );
};

interface SelectOnOffProps {
  onoff: boolean;
}
export const SelectOnOff = ({ onoff }: SelectOnOffProps) => {
  const backgroundColor = ["white", "#D9D9D9"];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SelectRoundBox text="온/오프라인" />
      <SelectRoundBox
        text="온라인"
        backgroundcolor={backgroundColor[Number(!onoff)]}
        border="black"
        color="black"
        fontWeight={500}
      />
      <SelectRoundBox
        text="오프라인"
        backgroundcolor={backgroundColor[Number(onoff)]}
        border="black"
        color="black"
        fontWeight={500}
      />
    </div>
  );
};
interface SelectLocationProps {
  location: string;
}
export const SelectLocation = ({ location }: SelectLocationProps) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <SelectRoundBox
        text="모임 지역"
        backgroundcolor="#FFF1E4"
        border="#FF4B13"
        color="#FF4B13"
      />
      <p style={{ marginLeft: "10px", fontSize: "17px" }}>{location}</p>
    </div>
  );
};
interface ContectLinkProps {
  link: string[];
}
const ContectLink = ({ link }: ContectLinkProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SelectRoundBox
        text="신청 방법"
        backgroundcolor="#FFF1E4"
        border="#FF4B13"
        color="#FF4B13"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          whiteSpace: "preLine",
        }}
      >
        <Link href="#" color="#5200FF">
          E-mail
        </Link>
        <Link href="#" color="#54E78F">
          Phone
        </Link>
        <Link href="#" color="#FFA800">
          Open-Kakao
        </Link>
        <Link href="#" color="#FF451D">
          Form
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
  console.log(getData.techStacks);
  console.log(getData);
  return (
    <>
      <SelectSubject subject={getData.subject} />
      <SelectStatus status={Boolean(getData.recruitment)} />
      <SelectOnOff onoff={Boolean(getData.online)} />
      <SelectTech tech={getData.techStacks} />
      <SelectLocation location={getData.siDo + " / " + getData.guGun} />
      <ContectLink link={getData.contact} />
    </>
  );
};
export default ObjectForm;
