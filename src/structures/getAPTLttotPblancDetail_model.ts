import { tags } from "typia";

export type getAPTLttotPblancDetail_model = {
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
   * 주택구분코드(01: APT, 09: 민간사전청약, 10: 신혼희망타운)
   */
  HOUSE_SECD?: string;
  /**
   * 주택구분코드명
   */
  HOUSE_SECD_NM?: string;
  /**
   * 주택상세구분코드(01: 민영, 03: 국민)
   */
  HOUSE_DTL_SECD?: string;
  /**
   * 주택상세구분코드명
   */
  HOUSE_DTL_SECD_NM?: string;
  /**
   * 분양구분코드(0: 분양주택, 1: 분양전환 가능임대)
   */
  RENT_SECD?: string;
  /**
   * 분양구분코드명
   */
  RENT_SECD_NM?: string;
  /**
   * 공급지역코드
   */
  SUBSCRPT_AREA_CODE?: string;
  /**
   * 공급지역명
   */
  SUBSCRPT_AREA_CODE_NM?: string;
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
   * 청약접수시작일 (YYYY-MM-DD)
   */
  RCEPT_BGNDE?: string;
  /**
   * 청약접수종료일 (YYYY-MM-DD)
   */
  RCEPT_ENDDE?: string;
  /**
   * 특별공급 접수시작일 (YYYY-MM-DD)
   */
  SPSPLY_RCEPT_BGNDE?: string;
  /**
   * 특별공급 접수종료일 (YYYY-MM-DD)
   */
  SPSPLY_RCEPT_ENDDE?: string;
  /**
   * 1순위 해당지역 접수시작일 (YYYY-MM-DD)
   */
  GNRL_RNK1_CRSPAREA_RCPTDE?: string;
  /**
   * 1순위 해당지역 접수종료일 (YYYY-MM-DD)
   */
  GNRL_RNK1_CRSPAREA_ENDDE?: string;
  /**
   * 1순위 경기지역 접수시작일 (YYYY-MM-DD)
   */
  GNRL_RNK1_ETC_GG_RCPTDE?: string;
  /**
   * 1순위 경기지역 접수종료일 (YYYY-MM-DD)
   */
  GNRL_RNK1_ETC_GG_ENDDE?: string;
  /**
   * 1순위 기타지역 접수시작일 (YYYY-MM-DD)
   */
  GNRL_RNK1_ETC_AREA_RCPTDE?: string;
  /**
   * 1순위 기타지역 접수종료일 (YYYY-MM-DD)
   */
  GNRL_RNK1_ETC_AREA_ENDDE?: string;
  /**
   * 2순위 해당지역 접수시작일 (YYYY-MM-DD)
   */
  GNRL_RNK2_CRSPAREA_RCPTDE?: string;
  /**
   * 2순위 해당지역 접수종료일 (YYYY-MM-DD)
   */
  GNRL_RNK2_CRSPAREA_ENDDE?: string;
  /**
   * 2순위 경기지역 접수시작일 (YYYY-MM-DD)
   */
  GNRL_RNK2_ETC_GG_RCPTDE?: string;
  /**
   * 2순위 경기지역 접수종료일 (YYYY-MM-DD)
   */
  GNRL_RNK2_ETC_GG_ENDDE?: string;
  /**
   * 2순위 기타지역 접수시작일 (YYYY-MM-DD)
   */
  GNRL_RNK2_ETC_AREA_RCPTDE?: string;
  /**
   * 2순위 기타지역 접수종료일 (YYYY-MM-DD)
   */
  GNRL_RNK2_ETC_AREA_ENDDE?: string;
  /**
   * 당첨자발표일 (YYYY-MM-DD)
   */
  PRZWNER_PRESNATN_DE?: string;
  /**
   * 계약시작일 (YYYY-MM-DD)
   */
  CNTRCT_CNCLS_BGNDE?: string;
  /**
   * 계약종료일 (YYYY-MM-DD)
   */
  CNTRCT_CNCLS_ENDDE?: string;
  /**
   * 홈페이지주소
   */
  HMPG_ADRES?: string;
  /**
   * 건설업체명(시공사)
   */
  CNSTRCT_ENTRPS_NM?: string;
  /**
   * 문의처
   */
  MDHS_TELNO?: string;
  /**
   * 사업주체명(시행사)
   */
  BSNS_MBY_NM?: string;
  /**
   * 입주예정월
   */
  MVN_PREARNGE_YM?: string;
  /**
   * 투기과열지구
   */
  SPECLT_RDN_EARTH_AT?: string;
  /**
   * 조정대상지역 (Y: 과열지역,  N: 미대상주택)
   */
  MDAT_TRGET_AREA_SECD?: string;
  /**
   * 분양가상한제
   */
  PARCPRC_ULS_AT?: string;
  /**
   * 정비사업
   */
  IMPRMN_BSNS_AT?: string;
  /**
   * 공공주택지구
   */
  PUBLIC_HOUSE_EARTH_AT?: string;
  /**
   * 대규모 택지개발지구
   */
  LRSCL_BLDLND_AT?: string;
  /**
   * 수도권 내 민영 공공주택지구
   */
  NPLN_PRVOPR_PUBLIC_HOUSE_AT?: string;
  /**
   * 공공주택 특별법 적용 여부
   */
  PUBLIC_HOUSE_SPCLW_APPLC_AT?: string;
  /**
   * 분양정보 URL
   */
  PBLANC_URL?: string;
};
