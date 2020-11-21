
/*
	1. Написать функцию сравнения двух массивов. 
	Функция принимает на вход два массива, 
	сравнивает их и возвращает true, 
	если массивы равны и false, если не равны. 
*/
let array = [1,"value",3,5];
let array_ = [1,"value",3,5,];

function comaparator(a, b){
	if (a.length != b.length){
		return false
	}else{
		for (let prop in a) {
			if (a[prop] != b[prop]) {
				return false;
			}
		}
		return true;
	}
}

console.log(comaparator(array, array_));//true

/*2. Напишите функцию range, принимающую три аргумента, 
	два обязательных: начало и конец диапазона, 
	третий аргумент - необязательный (если он не задан, шаг равен единице) 
	– шаг для построения массива.
	Функция возвращает массив, который содержит все числа из него, 
	включая начальное и конечное. 
	Например, вызов функции range(1, 10, 2) 
	должен будет вернуть [1, 3, 5, 7, 9].*/

let range = (min, max, step)=>{
	let array__ = [];
	for (let i = min; i < max; i+=2) {
		array__.push(i);
	}
	return array__
}
console.log(range(1,10,2))//[ 1, 3, 5, 7, 9 ]

/*
3. Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, 
а она выводит его содержимое.
*/

let data = {
	name:"Alisher",
	surname:"Yusupov",
	hobbies:["web","sewing","football"],
	edu:"ITMO"
}

let student = (obj)=>{
	let info = `${obj.name} ${obj.surname} любит ${obj.hobbies.map(h=>h)} со времен обучения в ${obj.edu}`;
	return info;
}
console.log(student(data))

/*
4* Написать генератор случайных “русских слов”. Сформировать слово используя правила:
- определить длину слова случайно, но в диапазоне от 3 до 5 букв;
- начинать слово с гласной или согласной (определить случайно);
- чередовать гласные и согласные буквы в слове;
- буквы выбираются случайно.
*/

let alphabet = ["а","о","у","и","е","б","к","л","м","с"];
let output = "";

function verbum(a) {
	let random_len = Math.floor(3 + Math.random() * (5 + 1 - 3));//3||4||5
	let isVowel = random_len % 2 === 0;
		for (let i = 0; i < random_len; i++) {
			if (isVowel) {
				output += a[Math.floor(Math.random() * 5)]
				isVowel = !isVowel;
			}else{
				output += a[Math.floor(5 + Math.random() * (9 + 1 - 5))]
				isVowel = !isVowel;
			}

		}
	return output
	}	


console.log(verbum(alphabet))

//0.987*10 = 9.87 = 9
//0.123*10 = 1.23 = 1
//0.001*10 = 0.01

