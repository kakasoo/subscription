import api from "@ORGANIZATION/PROJECT-api";

export namespace TestGlobal {
  export const connection = (): api.IConnection => ({
    host: `https://infuser.odcloud.kr/api/stages/37000/api-docs?1643022751478`,
  });
}
