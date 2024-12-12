import { useState } from "react";
import { ApplyFormData } from "@/src/types/types";

export const useApplyForm = () => {
  const [formData, setFormData] = useState<ApplyFormData>({
    organization: "",
    manager: "",
    phone: "",
    email: "",
    targetGroup: [],
    participantCount: "", // number 대신 string으로 변경 (빈 입력값 처리를 위해)
    preferredDate: "",
    location: "",
    message: "",
  });

  // 이메일 형식 검증 함수
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 전화번호 검증 함수
  const isValidPhone = (phone: string): boolean => {
    return phone.length >= 7;
  };

  // 날짜 검증 함수 - 현재 시간(분)까지 체크
  const isValidDate = (dateString: string): boolean => {
    const selectedDate = new Date(dateString);
    const now = new Date();
    // 선택된 날짜와 현재 시간을 비교
    return selectedDate >= now;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 필수 입력 필드 목록 정의
    const requiredFields: (keyof ApplyFormData)[] = [
      "organization",
      "manager",
      "phone",
      "email",
      "targetGroup",
      "participantCount",
      "preferredDate",
      "location",
    ];

    // 빈 필드 확인
    // targetGroup은 배열이므로 길이가 0인지 확인
    // 나머지 필드는 빈 문자열 여부 확인
    const emptyFields = requiredFields.filter((field) => {
      if (field === "targetGroup") {
        return formData[field].length === 0;
      }
      return !formData[field];
    });

    // 빈 필드가 있으면 제출 중단
    if (emptyFields.length > 0) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }

    // 추가된 유효성 검사
    if (!isValidEmail(formData.email)) {
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      alert("전화번호는 최소 7자리 이상이어야 합니다.");
      return;
    }

    if (!isValidDate(formData.preferredDate)) {
      alert("선택한 날짜와 시간은 현재 시점 이후여야 합니다.");
      return;
    }

    try {
      // 제출 전 데이터 가공
      const submissionData = {
        ...formData,
        participantCount: parseInt(formData.participantCount) || 0,
        phone: formData.phone.replace(/-/g, ""),
      };

      // 원본 데이터와 가공된 데이터 모두 출력
      console.group("폼 제출 데이터");
      console.log("원본 데이터:", {
        organization: formData.organization,
        manager: formData.manager,
        phone: formData.phone,
        email: formData.email,
        targetGroup: formData.targetGroup,
        participantCount: formData.participantCount,
        preferredDate: formData.preferredDate,
        location: formData.location,
        message: formData.message,
      });
      console.log("백엔드 전송용 가공 데이터:", submissionData);
      console.groupEnd();

      // API 호출 로직 구현
      console.log("Form submitted:", submissionData);

      // 성공 시 폼 초기화
      setFormData({
        organization: "",
        manager: "",
        phone: "",
        email: "",
        targetGroup: [],
        participantCount: "",
        preferredDate: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // 전화번호 유효성 검사
    // 숫자가 아닌 모든 문자 제거 (/[^\d]/g)
    if (name === "phone") {
      const numbersOnly = value.replace(/[^\d]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numbersOnly,
      }));
      return;
    }

    // 참가자 수 유효성 검사
    // 빈 값이거나 양의 정수만 허용
    if (name === "participantCount") {
      if (value === "" || parseInt(value) > 0) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
      return;
    }

    // 기타 입력값은 검증 없이 저장
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      targetGroup: checked
        ? [...prev.targetGroup, value]
        : prev.targetGroup.filter((type) => type !== value),
    }));
  };

  return {
    formData,
    handleSubmit,
    handleInputChange,
    handleCheckboxChange,
  };
};
