var a = prompt('Введите число');
var b = prompt('Степень этого числа');
console.log(a);
console.log(b);
let sum = 1;
for(let i = 1; i <= b; i++) {
    if( i > 0 && i <= b) {
        sum = sum * a;
    }    
}
console.log(sum);

