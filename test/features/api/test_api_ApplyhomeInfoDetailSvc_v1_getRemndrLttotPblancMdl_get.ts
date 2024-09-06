import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetRemndrLttotPblancMdl } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetRemndrLttotPblancMdl";
import { getRemndrLttotPblancMdl_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getRemndrLttotPblancMdl_api";
import typia from "typia";

export async function test_api_ApplyhomeInfoDetailSvc_v1_getRemndrLttotPblancMdl_get(
  connection: api.IConnection,
) {
  const output: getRemndrLttotPblancMdl_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getRemndrLttotPblancMdl.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetRemndrLttotPblancMdl.GetQuery>(),
    );
  console.log(JSON.stringify(output, null, 2));
  typia.assert(output);
}
