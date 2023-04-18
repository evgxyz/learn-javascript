
function encode(str) {
  return [...str.matchAll(/([a-z]+)?(\d+)?/g)]
    .filter(x => x[1] || x[2])
    .reduce((sum, x, i) => {
      const a = x[1] ? 
        parseInt([...x[1]].map(ch => (ch.codePointAt(0) ?? 0) - 96).join('')) : 1;
      const b = x[2] ? parseInt(x[2]) : 1;
      const sgn = (i % 2 === 0) ? 1 : -1;
      console.log(`sgn=${sgn}, a=${a}, b=${b}`);
      return sum + sgn * a * b; 
    }, 0);
}

const str = '32bk56c890f';
const res = encode(str);
console.log('res:', res);