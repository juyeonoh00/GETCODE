import QuillCustom from "@/components/common/textLibrary/QuillEditor";
import { useState } from "react";

const Test = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <QuillCustom text={text} setText={setText} />
      {/* <QuillCustom /> */}
    </div>
  );
};

export default Test;
