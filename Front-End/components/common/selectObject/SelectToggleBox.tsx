import { relative } from "path";
import styled from "styled-components";
import {DeleteSVG} from "@/public/SVG/delete"
import { MouseEventHandler } from "react";
interface Type {
  text?: string;
  deleteTopic?: MouseEventHandler<HTMLSpanElement> | undefined;
}

const SelectToggleBox: React.FC<Type> = ({text, deleteTopic }) => {
  return (
    <RoundBoxDiv>
    <p>{text}</p>
    <span onClick={deleteTopic}>
        <DeleteSVG />
    </span>
    </RoundBoxDiv>
  );
};

export default SelectToggleBox;

const RoundBoxDiv = styled.div<Type>`
  display: flex; 
  justify-content: space-between;
  flex: 0 0 110px;
  height: 25px;
  border-radius: 30px;
  margin-right: 10px;
  margin-top: 10px;
  place-items: center;
  background-color:#D9D9D9;
  p {
    display: flex;
    margin-left: 15px;
    width: calc(100% - 15px);
    justify-content: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    color: black;
  }
  span{
    margin-right:8px;
    cursor:pointer;
  }
`;