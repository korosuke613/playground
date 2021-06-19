const utils = require("./utils")

describe("utils.sum", ()=>{
  test('adds 0 + 0 to equal 0', () => {
    expect(utils.sum(0, 0)).toBe(0);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(utils.sum(1, 2)).toBe(3);
  });
})

describe("utils.min", ()=>{
  test('adds 1, 2 to 1', ()=>{
    expect(utils.min(1, 2)).toBe(1);
  })
  test('adds 1, 1 to 1', ()=>{
    expect(utils.min(1, 1)).toBe(1);
  })
  test('adds 2, 1 to 1', ()=>{
    expect(utils.min(2, 1)).toBe(1);
  })
})

describe("utils.gorilla", ()=>{
  test("hoge is gorilla", ()=>{
    expect(utils.gorilla("hoge")).toBe("hoge is gorilla");
  })
})
