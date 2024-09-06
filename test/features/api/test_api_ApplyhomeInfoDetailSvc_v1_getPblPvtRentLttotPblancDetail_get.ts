import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetPblPvtRentLttotPblancDetail } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetPblPvtRentLttotPblancDetail";
import { getPblPvtRentLttotPblancDetail_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getPblPvtRentLttotPblancDetail_api";
import typia from "typia";

export async function test_api_ApplyhomeInfoDetailSvc_v1_getPblPvtRentLttotPblancDetail_get(
  connection: api.IConnection,
) {
  const output: getPblPvtRentLttotPblancDetail_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getPblPvtRentLttotPblancDetail.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetPblPvtRentLttotPblancDetail.GetQuery>(),
    );

  typia.assert(output);
}
