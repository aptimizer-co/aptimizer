"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/* useAdminLogin은 notice에서 관리자 로그인에 사용되는 훅이다. */
const useAdminLogin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (id === "admin" && password === "admin") {
      alert("로그인 성공!");
      router.push("/notice");
      sessionStorage.setItem("aptimizer-auth", "true");
    } else {
      alert("로그인 실패!");
    }
  };

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  return { id, setId, password, setPassword, handleLogin, handleInputChange };
};

export default useAdminLogin;
