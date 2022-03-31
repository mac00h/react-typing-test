export const mapText = (arr: string[]) => {
  let map: { x: number; y: number; letter: string }[] = [];
  arr.forEach((element, i) => {
    let word = element.split("");
    word.forEach((letter, k) => {
      map.push({ x: i, y: k, letter: letter });
    });
  });

  return map;
};
