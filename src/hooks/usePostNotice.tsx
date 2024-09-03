import { useState } from "react";
import { useRouter } from "next/navigation";

const usePostNotice = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [file, setFile] = useState("");
  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  });

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
          date: currentDate,
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
