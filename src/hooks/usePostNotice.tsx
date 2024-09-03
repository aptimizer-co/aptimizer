import { useState } from "react";
import { useRouter } from "next/navigation";

const usePostNotice = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [file, setFile] = useState("");

  const handleInput = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = fetch(`${process.env.NEXT_PUBLIC_API_NOTICE}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
          image: "",
        }),
      });

      console.log(res);
    } catch (error) {
      console.error(error);
    }

    router.push("/notice");
  };

  return { title, setTitle, content, setContent, handleInput, handleSubmit };
};

export default usePostNotice;
