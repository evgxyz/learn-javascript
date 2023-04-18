
/**
 * @param results массив с результатами каждого ученика
 * @returns массив с оценками для каждого ученика
 */
function gradeResults(results) {
  const maxI = results.length;
  const maxJ = results.reduce((maxJ, a) => Math.max(a.length, maxJ), 0);
  
  // считаем сколько всего баллов получено за j-ю задачу
  const scoreArr = Array(maxJ).fill(0);
  for (let i = 0; i < maxI; i++) {
    for (let j = 0; j < results[i].length; j++) {
      scoreArr[j] += results[i][j];
    }
  }

  // определяем цены задач
  const priceArr = scoreArr.map(x => maxI + 1 - x);
  console.log('priceArr: ', priceArr);

  // считаем оценки учеников с учетом цен задач
  const gradeArr = Array(maxI);
  for (let i = 0; i < maxI; i++) {
    gradeArr[i] = results[i].reduce((s, x, j) => (s + x * priceArr[j]), 0);
  }
  
  return gradeArr;
}

const results = [
  [1,0,1,1],
  [0,0,0,1], 
  [1,1,1,1], 
];
  
const grades = gradeResults(results);
console.log('grades: ', grades)