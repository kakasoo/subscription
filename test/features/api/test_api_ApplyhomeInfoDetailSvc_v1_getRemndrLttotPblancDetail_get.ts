import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetRemndrLttotPblancDetail } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetRemndrLttotPblancDetail";
import { getRemndrLttotPblancDetail_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getRemndrLttotPblancDetail_api";
import typia from "typia";

export async function test_api_ApplyhomeInfoDetailSvc_v1_getRemndrLttotPblancDetail_get(
  connection: api.IConnection,
) {
  const output: getRemndrLttotPblancDetail_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getRemndrLttotPblancDetail.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetRemndrLttotPblancDetail.GetQuery>(),
    );
  console.log(JSON.stringify(output, null, 2));
  typia.assert(output);
}
