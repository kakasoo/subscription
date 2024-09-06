import { tags } from "typia";

import { getAPTLttotPblancMdl_model } from "./getAPTLttotPblancMdl_model";

export type getAPTLttotPblancMdl_api = {
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
  data?: getAPTLttotPblancMdl_model[];
};
