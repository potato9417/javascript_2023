function calcSum(m,n){
    let sum=0;
    for(i=m;i<=n;i++){
        sum+=i;
    }
    return sum; // 함수의 분기(종료) + 결과값
}
let num1 = parseInt(prompt("시작숫자를 입력하세요 : "));
let num2 = parseInt(prompt("마지막숫자를 입력하세요 : "));

let result = calcSum(num1,num2);
console.log(result);