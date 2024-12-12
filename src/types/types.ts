export interface ApplyFormData {
  organization: string; // 학교 또는 기관명
  manager: string; // 담당자
  phone: string; // 연락처
  email: string; // 이메일
  targetGroup: string[]; // 대상자 (학부모, 교사, 학생)
  participantCount: string; // 희망인원
  preferredDate: string; // 희망일시
  location: string; // 희망장소
  message: string; // 문의 또는 전달사항
}
