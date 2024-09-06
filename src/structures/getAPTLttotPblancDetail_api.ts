import { tags } from "typia";

import { getAPTLttotPblancDetail_model } from "./getAPTLttotPblancDetail_model";

export type getAPTLttotPblancDetail_api = {
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
  data?: getAPTLttotPblancDetail_model[];
};
