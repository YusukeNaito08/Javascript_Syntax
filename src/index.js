/**
 *テンプレート文字列
 */

const name = "yusuke";
const age = 28;
//従来
const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
console.log(message1);

/**
 *  ES6
 */

const message2 = `ぼくの名前は${name}です。年齢は${age}です`;
console.log(message2);

/**
 *  アロー関数
 */

/**
 *  往来
 */
function func1(str) {
  return str;
}
console.log(func1("func1です"));
console.log(func1("func2です"));

const func3 = function (str) {
  return str;
};
console.log(func3("func3です"));

/**
 *  ES6
 */

const func4 = (str) => {
  return str;
};

console.log(func4("func4です"));

/**
 *  アロー関数（省略)
 */

const func5 = (str) => str;

console.log(func5("func5です"));

const func6 = (num1, num2) => {
  return num1 + num2;
};

console.log(func6(10, 20));

/**
 *  分割代入
 */

const myProfile = {
  name: "yusuke",
  age: "28"
};

const message5 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message5);

const { name2, age2 } = myProfile;
const message6 = `私の名前は${name2}です。年齢は${age2}歳です。`;
console.log(message6);

/**
 *  配列分割代入
 */

const myProfile2 = ["yusuke", 28];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

const [name3, age3] = myProfile2;
const message4 = `名前は${name3}です。年齢は${age3}です。`;
console.log(message4);

/**
 *  デフォルト値、引数など
 */

const sayHello = (name = "yusuke") => console.log(`こんにちは${name}さん!`);
sayHello();

/**
 * スプレッド構文 ...
 */
//配列の展開

const arry1 = [1, 2];
console.log(arry1);
console.log(...arry1);
//配列の中身(値）を順番に処理して展開

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arry1[0], arry1[1]);
sumFunc(...arry1); //↑同じ記述

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num01, num02, ...arr3] = arr2;

console.log(arr3);
console.log(num02);

//配列のコピー, 結合

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 200;
console.log(arr6);
console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
arr8[0] = 100;
console.log(arr8);
console.log(arr4);
//参照元に影響する

/**
 * mapやfilterを使った配列のの処理
 */

const nameArray = ["青木", "宣親", "宮本"];
//従来
for (let i = 0; i < nameArray.length; i++) {
  console.log(`${i + 1}番目は${nameArray[i]}です`);
}

//ES6
nameArray.map((name, i) => console.log(`${i + 1}番目は${name}です`));

// map
const nameArray2 = nameArray.map((name) => {
  return name;
});
console.log(nameArray2);

//filter
const numArray = [1, 2, 3, 4, 5];
const newnumArray = numArray.filter((num) => {
  return num % 2 === 0;
});

console.log(newnumArray);

const newNameArray = nameArray.map((name) => {
  if (name === "宣親") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArray);

/**
 * 三項演算子
 */
//ある条件? 条件がtureの時　：　条件がfalseの時
const val1 = 1 < 0 ? "true" : "false";
console.log(val1);

const num8 = 1300;
const formatNum =
  typeof num8 === "number" ? num8.toLocaleString() : "数値を入力してください";

console.log(formatNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲です";
};

console.log(checkSum(50, 40));

/**
 * 論理演算子
 */

// || は左側がfalseなら右側を返す
const num3 = 100;
const fee = num3 || "金額未設定";
console.log(fee);

// && は左側がtrueなら右側を返す
const num4 = 100;
const fee4 = num4 && "金額未設定";
console.log(fee4);
