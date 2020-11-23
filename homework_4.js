/*1. Дана строка, изображающая целое число.
Вывести сумму цифр этого числа.*/
let input = "12345";
let sum = 0;
for (let i = 0; i < input.length; i++) {
	sum += parseInt(input[i])
}
console.log(sum)//15
/*
2. Дана строка и символ. 
Удвоить каждое вхождение заданного символа в строку.
*/
let input_2 = "Alisher Yusupov";
let output = input_2.replace(/s/ig,"ss");
console.log(output)//Alissher Yussupov
/*3. Проверить что введенный пароль удовлетворяет 
следующим условиям сложности:
- длинна от 9 символов;
- содержит обязательно английские буквы верхнего и 
нижнего регистра;
- содержит более двух цифр;
- содержит обязательно один из неалфавитных 
символов (например, !, $, #, %).*/

let regExp = /(?=.*[!#$%])(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){3,})[0-9a-zA-Z!#$%]{9,}/

console.log(regExp.test("Algorithm!123"))//true
console.log(regExp.test("algorithm!123"))//false
console.log(regExp.test("Alg!or1ithM23"))//true
console.log(regExp.test("AlgorithM#156"))//true
console.log(regExp.test("Algo!123"))//false
console.log(regExp.test("Algorithm!1"))//false



/*4** Нечёткий поиск:
Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница 
Суббота Воскресенье". Пользователь вводит слово из словаря с одной 
перепутанной буквой, например: "Срида". Написать программу, которая 
позволяет с использованием регулярного выражения найти в строке-словаре 
введённое пользователем слово (не смотря на одну ошибку в слове) и 
вывести исправленное слово пользователю, например: "Среда".*/


/*.онедельник || п.недельник || по.едельник*/

let week = "Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье";
let input_ = "Сдеда";

for (let i = 0; i < input_.length; i++) {
	let p = input_.split("");
	p[i] = ".";
	let pattern = p.join("");
	let result = week.match(new RegExp(pattern,"i"))
	if(result){
		console.log(result[0])
	}
}


