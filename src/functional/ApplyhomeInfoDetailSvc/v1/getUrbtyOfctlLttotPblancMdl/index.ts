import { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import { IApiApplyhomeInfoDetailSvcV1GetUrbtyOfctlLttotPblancMdl } from "../../../../structures/IApiApplyhomeInfoDetailSvcV1GetUrbtyOfctlLttotPblancMdl";
import { getUrbtyOfctlLttotPblancMdl_api } from "../../../../structures/getUrbtyOfctlLttotPblancMdl_api";
/**
 * 오피스텔/도시형/민간임대/생활숙박시설 분양정보 주택형별 상세조회.
 * 주택관리번호, 공고번호 값을 이용하여 오피스텔/도시형/민간임대/생활숙박시설 분양정보 주택형별 상세정보를 제공
 *
 * @security ApiKeyAuth
 * @security ApiKeyAuth2
 * @tag API 목록
 * @path ApplyhomeInfoDetailSvc/v1/getUrbtyOfctlLttotPblancMdl
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
  connection: IConnection,
  query: get.Query,
): Promise<get.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...get.METADATA,
      path: get.path(query),
      status: null,
    },
  );
}
export namespace get {
  export type Query =
    IApiApplyhomeInfoDetailSvcV1GetUrbtyOfctlLttotPblancMdl.GetQuery;
  export type Output = getUrbtyOfctlLttotPblancMdl_api;

  export const METADATA = {
    method: "GET",
    path: "/ApplyhomeInfoDetailSvc/v1/getUrbtyOfctlLttotPblancMdl",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
  } as const;

  export const path = (query: get.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string =
      "/ApplyhomeInfoDetailSvc/v1/getUrbtyOfctlLttotPblancMdl";
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
}
