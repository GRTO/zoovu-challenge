export function shuffle(array: any[]) {
  const arrayTemp = [...array];
  let j, x, i;
  for (i = arrayTemp.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arrayTemp[i];
    arrayTemp[i] = arrayTemp[j];
    arrayTemp[j] = x;
  }
  return arrayTemp;
}
