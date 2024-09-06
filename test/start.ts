import api from "@ORGANIZATION/PROJECT-api";
import { IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancDetail } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancDetail";
import { getOPTLttotPblancDetail_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getOPTLttotPblancDetail_api";
import typia from "typia";

import { TestGlobal } from "./TestGlobal";

const main = async () => {
  const connection: api.IConnection = {
    ...TestGlobal.connection(),
    host: "api.odcloud.kr",
  };
  const output: getOPTLttotPblancDetail_api =
    await api.functional.ApplyhomeInfoDetailSvc.v1.getOPTLttotPblancDetail.get(
      connection,
      typia.random<IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancDetail.GetQuery>(),
    );

  typia.assert(output);
};
main().catch((exp: any) => {
  console.log(exp);
  process.exit(-1);
});
