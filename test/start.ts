import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { getOPTLttotPblancDetail_api } from "@ORGANIZATION/PROJECT-api/lib/structures/getOPTLttotPblancDetail_api";
import { IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancDetail } from "@ORGANIZATION/PROJECT-api/lib/structures/IApiApplyhomeInfoDetailSvcV1GetOPTLttotPblancDetail";

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
  console.log(JSON.stringify(output, null, 2));
typia.assert(output);
};
main().catch((exp: any) => {
  console.log(exp);
  process.exit(-1);
});
