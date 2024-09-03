import { useState, useEffect } from "react";

const useGetNotice = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const getNotice = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_NOTICE}`);

        // 응답이 성공적인지 확인합니다
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // 응답 데이터를 JSON으로 변환합니다
        const data = await res.json();
        setNotice(data.slice(0, 5));
      } catch (error) {
        console.log(error.message);
      }
    };
    getNotice();
  }, []);

  return notice;
};

export default useGetNotice;
