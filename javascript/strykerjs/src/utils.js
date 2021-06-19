module.exports.sum = (a, b) => {
  return a + b;
}

module.exports.min = (a, b) => {
  if(a < b){
    return a
  }
  return b
}

module.exports.gorilla = (a) => {
  return `${a} is gorilla`
}

module.exports.isTrue = (a) => {
  return a
}
