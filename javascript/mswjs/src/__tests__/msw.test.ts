import { setupServer } from "msw/node";
import { rest } from "msw";
import axios from "axios";

const server = setupServer();

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

/*
存在しないURLを叩くと下みたいに怒ってくれる

console.warn
  [MSW] Warning: captured a request without a matching request handler:

    • GET https://github.com/aaa

  If you still wish to intercept this unhandled request, please create a request handler for it.
  Read more: https://mswjs.io/docs/getting-started/mocks

 ===
 "https://github.com"で設定して"https://github.com?a=1"を要求しても怒られない

 */
test("test", async () => {
  server.use(
    rest.get("https://github.com", (req, res, ctx) => {
      console.log(req.url.searchParams);
      return res(ctx.json({ token: "mocked_user_token" }));
    }),
  );

  const result = await axios.get("https://github.com?a=1");
  console.log(result.data);
});

test("ワイルドカード使う", async () => {
  server.use(
    rest.get("https://github.com/*", (req, res, ctx) => {
      return res(ctx.status(200, "ok"), ctx.json({ message: "ワイルドカード使う" }));
    }),
  );

  const { data, statusText } = await axios.get("https://github.com/aaaaa");
  console.log({ statusText, data });
});
