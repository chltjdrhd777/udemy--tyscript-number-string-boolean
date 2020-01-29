function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //const result = n1 + n2;
  if (showResult) {
    //console.log(phrase + n1+ n2) -> If I write codes like this, it's result would be 'the answer is 51.2' because it would put one string and two numbers together as string.
    // to avoid this, I have two options. One : regulate the calculation as constant separately. Second, add change n1+n2 into Number(n1+n2)
    console.log(phrase + Number(n1 + n2));
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is:";

add(number1, number2, printResult, resultPhrase);
