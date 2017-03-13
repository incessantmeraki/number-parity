module.exports = function (num) {
  var result = 0
  while (num) {
    result ^= 1 
    num &= (num - 1)
  }
  return result
}
