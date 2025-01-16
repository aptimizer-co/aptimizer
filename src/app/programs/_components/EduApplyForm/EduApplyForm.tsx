"use client";

import React, { useState } from "react";
import styles from "./EduApplyForm.module.css";
import { useEduApplyForm } from "@/src/hooks/useEduApplyForm";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/src/components/LoadingSpinner/LoadingSpinner";

export const EduApplyForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    formData,
    handleSubmit,
    handleInputChange,
    handleCheckboxChange,
    isSubmitting,
  } = useEduApplyForm();

  const handleError = (error: string) => {
    alert(error);
    setIsLoading(false);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 임시로 신청을 막고 알림 표시
    alert("에듀 프리미엄 신청 가능한 기간이 아닙니다.");
    return;

    // 이미 제출 중이면 중복 제출 방지
    if (isSubmitting || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await handleSubmit(e);

      if (!result.success) {
        handleError(result.error || "알 수 없는 오류가 발생했습니다.");
        return;
      }

      if (result.apply_id) {
        router.push(`/edu-premium/complete?apply_id=${result.apply_id}`);
      }
    } catch (error) {
      console.error("폼 제출 중 오류:", error);
      handleError(
        "예기치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <LoadingSpinner />
        </div>
      )}

      <form onSubmit={onSubmit}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>프로그램 선택</div>
          <span className={styles.requiredText}>*필수입력항목</span>
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            참여 프로그램<span className={styles.required}>*</span>
          </label>
          <div className={styles.checkboxContainer}>
            <div className={styles.checkboxGroup}>
              <div
                className={`${styles.checkboxWrapper} ${
                  formData.targetProgram.includes("2025_1")
                    ? styles.checked
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  id="2025_1"
                  name="targetProgram"
                  value="2025_1"
                  checked={formData.targetProgram.includes("2025_1")}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
                <label htmlFor="2025_1" className={styles.checkboxLabel}>
                  2025년 1기
                  <span className={styles.programDetail}>대상: 중학생</span>
                  <span className={styles.programDetail}>
                    캠프 일정: 7월 11일~12일
                  </span>
                </label>
              </div>
              <div
                className={`${styles.checkboxWrapper} ${
                  formData.targetProgram.includes("2025_2")
                    ? styles.checked
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  id="2025_2"
                  name="targetProgram"
                  value="2025_2"
                  checked={formData.targetProgram.includes("2025_2")}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
                <label htmlFor="2025_2" className={styles.checkboxLabel}>
                  2025년 2기
                  <span className={styles.programDetail}>대상: 고등학생</span>
                  <span className={styles.programDetail}>
                    캠프 일정: 7월 18일~19일
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>참여 학생 정보</div>
          <span className={styles.requiredText}>*필수입력항목</span>
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            이름<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            placeholder="학생 이름을 입력해 주세요."
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            연락처<span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            name="studentPhone"
            value={formData.studentPhone}
            onChange={handleInputChange}
            placeholder="연락처를 입력해 주세요. ('-' 제외)"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            학교<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleInputChange}
            placeholder="학교명을 입력해 주세요. (예시: 서울고등학교)"
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            학년<span className={styles.required}>*</span>
          </label>
          <select
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            className={styles.inputField}
          >
            <option value="">학년을 선택해주세요</option>
            {[1, 2, 3, 4, 5, 6].map((grade) => (
              <option key={grade} value={grade}>
                {grade}학년
              </option>
            ))}
          </select>
        </div>

        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>참여 학생 보호자 정보</div>
          <span className={styles.requiredText}>*필수입력항목</span>
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            보호자 이름<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleInputChange}
            placeholder="보호자 이름을 입력해 주세요."
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            보호자 연락처<span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleInputChange}
            placeholder="보호자 연락처를 입력해 주세요. ('-' 제외)"
            className={styles.inputField}
          />
        </div>

        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>EFETE 계약당사자 정보</div>
          <span className={styles.requiredText}>*필수입력항목</span>
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            계약당사자 이름<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="contractorName"
            value={formData.contractorName}
            onChange={handleInputChange}
            placeholder="계약당사자 이름을 입력해 주세요."
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            계약당사자 연락처<span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            name="contractorPhone"
            value={formData.contractorPhone}
            onChange={handleInputChange}
            placeholder="계약당사자 연락처를 입력해 주세요. ('-' 제외)"
            className={styles.inputField}
          />
        </div>

        <footer className={styles.footer}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading || isSubmitting}
          >
            {isLoading ? "신청 접수 중..." : "신청하기"}
          </button>
        </footer>
      </form>
    </div>
  );
};
