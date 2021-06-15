import { assertEquals } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { setupServer } from "https://deno.land/x/npm:msw/lib/umd/index.js"

Deno.test({
  name: "testing example",
  fn(): void {
    const server = setupServer()
    assertEquals("world", "world");
    assertEquals({ hello: "world" }, { hello: "world" });
  },
});
