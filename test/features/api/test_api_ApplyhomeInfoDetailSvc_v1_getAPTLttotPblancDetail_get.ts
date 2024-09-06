import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetAPTLttotPblancDetail } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetAPTLttotPblancDetail";
import { getAPTLttotPblancDetail_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getAPTLttotPblancDetail_api";
import typia from "typia";

export async function test_api_ApplyhomeInfoDetailSvc_v1_getAPTLttotPblancDetail_get(
  connection: api.IConnection,
) {
  const output: getAPTLttotPblancDetail_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getAPTLttotPblancDetail.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetAPTLttotPblancDetail.GetQuery>(),
    );
  console.log(JSON.stringify(output, null, 2));
  typia.assert(output);
}
