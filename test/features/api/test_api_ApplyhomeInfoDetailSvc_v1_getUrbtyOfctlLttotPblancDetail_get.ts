import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetUrbtyOfctlLttotPblancDetail } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetUrbtyOfctlLttotPblancDetail";
import { getUrbtyOfctlLttotPblancDetail_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getUrbtyOfctlLttotPblancDetail_api";
import typia from "typia";

export async function test_api_ApplyhomeInfoDetailSvc_v1_getUrbtyOfctlLttotPblancDetail_get(
  connection: api.IConnection,
) {
  const output: getUrbtyOfctlLttotPblancDetail_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getUrbtyOfctlLttotPblancDetail.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetUrbtyOfctlLttotPblancDetail.GetQuery>(),
    );

  typia.assert(output);
}
