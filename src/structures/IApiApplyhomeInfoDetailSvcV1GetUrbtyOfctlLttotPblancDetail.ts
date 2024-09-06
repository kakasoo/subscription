import { tags } from "typia";

export namespace IApiApplyhomeInfoDetailSvcV1GetUrbtyOfctlLttotPblancDetail {
  export type GetQuery = {
    /**
     * page index
     */
    page: number &
      tags.Type<"int32"> &
      tags.Default<1> &
      tags.JsonSchemaPlugin<{
        name: "page";
        in: "query";
        format: "int64";
      }>;
    /**
     * page size
     */
    perPage: number &
      tags.Type<"int32"> &
      tags.Default<10> &
      tags.JsonSchemaPlugin<{
        name: "perPage";
        in: "query";
        format: "int64";
      }>;
    /**
     * 응답의 데이터 타입을 선택할 수 있습니다. (기본값: JSON)<br/>XML형태의 응답결과를 얻기 위해서는 XML 값으로 설정
     */
    returnType: string &
      tags.JsonSchemaPlugin<{
        name: "returnType";
        in: "query";
        exclusiveMinimum: false;
      }>;
    /**
     * 주택관리번호
     */
    "cond[HOUSE_MANAGE_NO::EQ]": string &
      tags.JsonSchemaPlugin<{
        name: "cond[HOUSE_MANAGE_NO::EQ]";
        in: "query";
        required: false;
      }>;
    /**
     * 공고번호
     */
    "cond[PBLANC_NO::EQ]": string &
      tags.JsonSchemaPlugin<{
        name: "cond[PBLANC_NO::EQ]";
        in: "query";
        required: false;
      }>;
    /**
     * 주택구분 (0201:도시형생활주택, 0202:오피스텔, 0203:민간임대, 0204:생활형숙박시설, 0303:공공지원민간임대)
     */
    "cond[SEARCH_HOUSE_SECD::EQ]": string &
      tags.JsonSchemaPlugin<{
        name: "cond[SEARCH_HOUSE_SECD::EQ]";
        in: "query";
        required: false;
      }>;
    /**
     * 모집공고일 (YYYY-MM-DD)
     */
    "cond[RCRIT_PBLANC_DE::LT]": string &
      tags.JsonSchemaPlugin<{
        name: "cond[RCRIT_PBLANC_DE::LT]";
        in: "query";
        required: false;
      }>;
    /**
     * 모집공고일 (YYYY-MM-DD)
     */
    "cond[RCRIT_PBLANC_DE::LTE]": string &
      tags.JsonSchemaPlugin<{
        name: "cond[RCRIT_PBLANC_DE::LTE]";
        in: "query";
        required: false;
      }>;
    /**
     * 모집공고일 (YYYY-MM-DD)
     */
    "cond[RCRIT_PBLANC_DE::GT]": string &
      tags.JsonSchemaPlugin<{
        name: "cond[RCRIT_PBLANC_DE::GT]";
        in: "query";
        required: false;
      }>;
    /**
     * 모집공고일 (YYYY-MM-DD)
     */
    "cond[RCRIT_PBLANC_DE::GTE]": string &
      tags.JsonSchemaPlugin<{
        name: "cond[RCRIT_PBLANC_DE::GTE]";
        in: "query";
        required: false;
      }>;
  };
}
