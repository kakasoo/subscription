import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetAPTLttotPblancMdl } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetAPTLttotPblancMdl";
import { getAPTLttotPblancMdl_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getAPTLttotPblancMdl_api";
import typia from "typia";

export async function test_api_ApplyhomeInfoDetailSvc_v1_getAPTLttotPblancMdl_get(
  connection: api.IConnection,
) {
  const output: getAPTLttotPblancMdl_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getAPTLttotPblancMdl.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetAPTLttotPblancMdl.GetQuery>(),
    );

  typia.assert(output);
}
