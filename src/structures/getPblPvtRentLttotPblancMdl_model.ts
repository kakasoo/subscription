import { tags } from "typia";

export type getPblPvtRentLttotPblancMdl_model = {
  /**
   * 주택관리번호
   */
  HOUSE_MANAGE_NO?: string;
  /**
   * 공고번호
   */
  PBLANC_NO?: string;
  /**
   * 모델번호
   */
  MODEL_NO?: string;
  /**
   * 군
   */
  GP?: string;
  /**
   * 타입
   */
  TP?: string;
  /**
   * 전용면적
   */
  EXCLUSE_AR?: string;
  /**
   * 공급면적
   */
  SUPLY_AR?: string;
  /**
   * 계약면적
   */
  CNTRCT_AR?: string;
  /**
   * 공급세대수
   */
  SUPLY_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급청년세대수
   */
  GNSPLY_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급신혼세대수
   */
  SPSPLY_YGMN_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급고령자세대수
   */
  SPSPLY_NEW_MRRG_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 공급금액
   */
  SPSPLY_AGED_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 공급금액(분양최고급액) (단위:만원)
   */
  SUPLY_AMOUNT?: string;
  /**
   * 청약신청금 (단위:만원)
   */
  SUBSCRPT_REQST_AMOUNT?: string;
};
