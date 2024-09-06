import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetPblPvtRentLttotPblancMdl } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetPblPvtRentLttotPblancMdl";
import { getPblPvtRentLttotPblancMdl_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getPblPvtRentLttotPblancMdl_api";
import typia from "typia";

export async function test_api_ApplyhomeInfoDetailSvc_v1_getPblPvtRentLttotPblancMdl_get(
  connection: api.IConnection,
) {
  const output: getPblPvtRentLttotPblancMdl_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getPblPvtRentLttotPblancMdl.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetPblPvtRentLttotPblancMdl.GetQuery>(),
    );

  typia.assert(output);
}
