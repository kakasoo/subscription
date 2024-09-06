import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancMdl } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancMdl";
import { getOPTLttotPblancMdl_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getOPTLttotPblancMdl_api";
import typia from "typia";

export async function test_api_ApplyhomeInfoDetailSvc_v1_getOPTLttotPblancMdl_get(
  connection: api.IConnection,
) {
  const output: getOPTLttotPblancMdl_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getOPTLttotPblancMdl.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancMdl.GetQuery>(),
    );
  console.log(JSON.stringify(output, null, 2));
  typia.assert(output);
}
