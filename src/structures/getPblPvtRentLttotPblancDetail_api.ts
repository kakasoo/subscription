import { tags } from "typia";

import { getPblPvtRentLttotPblancDetail_model } from "./getPblPvtRentLttotPblancDetail_model";

export type getPblPvtRentLttotPblancDetail_api = {
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
  data?: getPblPvtRentLttotPblancDetail_model[];
};
