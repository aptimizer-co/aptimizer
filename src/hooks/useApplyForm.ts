import { useState, useCallback } from "react";
import { ApplyFormData } from "@/src/types/types";

export const useApplyForm = () => {
  const [formData, setFormData] = useState<ApplyFormData>({
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const DEBOUNCE_DELAY = 3000;

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
    return selectedDate >= now;
  };

  const handleSubmit = useCallback(
    async (
      e: React.FormEvent
    ): Promise<{ success: boolean; apply_id?: string; error?: string }> => {
      e.preventDefault();

      // 디바운스 체크
      const now = Date.now();
      if (now - lastSubmitTime < DEBOUNCE_DELAY) {
        return {
          success: false,
          error: "요청이 너무 많습니다. 잠시 후에 다시 시도해주세요.",
        };
      }

      setIsSubmitting(true);
      setLastSubmitTime(now);

      try {
        // 유효성 검사
        const validationError = validateForm(formData);
        if (validationError) {
          return { success: false, error: validationError };
        }

        const submissionData = {
          ...formData,
          participantCount: parseInt(formData.participantCount) || 0,
          phone: formData.phone.replace(/-/g, ""),
        };

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/apply`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(submissionData),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "신청 처리 중 오류가 발생했습니다.");
        }

        // 성공 시 폼 초기화
        resetForm();
        return { success: true, apply_id: data.apply_id };
      } catch (error) {
        return {
          success: false,
          error:
            error instanceof Error
              ? error.message
              : "신청 중 오류가 발생했습니다.",
        };
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, lastSubmitTime]
  );

  // 폼 유효성 검사 함수
  const validateForm = (data: ApplyFormData): string | null => {
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

    if (
      requiredFields.some((field) =>
        field === "targetGroup" ? data[field].length === 0 : !data[field]
      )
    ) {
      return "필수 항목을 모두 입력해주세요.";
    }

    if (!isValidEmail(data.email)) {
      return "올바른 이메일 형식이 아닙니다.";
    }

    if (!isValidPhone(data.phone)) {
      return "전화번호는 최소 7자리 이상이어야 합니다.";
    }

    if (!isValidDate(data.preferredDate)) {
      return "선택한 날짜는 현재 시점 이후여야 합니다.";
    }

    return null;
  };

  // 폼 초기화 함수
  const resetForm = () => {
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
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numbersOnly = value.replace(/[^\d]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numbersOnly,
      }));
      return;
    }

    if (name === "participantCount") {
      if (value === "" || parseInt(value) > 0) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
      return;
    }

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
    isSubmitting,
  };
};
