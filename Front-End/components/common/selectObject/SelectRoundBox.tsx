import { media } from "@/styles/mediaQuery";
import styled from "styled-components";
interface Type {
  text?: string;
  color?: string;
  backgroundcolor?: string;
  border?: string;
  fontWeight?: number;
  onClick?: any;
  cursor?: string;
}

const SelectRoundBox: React.FC<Type> = ({
  text,
  color = "#FF4B13",
  backgroundcolor = "#FFF1E4",
  border = "#FF4B13",
  fontWeight = 700,
  onClick,
  cursor = "default",
}) => {
  return (
    <RoundBoxDiv
      color={color}
      backgroundcolor={backgroundcolor}
      border={border}
      fontWeight={fontWeight}
      onClick={onClick}
      cursor={cursor}
    >
      <p>{text}</p>
    </RoundBoxDiv>
  );
};

export default SelectRoundBox;

const RoundBoxDiv = styled.div<Type>`
  display: flex;
  width: 130px;
  flex: 0 0 130px;
  height: 28px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.border};
  margin-right: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundcolor};
  cursor: ${(props) => props.cursor};

  p {
    display: flex;
    margin: 0;
    font-family: Inter;
    font-size: 16px;
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.color};
  }
`;
