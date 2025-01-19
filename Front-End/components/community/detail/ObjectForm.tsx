import styled from "styled-components";
import RoundBox from "@/components/common/selectObject/SelectRoundBox";
import { media } from "@/styles/mediaQuery";
import Toggle from "@/components/common/selectObject/SelectToggle";
import React, { useState } from "react";

const SelectSubject = (subject: any) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <RoundBox
        text={subject}
        backgroundcolor="#FFF1E4"
        border="#FF4B13"
        color="#FF4B13"
      />
      <p style={{ marginLeft: "10px", fontSize: "17px" }}>주제 내용</p>
    </div>
  );
};

const ObjectForm = (getData: any) => {
  const data = { category: getData?.category };
  // const subject = String(getData?.category[0]);
  const category = JSON.stringify(getData?.category);
  console.log(typeof category);
  return (
    <>
      <SelectSubject subject={category} />
      {/* <p>{getData?.category}</p> */}
    </>
  );
};
export default ObjectForm;
