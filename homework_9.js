/*
1. Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
Библиотека должна обладать следующими методами:
- поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов переданного массива;
- создание копии (клонирование) переданного массива.
*/
console.log(tools.detectMin([11,2,3,4]))//2
console.log(tools.detectMax([11,2,3,4]))//11
console.log(tools.detectMedian([11,2,3,4]))//20
console.log(tools.cloneArray([11,2,3,4]))//[11,2,3,4]

/*
2. Подключить стороннюю библиотеку для построения графиков.
Построить график функции y = f(x):
y = 5/x, при x>=1;
y = x*x – 4*x, при x<1.
Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
Расчёт функции y = f(x) реализовать в виде отдельной функции.
*/

let chart = (min=-5, max=5, step=.01)=>{
	let coords = {
		x:[],
		y:[],
		type:'scatter'
	};
	for (let x = min; x <= max; x+=step) {
		coords.x.push(x)
		if (x >= 1){
			coords.y.push(5/x)
		}
		else if(x < 1){
			coords.y.push(x*x - 4*x)
		}
	}
	return coords;
}
const trace = chart();
const data = [trace];
Plotly.newPlot('myDiv', data);

/*
3. Подключить стороннюю библиотеку для юнит тестирования.
Написать несколько тестов для функции, рассчитывающей y = 1/x + sqrt(x).
*/

/*С горем пополам кое как состряпал unit-тестировние - 
	Нужно в командной строке запустить npm test
*/


/*
4. Написать функцию генерации поля n x n (значение n - аргумент функции), 
в ячейки рандомно спрятать несколько призов. 
Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз 
(иконка, изменения цвета и тд), либо иконка, сообщающая, что приза нет. 
Количество оставшихся попыток выводим рядом с игровым полем.
*/

const game = (n)=>{
	let table = document.createElement("table");
	table.style.textAlign = "center";
	gameHolder.appendChild(table);
	for (let i = 0; i < n; i++) {
		let trTag = document.createElement("tr");
		table.appendChild(trTag)
		for (let j = 0; j < n; j++) {
			let tdTag = document.createElement("td");
			tdTag.style.border = "1px solid red";
			tdTag.style.width = "150px";
			tdTag.style.height = "150px";
			trTag.appendChild(tdTag)
		}
	}
	const tds = table.querySelectorAll("td");
	let arr = []
	let randomVal = Math.floor(Math.random() * n*n );
	while(arr.length < n){
		if (arr.indexOf(randomVal) > -1)
			randomVal = Math.floor(Math.random() * n*n)
		else
			arr.push(randomVal)
	}
	console.log(arr)
	let attempts = 3;
	let success = 0;
	result.innerHTML = `Количество оставшихся попыток -  3 `;


	for (let k = 0; k < tds.length; k++) {
		tds[k].addEventListener("click",()=>{
			if(attempts > 0){
				attempts--;
				result.innerHTML = `Количество оставшихся попыток -  ${attempts} `;
				if(k === arr[0] || k === arr[1] || k === arr[2]){
					let image = document.createElement("img");
					image.style.width = "150px";
					image.src = "https://static.riafan.ru/uploads/2019/11/17/orig-15740091895a89dce0e9640e1cd2b1730f7b7039b9.jpeg";
					if(!tds[k].firstChild){
						tds[k].appendChild(image)
					}
					success++;
				}
				else{
					tds[k].innerText = "Мимо!"
				}
			}
			else{
				alert("У Вас кончились попытки");
			}
		})
	}
}

game(3)

