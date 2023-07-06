
function getBalls(balls, capacity) {
  //общее число мячей
  const total = vecSum(balls);
  //console.log('total:', total);

  capacity = Math.min(capacity, total);

  //находим точное пропорциональное распределение мячей (не целочисленное)
  const propFloat = balls.map(x => x * capacity / total);
  //console.log('propFloat:', propFloat);

  //округляем все значения к меньшему
  const prop = propFloat.map(x => Math.floor(x));
  //console.log('prop:', prop);

  while (vecSum(prop) < capacity) { //если не набрали нужное кол-во мячей
    //вычисляем невязку 
    const diff = diffVec(propFloat, prop);
    //console.log('diff:', diff);

    //находим индекс максимальной невязки
    const indexOfMaxDiff = indexOfMax(diff);
    //console.log('indexOfMaxDiff:', indexOfMaxDiff);

    //добавляем мячик по этому индексу
    prop[indexOfMaxDiff]++;
    //console.log('prop:', prop);
  }

  return prop;
}

const balls = [1,1,3,1,2,1,1,1,1,1,2];
const capacity = 3;
console.log('getBalls:', getBalls(balls, capacity));

/**
 * Вычисляет сумму элементов вектора
 */
function vecSum(vec) {
  return vec.reduce((s, x) => s + x, 0);;
}

/**
 * Вычисляет разность векторов: vec1 - vec2
 */
function diffVec(vec1, vec2) {
  let diff = [];
  for (i = 0; i < vec1.length; i++) {
    diff.push(vec1[i] - vec2[i]);
  }
  return diff;
}

/**
 * Находит индекс максимального элемента вектора
 */
function indexOfMax(vec) {
  let max = -Infinity;
  let imax = -1;
  for (i = 0; i < vec.length; i++) {
    if (vec[i] > max) {
      max = vec[i];
      imax = i;
    }
  }
  return imax;
}
