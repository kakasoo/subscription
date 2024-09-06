import { tags } from "typia";

export type getOPTLttotPblancMdl_model = {
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
   * 주택형
   */
  HOUSE_TY?: string;
  /**
   * 일반공급세대수
   */
  SUPLY_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 공급금액(분양최고금액) (단위:만원)
   */
  LTTOT_TOP_AMOUNT?: string;
};
