"use client";

import React, { useState } from "react";
import styles from "./ApplyForm.module.css";
import { useApplyForm } from "@/src/hooks/useApplyForm";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/src/components/LoadingSpinner/LoadingSpinner";

export const ApplyForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    formData,
    handleSubmit,
    handleInputChange,
    handleCheckboxChange,
    isSubmitting,
  } = useApplyForm();

  const onSubmit = async (e: React.FormEvent) => {
    try {
      setIsLoading(true);
      const result = await handleSubmit(e);

      if (result.error) {
        alert(result.error);
        return;
      }

      if (result.success && result.apply_id) {
        router.push(
          `/programs/aptifit-relay/complete?apply_id=${result.apply_id}`
        );
      }
    } catch (error) {
      console.error("폼 제출 중 오류:", error);
      alert("예기치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
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
      <span className={styles.requiredText}>*필수입력항목</span>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            학교 또는 기관명<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            placeholder="학교 또는 기관명을 입력해 주세요."
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            담당자<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="manager"
            value={formData.manager}
            onChange={handleInputChange}
            placeholder="담당자 성함을 입력해 주세요."
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            연락처<span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="연락처를 입력해 주세요. ('-' 제외)"
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputSection}>
          <label className={styles.label}>
            이메일<span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="이메일을 입력해 주세요."
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            대상자<span className={styles.required}>*</span>
          </label>
          <div className={styles.checkboxContainer}>
            <div className={styles.checkboxGroup}>
              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="parent"
                  name="targetGroup"
                  value="parent"
                  checked={formData.targetGroup.includes("parent")}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
                <label htmlFor="parent" className={styles.checkboxLabel}>
                  학부모
                </label>
              </div>
              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="teacher"
                  name="targetGroup"
                  value="teacher"
                  checked={formData.targetGroup.includes("teacher")}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
                <label htmlFor="teacher" className={styles.checkboxLabel}>
                  교사
                </label>
              </div>
              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="student"
                  name="targetGroup"
                  value="student"
                  checked={formData.targetGroup.includes("student")}
                  onChange={handleCheckboxChange}
                  className={styles.checkbox}
                />
                <label htmlFor="student" className={styles.checkboxLabel}>
                  학생
                </label>
              </div>
            </div>
            <p className={styles.infoText}>
              위 항목은 버튼을 눌러 중복 선택이 가능합니다.
            </p>
          </div>
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            희망인원<span className={styles.required}>*</span>
          </label>
          <input
            type="number"
            name="participantCount"
            value={formData.participantCount}
            onChange={handleInputChange}
            placeholder="희망인원을 숫자로 기입해주세요."
            className={styles.inputField}
            min="1"
            step="1"
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            희망일시<span className={styles.required}>*</span>
          </label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleInputChange}
            placeholder="희망일시를 선택해주세요."
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            희망장소<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="희망장소을 기입해주세요."
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>문의 또는 전달사항</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="궁금한 사항이나 전달하실 사항을 입력해 주세요."
            className={styles.inputField}
            rows={5}
          />
        </div>
        <footer className={styles.footer}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading || isSubmitting}
          >
            {isLoading || isSubmitting ? "신청 접수 중" : "신청하기"}
          </button>
        </footer>
      </form>
    </div>
  );
};
