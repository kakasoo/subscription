import { tags } from "typia";

export type getAPTLttotPblancMdl_model = {
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
   * 전용면적
   */
  EXCLUSE_AR?: string;
  /**
   * 공급면적
   */
  SUPLY_AR?: string;
  /**
   * 일반공급세대수
   */
  SUPLY_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급세대수
   */
  SPSPLY_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급-다자녀가구 세대수
   */
  MNYCH_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급-신혼부부 세대수
   */
  NWWDS_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급-생애최초 세대수
   */
  LFE_FRST_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급-노부모부양 세대수
   */
  OLD_PARNTS_SUPORT_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급-기관추천 세대수
   */
  INSTT_RECOMEND_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급-기타 세대수
   */
  ETC_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급-이전기관 세대수
   */
  TRANSR_INSTT_ENFSN_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급-청년 세대수
   */
  YGMN_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 특별공급-신생아 세대수
   */
  NWBB_HSHLDCO?: number & tags.Type<"int32">;
  /**
   * 공급금액(분양최고금액) (단위:만원)
   */
  LTTOT_TOP_AMOUNT?: string;
};
