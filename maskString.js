// return masked string
function maskify(cc) {
  let maskedString = "";
  let last4 = cc.substring(cc.length - 4);
  for (i = cc.length - 4; i > 0; i--) {
    maskedString += '#';
  }
  return (maskedString + last4);
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify("1234567890"));
console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify(""));