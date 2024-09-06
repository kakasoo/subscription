import { tags } from "typia";

export type getUrbtyOfctlLttotPblancMdl_model = {
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
   * 공급세대수
   */
  SUPLY_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 공급금액(분양최고금액) (단위:만원)
   */
  SUPLY_AMOUNT?: string;
  /**
   * 청약신청금 (단위:만원)
   */
  SUBSCRPT_REQST_AMOUNT?: string;
};
