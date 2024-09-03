"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

const useUpdateNotice = () => {
  const params = useParams();
  const router = useRouter();

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleInput = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = fetch(`${process.env.NEXT_PUBLIC_API_NOTICE}/${params.id}`, {
        method: "PATCH",
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

    setEditMode(false);
  };

  const editPost = () => {
    setEditMode(true);
  };

  const deletePost = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_NOTICE}/${params.id}`, {
        method: "DELETE",
      });
      alert("글이 삭제됐습니다!");
    } catch (error) {
      console.error(error);
    }

    router.push("/notice");
  };

  useEffect(() => {
    const getNoticeDetail = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_NOTICE}/${params.id}`);

        // 응답이 성공적인지 확인합니다
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // 응답 데이터를 JSON으로 변환합니다
        const data = await res.json();

        const { title, content } = data;
        setTitle(title);
        setContent(content);
      } catch (error) {
        console.log(error.message);
      }
    };
    getNoticeDetail();
  }, []);

  return {
    editMode,
    setEditMode,
    title,
    setTitle,
    content,
    setContent,
    handleInput,
    handleSubmit,
    editPost,
    deletePost,
  };
};

export default useUpdateNotice;
