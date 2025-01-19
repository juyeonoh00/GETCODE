import styled from "styled-components";
import { useState } from "react";
import { ProfileSVG } from "@/public/SVG/profile";
import { POST, GET } from "@/pages/api/axios";
interface CommentProps {
  id: number;
  name: string;
  date: string;
  comment: string;
}

const DetailComment: React.FC<CommentProps> = ({ id, name, date, comment }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 0",
        borderBottom: "1px solid #FFD4AC",
      }}
    >
      <CommentBox>
        <ProfileSVG size="30" />
        <p>{name}</p>
        <p style={{ fontSize: "12px" }}>{date}</p>
      </CommentBox>
      <p
        style={{ margin: "20px 50px", lineHeight: "normal", fontSize: "14px" }}
      >
        {comment}
      </p>
    </div>
  );
};

// const CommentList: React.FC<CommentProps> = ({id, name, date, comment}) =>{
const CommentList = () => {
  // const apiUrl = `http://52.78.81.149:8080/api/${pageApi}/${studyId}`;
  // const [getCommnetList, setCommentList] = useState<DetailCommentFormProps>([]);
  // const getFindStudyBulletinData = async () => {
  //   await GET(apiUrl)
  //     .then((res) => {
  //       setCommentList(res);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // getFindStudyBulletinData();
  // console.log(getCommnetList);
  return (
    <div
      style={{
        margin: "20px 0",
        padding: "10px 20px",
        backgroundColor: "#FFF1E4",
      }}
    >
      <DetailComment
        id={1}
        name="닉네임1"
        date="2023.01.01"
        comment="댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용 댓글 작성 내용"
      />
      <DetailComment id={2} name="닉네임2" date="2023.01.01" comment={""} />
    </div>
  );
};
interface commnetProps {
  content: string;
  modifiedDate: string;
  email: string;
  nickname: string;
}
interface DetailCommentFormProps {
  comments: commnetProps[];
}
const DetailCommentForm = (comments: DetailCommentFormProps) => {
  console.log(comments);
  // const [newComment, setNewComment] = useState<string>("");

  const NewCommnet = (e: React.ChangeEvent<HTMLInputElement>) => {

  };
  return (
    <Layout>
      <p style={{ margin: "20px 0" }}>
        댓글 {Object.keys(comments).length - 1}개
      </p>
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "10px 40px",
          alignItems: "center",
        }}
      >
        <ProfileSVG size="40" />
        <SearchInputBar type="text" onChange={NewCommnet} />
        <Button type="submit">등록</Button>
      </div>

      <CommentList />
    </Layout>
  );
};

export default DetailCommentForm;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 0 30px;
  margin: 0;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const SearchInputBar = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 3px solid #ff993a;
  margin: 0 10px;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: #ff993a;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    margin: 0 10px;
  }
`;
