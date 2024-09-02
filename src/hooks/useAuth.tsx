"use client";

import { useState, useEffect } from "react";

/* useAuth는 notice에서 게시글을 쓸 수 있는 권한의 존재 유무를 파악하는데 사용되는 훅이다. */

const useAuth = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("aptimizer-auth");

    if (auth) {
      setAuth(true);
    }
  }, []);

  return auth;
};

export default useAuth;
