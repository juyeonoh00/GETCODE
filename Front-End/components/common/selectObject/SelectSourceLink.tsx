import styled from "styled-components";
import { useState } from "react";
import { error } from "console";
import { validateHeaderValue } from "http";
import { media } from "@/styles/mediaQuery";
interface LinkProps {
  linkType: string;
  value: string;
}
interface Type {
  text: string;
  fontSize?: string;
  color?: string;
  allLink: LinkProps[];
  setAllLink: (newValue: LinkProps[]) => void;
  pattern?: RegExp;
}
interface Style {
  color: string;
}

const SourceLink: React.FC<Type> = ({
  text,
  fontSize,
  color = "black",
  allLink,
  setAllLink,
  pattern = /.*/,
}) => {
  const [link, setLink] = useState<string>("");
  const [isBtn, setIsBtn] = useState<boolean>(true);
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  return (
    <RoundBoxDiv>
      <LinkCategory color={color}>
        <p style={{ fontSize: fontSize }}>{text}</p>
      </LinkCategory>
      <LinkInput color={color}>
        {isBtn ? (
          <>
            <input value={link} onChange={handleOnchange} />
            <button
              onClick={() => {
                if (link && pattern.test(link) === true) {
                  const newLink: LinkProps = { linkType: text, value: link };
                  if (allLink) {
                    if (allLink.some((item) => item.linkType === text)) {
                      const updatedLinks = allLink.map((item) =>
                        item.linkType === text ? newLink : item
                      );
                      setAllLink(updatedLinks);
                    } else {
                      setAllLink([...allLink, newLink]);
                    }
                  } else {
                    setAllLink([newLink]);
                  }
                  setIsBtn(false);
                } else {
                  alert(text + " 형식에 맞춰 입력하세요.");
                }
              }}
            >
              add
            </button>
          </>
        ) : (
          <>
            <div>{link}</div>
            <button
              onClick={() => {
                setIsBtn(true);
              }}
            >
              수정
            </button>
          </>
        )}
      </LinkInput>
    </RoundBoxDiv>
  );
};

export default SourceLink;

const RoundBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 28px;
  align-items: center;
  margin-right: 15px;
  background-color: white;
  ${media.mobile} {
    width: 330px;
  }
`;

const LinkCategory = styled.div<Style>`
  display: flex;
  margin: 0;
  height: 100%;
  width: 140px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: 5px 0 0 5px;
  p {
    color: white;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
  }
`;
const LinkInput = styled.div<Style>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  border: none;
  border: 1px solid ${(props) => props.color};
  border-radius: 0 5px 5px 0;
  input {
    height: 100%;
    width: 100%;
    padding-left: 10px;
    border: none;
  }
  button {
    display: flex;
    width: 50px;
    height: 20px;
    align-items: center;
    justify-content: center;
    margin: 5px;
    background-color: ${(props) => props.color};
    border-radius: 0 5px 5px 0;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 700;
  }
  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;
