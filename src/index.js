const name = "suzuki";
const age = 30;

const message1 = "私の名前は" + name + "です。年齢は" + age;
console.log(message1);

const message2 = `私の名前は${name}です。年齢は${age}です`;
console.log(message2);

/* アロー関数 */

function func1(str) {
  return str;
}

console.log(func1("func1です"));
