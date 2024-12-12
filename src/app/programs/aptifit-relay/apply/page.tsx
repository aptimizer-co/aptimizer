import React from "react";
import styles from "./page.module.css";

export default function Apply() {
  return (
    <div className={styles.formContainer}>
      <span className={styles.requiredText}>*필수입력항목</span>
      <form className={styles.form}>
        <div className={styles.inputSection}>
          <label className={styles.label}>
            학교 또는 기관명<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
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
                  name="type"
                  value="parent"
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
                  name="type"
                  value="teacher"
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
                  name="type"
                  value="student"
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
            type="datetime-local"
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
            placeholder="희망장소을 기입해주세요."
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputSection}>
          <label className={styles.label}>문의 또는 전달사항</label>
          <textarea
            placeholder="궁금한 사항이나 전달하실 사항을 입력해 주세요."
            className={styles.inputField}
            rows={5}
          />
        </div>
        <footer className={styles.footer}>
          <button type="submit" className={styles.submitButton}>
            신청하기
          </button>
        </footer>
      </form>
    </div>
  );
}
