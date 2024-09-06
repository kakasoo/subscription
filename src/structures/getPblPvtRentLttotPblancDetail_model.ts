import { tags } from "typia";

export type getPblPvtRentLttotPblancDetail_model = {
  /**
   * 주택관리번호
   */
  HOUSE_MANAGE_NO?: string;
  /**
   * 공고번호
   */
  PBLANC_NO?: string;
  /**
   * 주택명
   */
  HOUSE_NM?: string;
  /**
   * 주택구분코드
   */
  HOUSE_SECD?: string;
  /**
   * 주택구분코드명
   */
  HOUSE_SECD_NM?: string;
  /**
   * 주택상세구분코드
   */
  HOUSE_DETAIL_SECD?: string;
  /**
   * 주택상세구분코드명
   */
  HOUSE_DETAIL_SECD_NM?: string;
  /**
   * 주택구분
   */
  SEARCH_HOUSE_SECD?: string;
  /**
   * 모집공고일(YYYYMMDD)
   */
  RCRIT_PBLANC_DE?: string;
  /**
   * 청약접수시작일
   */
  SUBSCRPT_RCEPT_BGNDE?: string;
  /**
   * 청약접수종료일
   */
  SUBSCRPT_RCEPT_ENDDE?: string;
  /**
   * 당첨자발표일
   */
  PRZWNER_PRESNATN_DE?: string;
  /**
   * 공급위치 우편번호
   */
  HSSPLY_ZIP?: string;
  /**
   * 공급위치
   */
  HSSPLY_ADRES?: string;
  /**
   * 공급규모
   */
  TOT_SUPLY_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 계약시작일
   */
  CNTRCT_CNCLS_BGNDE?: string;
  /**
   * 계약종료일
   */
  CNTRCT_CNCLS_ENDDE?: string;
  /**
   * 홈페이지주소
   */
  HMPG_ADRES?: string;
  /**
   * 사업주체명(시행사)
   */
  BSNS_MBY_NM?: string;
  /**
   * 문의처
   */
  MDHS_TELNO?: string;
  /**
   * 입주예정월(YYYYMM)
   */
  MVN_PREARNGE_YM?: string;
  /**
   * 분양정보 URL
   */
  PBLANC_URL?: string;
};
