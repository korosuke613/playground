// deno run --allow-net httpRequest.ts "https://github.com"

const url = Deno.args[0];
const res = await fetch(url);

const body = await res.arrayBuffer();

console.log(res.headers.get("server"));
console.log(body.byteLength);
