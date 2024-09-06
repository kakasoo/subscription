import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancDetail } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancDetail";
import { getOPTLttotPblancDetail_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getOPTLttotPblancDetail_api";
import typia from "typia";

export async function test_api_ApplyhomeInfoDetailSvc_v1_getOPTLttotPblancDetail_get(
  connection: api.IConnection,
) {
  const output: getOPTLttotPblancDetail_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getOPTLttotPblancDetail.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancDetail.GetQuery>(),
    );
  console.log(JSON.stringify(output, null, 2));
  typia.assert(output);
}
