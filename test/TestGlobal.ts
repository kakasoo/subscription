import api from "@ORGANIZATION/PROJECT-api";

export namespace TestGlobal {
  export const connection = (): api.IConnection => ({
    host: `https://api.odcloud.kr/api`,
  });
}
