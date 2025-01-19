// import { useRef, useState, useMemo } from "react";
// import "react-quill/dist/quill.snow.css";
// import { AxiosError } from "axios";
// import dynamic from "next/dynamic";

// const ReactQuill = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });
// interface Base64toFileProps {
//   dataurl: any;
//   fileName: string;
// }
// const Base64toFile = ({ dataurl, fileName }: Base64toFileProps) => {
//   var arr = dataurl.split(","),
//     mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);

//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }

//   return new File([u8arr], fileName, { type: mime });
// };
// const QuillCustom = () => {
//   const QuillRef = useRef<ReactQuill>();
//   const [contents, setContents] = useState("");

//   // const imageHandler = () => {
//   //   // 파일을 업로드 하기 위한 input 태그 생성
//   //   const input = document.createElement("input");
//   //   const formData = new FormData();
//   //   let url = "";

//   //   input.setAttribute("type", "file");
//   //   input.setAttribute("accept", "image/*");
//   //   input.click();

//   //   // 파일이 input 태그에 담기면 실행 될 함수
//   //   input.onchange = async () => {
//   //     const file = input.files;
//   //     if (file !== null) {
//   //       formData.append("image", file[0]);

//   //       try {
//   //         //put 코드s
//   //         // 백엔드 개발자 분이 통신 성공시에 보내주는 이미지 url을 변수에 담는다.
//   //         // url = res.data.url;

//   //         // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
//   //         // 해당 DOM의 데이터가 필요하기에 useRef를 사용한다.
//   //         const range = QuillRef.current?.getEditor().getSelection()?.index;
//   //         if (range !== null && range !== undefined) {
//   //           let quill = QuillRef.current?.getEditor();

//   //           quill?.setSelection(range, 1);

//   //           quill?.clipboard.dangerouslyPasteHTML(
//   //             range,
//   //             `<img src=${url} alt="이미지 태그가 삽입됩니다." />`
//   //           );
//   //         }

//   //         return {
//   //           // ...res,
//   //           success: true,
//   //         };
//   //       } catch (error) {
//   //         const err = error as AxiosError;
//   //         return { ...err.response, success: false };
//   //       }
//   //     }
//   //   };
//   // };

//   // quill에서 사용할 모듈을 설정하는 코드 입니다.
//   // 원하는 설정을 사용하면 되는데, 저는 아래와 같이 사용했습니다.
//   // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀리게 됩니다.
//   const modules = useMemo(
//     () => ({
//       toolbar: {
//         container: [
//           ["bold", "italic", "underline", "strike", "blockquote"],
//           [{ size: ["small", false, "large", "huge"] }, { color: [] }],
//           [
//             { list: "ordered" },
//             { list: "bullet" },
//             { indent: "-1" },
//             { indent: "+1" },
//             { align: [] },
//           ],
//           ["image", "video"],
//         ],
//         // handlers: {
//         //   image: imageHandler,
//         // },
//       },
//     }),
//     []
//   );

//   return (
//     <>
//       <ReactQuill
//         ref={(element) => {
//           if (element !== null) {
//             QuillRef.current = element;
//           }
//         }}
//         value={contents}
//         onChange={setContents}
//         modules={modules}
//         theme="snow"
//         placeholder="내용을 입력해주세요."
//       />
//     </>
//   );
// };

// export default QuillCustom;

// import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
interface Props {
  setText: (newValue: string) => void;
  text: string;
}
const QuillCustom = ({ setText, text }: Props) => {
  const [value, setValue] = useState("");
  const imageHandler = () => {
     
  };
  const quillRef = useRef<any>();
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ font: [] }],
          // [{ size: ["small", "false", "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6] }],
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);
  const formats = [
    "font",
    // "size",
    "header",
    "color",
    "background",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  useEffect(() => {
    setText(value);
  }, [value]);
  return (
    <div
      style={{ height: "500px", width: "calc(100% - 100px)", margin: "50px" }}
    >
      <ReactQuill
        style={{ height: "400px", margin: "4px" }}
        // ref={quillRef}
        theme="snow"
        value={value}
        modules={modules}
        formats={formats}
        onChange={setValue}
        placeholder="내용을 입력하세요."
      />
    </div>
  );
};

export default QuillCustom;
