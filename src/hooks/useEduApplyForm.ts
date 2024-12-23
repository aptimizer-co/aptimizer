import { useState, useCallback } from "react";

interface EduApplyFormData {
  // 프로그램 선택
  targetProgram: string[];

  // 참여 학생 정보
  studentName: string;
  studentPhone: string;
  school: string;
  grade: string;

  // 참여 학생 보호자 정보
  guardianName: string;
  guardianPhone: string;

  // EFETE 계약당사자 정보
  contractorName: string;
  contractorPhone: string;
}

export const useEduApplyForm = () => {
  const [formData, setFormData] = useState<EduApplyFormData>({
    targetProgram: [],
    studentName: "",
    studentPhone: "",
    school: "",
    grade: "",
    guardianName: "",
    guardianPhone: "",
    contractorName: "",
    contractorPhone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const DEBOUNCE_DELAY = 3000;

  // 전화번호 검증 함수
  const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^\d{10,11}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = useCallback((data: EduApplyFormData): string | null => {
    // 필수 필드 검증
    if (!data.targetProgram.length) {
      return "프로그램을 선택해주세요.";
    }

    // 학생 정보 검증
    if (
      !data.studentName ||
      !data.studentPhone ||
      !data.school ||
      !data.grade
    ) {
      return "학생 정보를 모두 입력해주세요.";
    }

    // 보호자 정보 검증
    if (!data.guardianName || !data.guardianPhone) {
      return "보호자 정보를 모두 입력해주세요.";
    }

    // 계약당사자 정보 검증
    if (!data.contractorName || !data.contractorPhone) {
      return "계약당사자 정보를 모두 입력해주세요.";
    }

    // 전화번호 형식 검증
    const phones = [
      data.studentPhone,
      data.guardianPhone,
      data.contractorPhone,
    ];
    for (const phone of phones) {
      if (!isValidPhone(phone)) {
        return "전화번호 형식이 올바르지 않습니다.";
      }
    }

    return null;
  }, []);

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

        // 전화번호에서 하이픈 제거
        const submissionData = {
          ...formData,
          studentPhone: formData.studentPhone.replace(/-/g, ""),
          guardianPhone: formData.guardianPhone.replace(/-/g, ""),
          contractorPhone: formData.contractorPhone.replace(/-/g, ""),
        };

        // 실제 API 호출
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/apply_edu_premium`,
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
        const errorMessage =
          error instanceof Error
            ? error.message
            : "신청 중 오류가 발생했습니다.";
        console.log("에러 발생:", errorMessage);

        return {
          success: false,
          error: errorMessage,
        };
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, lastSubmitTime, validateForm]
  );

  const resetForm = () => {
    setFormData({
      targetProgram: [],
      studentName: "",
      studentPhone: "",
      school: "",
      grade: "",
      guardianName: "",
      guardianPhone: "",
      contractorName: "",
      contractorPhone: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (["studentPhone", "guardianPhone", "contractorPhone"].includes(name)) {
      const numbersOnly = value.replace(/[^\d]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numbersOnly,
      }));
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
      targetProgram: checked
        ? [...prev.targetProgram, value]
        : prev.targetProgram.filter((type) => type !== value),
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
