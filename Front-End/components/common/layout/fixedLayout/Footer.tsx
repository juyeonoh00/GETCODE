import styled from "styled-components";

const Footer= () => {
  return (
    <FooterDiv>
      <TextDiv>
      <a href="">공지사항</a>
      <a href="">개인정보 이용 처리 방침</a>
      <a href="">이용 약관</a>
      </TextDiv>
    </FooterDiv>
  );
}
export default Footer;
const TextDiv =styled.div`
  width:1000px;
`
const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  padding: 40px 60px; //40
  background-color: #ff4b13;
  a {
    margin: 0 10px;
    text-decoration: none;
    color: black;
    font-family: Inter;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
  }
`;
