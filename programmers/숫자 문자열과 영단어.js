function solution(s) {
  let letterObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  while (!+s) {
    for (letter in letterObj) {
      s = s.replace(letter, letterObj[letter]);
    }
  }
  return +s;
}

solution("one4seveneight");
solution("23four5six7");
solution("1zerotwozero3");
