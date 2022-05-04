import { setTimeout } from 'timers/promises';

const tooSlowTest = async ()=>{
  // A float ranging from 0 to 1.
  const timeout = Math.random()

  // Wait for 0~4 seconds.
  await setTimeout(timeout * 4000);
}

describe("Too slow test", ()=>{
  test("0", async ()=>{
    await tooSlowTest()
  })
  test("1", async ()=>{
    await tooSlowTest()
  })
  test("2", async ()=>{
    await tooSlowTest()
  })
  test("3", async ()=>{
    await tooSlowTest()
  })
  test("4", async ()=>{
    await tooSlowTest()
  })
})
