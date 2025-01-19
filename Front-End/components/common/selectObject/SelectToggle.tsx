import { useState } from "react";
import styled from "styled-components";
import { media } from "@/styles/mediaQuery";
type onCreateProps = (value: string) => void;

interface OptionProps {
  options: string[];
  onCreate?: onCreateProps;
}

const SelectToggle: React.FC<OptionProps> = ({ options, onCreate }) => {
  return (
    <Select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        onCreate?.(e.target.value);
      }}
    >
      {options.map((option) => (
        <Option key={option}>{option}</Option>
      ))}
    </Select>
  );
};

export default SelectToggle;

const Option = styled.option`
  text-align: center;
`;

const Select = styled.select`
  display: flex;
  width: 364px;
  height: 28px;
  border-radius: 30px;
  border: 1px solid #3c3c3c;
  background: #fff;
  ${media.mobile} {
    width: 330px;
  }
`;
