import nock from "nock";
import axios from "axios";

test("test", async () => {
  nock("https://github.com")
    .get("/")
    .reply(200, { token: "mocked_user_token" });

  const result = await axios.get("https://github.com");
  console.log(result.data);
});

/*
存在しないURLを叩くと下みたいに怒ってくれる

Error: Nock: No match for request {
  "method": "GET",
  "url": "https://github.com/aaa",
}

===
"https://github.com"で設定して"https://github.com?a=1"を要求したら怒られる

Error: Nock: No match for request {
 "method": "GET",
 "url": "https://github.com/?a=1",
}
 */

test.skip("test2", async () => {
  nock("https://github.com/*")
    .get("/")
    .reply(200, "ok");

  const result = await axios.get("https://github.com/aaa");
  console.log(result.data);
});
