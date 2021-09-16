
// 1. 配列「students」の作成
const students = [
  {name: "John", score1: 47, score2: 46},
  {name: "Bob", score1: 23, score2: 24},
  {name: "Nick", score1: 40, score2: 35},
  {name: "Alex", score1: 44, score2: 45}
];

//2. 配列「学位」の作成
const degree = ["A", "B", "C", "D", "E"];

//3. 配列「合格ライン」の作成
const passing = [91, 81, 71, 61, 51];


//4.合計スコアを計算する関数
//__1. score1だけの配列
let score1 = students.map(obj => obj.score1);

//__2. score2だけの配列
let score2 = students.map(obj => obj.score2); 

//__3. 合計点数（map関数使用、引数を2つ用意して、一つは値、もう一つは添字）
let sum = score1.map( function ( num, i ) {
  return num + score2[i];
});

//5. 合否判断する関数 => sum[]の各要素をpassing[]と比べる
sum.forEach( function(totalScore, e) {
  if (totalScore > passing[0]) console.log(`${students[e].name} get greade A.`);
  else if (totalScore > passing[1]) console.log(`${students[e].name} is passing and get greade B.`);
  else if (totalScore > passing[2]) console.log(`${students[e].name} is passing and get greade C.`);
  else if (totalScore > passing[3]) console.log(`${students[e].name} is passing and get greade D.`);
  else console.log(`${students[e].name} is failure.`);
})



