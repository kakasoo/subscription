import { tags } from "typia";

import { getUrbtyOfctlLttotPblancMdl_model } from "./getUrbtyOfctlLttotPblancMdl_model";

export type getUrbtyOfctlLttotPblancMdl_api = {
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
  data?: getUrbtyOfctlLttotPblancMdl_model[];
};
