import { tags } from "typia";

import { getOPTLttotPblancDetail_model } from "./getOPTLttotPblancDetail_model";

export type getOPTLttotPblancDetail_api = {
  page?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  perPage?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  totalCount?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  currentCount?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  matchCount?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  data?: getOPTLttotPblancDetail_model[];
};
