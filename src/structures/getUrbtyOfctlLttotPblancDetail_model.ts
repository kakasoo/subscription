import { tags } from "typia";

export type getUrbtyOfctlLttotPblancDetail_model = {
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
   * 주택구분코드(02:도시형/오피스텔/생활숙박시설/민간임대, 03:공공지원민간임대)
   */
  HOUSE_SECD?: string;
  /**
   * 주택구분코드명
   */
  HOUSE_SECD_NM?: string;
  /**
   * 주택상세구분코드(01:도시형생활주택, 02:오피스텔, 03:민간임대, 03:공공지원민간임대, 04:생활형숙박시설)
   */
  HOUSE_DTL_SECD?: string;
  /**
   * 주택상세구분코드명
   */
  HOUSE_DTL_SECD_NM?: string;
  /**
   * 주택구분 (0201:도시형생활주택, 0202:오피스텔, 0203:민간임대, 0204:생활형숙박시설, 0303:공공지원민간임대)
   */
  SEARCH_HOUSE_SECD?: string;
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
   * 모집공고일 (YYYY-MM-DD)
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
   * 입주예정월
   */
  MVN_PREARNGE_YM?: string;
  /**
   * 모집공고 URL
   */
  PBLANC_URL?: string;
};
