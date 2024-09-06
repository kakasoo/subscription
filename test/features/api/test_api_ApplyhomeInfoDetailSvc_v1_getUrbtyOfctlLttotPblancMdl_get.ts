import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetUrbtyOfctlLttotPblancMdl } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetUrbtyOfctlLttotPblancMdl";
import { getUrbtyOfctlLttotPblancMdl_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getUrbtyOfctlLttotPblancMdl_api";
import typia from "typia";

export async function test_api_ApplyhomeInfoDetailSvc_v1_getUrbtyOfctlLttotPblancMdl_get(
  connection: api.IConnection,
) {
  const output: getUrbtyOfctlLttotPblancMdl_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getUrbtyOfctlLttotPblancMdl.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetUrbtyOfctlLttotPblancMdl.GetQuery>(),
    );

  console.log(output);
  typia.assert(output);
}
