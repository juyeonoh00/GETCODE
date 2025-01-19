import styled from "styled-components";
import RoundBox from "@/components/common/selectObject/SelectRoundBox";
import { media } from "@/styles/mediaQuery";
import React, { useState, useEffect } from "react";
import { SidoGugunData } from "@/components/common/objectAllData/SearchToggleData";

interface Props {
  text: string;
  setSiDo: React.Dispatch<React.SetStateAction<string>>;
  setGuGun: React.Dispatch<React.SetStateAction<string>>;
}

const SelectLocation = ({ setSiDo, setGuGun, text }: Props) => {
  const [optionSubject, setOptionSubject] = useState<any>();
  const [selectedKey, setSelectedKey] = useState<number>(0);
  const [gu, setGu] = useState<string>("");
  const selectedOption = optionSubject?.find(
    (option: { key: number; }) => option.key === selectedKey
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const key = parseInt(event.target.value, 10);
    setSelectedKey(key);
  };

  useEffect(() => {
    if (selectedOption) {
      setSiDo(selectedOption.siDo), setGuGun(gu);
    }
  }, [gu]);

  /** 시도/구군 데이터 불러오기 */
  useEffect(()=>{
    SidoGugunData({setData:setOptionSubject})
  },[SidoGugunData]);

  return (
    <MobileLayaout>
      <Query>
        <RoundBox text={text} />
      </Query>
      <SelectBoxDiv>
        <select value={selectedKey} onChange={handleSelectChange}>
          {optionSubject?.map((option:any) => (
            <option key={option.key} value={option.key}>
              {option.siDo}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => {
            setGu(e.target.value);
          }}
        >
          {selectedOption?.guGun.map((gu:any) => (
            <option key={gu} value={gu}>
              {gu}
            </option>
          ))}
        </select>
      </SelectBoxDiv>
    </MobileLayaout>
  );
};
export default SelectLocation;
const SelectBoxDiv = styled.div`
  display: flex;
  select {
    width: 200px;
    height: 28px;
    margin-right: 10px;
    padding-left: 10px;
    ${media.mobile} {
      width: 160px;
    }
  }
`;
const Query = styled.div`
  ${media.mobile} {
    width: 100%;
  }
`;
const MobileLayaout = styled.div`
  display: flex;
  ${media.mobile} {
    width: 330px;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
