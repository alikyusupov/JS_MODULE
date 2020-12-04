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
console.log(tools.detectMedian([11,2,3,4]))//5
console.log(tools.cloneArray([11,2,3,4]))//[11,2,3,4]

/*
2. Подключить стороннюю библиотеку для построения графиков.
Построить график функции y = f(x):
y = 5/x, при x>=1;
y = x*x – 4*x, при x<1.
Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
Расчёт функции y = f(x) реализовать в виде отдельной функции.
*/


let calcY = (x)=>{
    if( x >= 1) {
        return 5/x;
    } else {
        return x*x - 4*x;
    }
 }

let chart = (min=-5, max=5, step=.01)=>{
	let coords = {
		x:[],
		y:[],
		type:'scatter'
	};

	for (let x = min; x <= max; x+=step) {
		coords.x.push(x)
		coords.y.push(calcY(x))
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

/*
5*. Написать функцию, которая будет осуществлять сортировку таблицы из  
предыдущего дз по значениям столбца при нажатии на название этого столбца.
*/



let convertToTable = arr =>{//функция из прошлого ДЗ
	const table = document.createElement("table");
	table.style.width = "700px";
	table.style.border = "1px solid black";
	table.style.margin = "0 auto";
	table.style.textAlign = "center";
	const trTag = document.createElement("tr");
	table.appendChild(trTag)
	const headers = ["ID","Author","Title", "Description"];
	for (let i = 0; i < headers.length; i++) {
		const thTAg = document.createElement("th");
		thTAg.innerText = headers[i]
		trTag.appendChild(thTAg);
	}
	for (let j = 0; j < arr.length; j++) {
		const trTag_ = document.createElement("tr");
		for (let prop in arr[j] ) {
			const tdTAg = document.createElement("td");
			tdTAg.innerText = arr[j][prop];
			trTag_.appendChild(tdTAg)
		}
		table.appendChild(trTag_)
	}
	hook.appendChild(table)
}

let books = [
	{
		id:"item087",
		author:"Достоевский Ф. М.",
		title:"Преступление и наказание",
		desc:"История об одном..."
	},
	{
		id:"item002",
		author:"Чехов А. П.",
		title:"Человек в футляре",
		desc:"Сатирический рассказ ..."
	},
	{
		id:"item111",
		author:"Гоголь Н. В.",
		title:"Мертвые души",
		desc:"Почти детективная ..."
	}
]

convertToTable(books)

let tempArr = [];

/*
Столкнулся с проблемой  - сортировка происходила только один раз
Чтобы отсортировать по другому запросу нужно было перезагрузить страницу
Пришлось добавить вспомогательную функцию initHandlers(),
так как после перерисовки DOMа браузер удалял EventListener с тэга th
*/


function sortByClick(e){//функция сортировки
	if(e.target.innerText === "ID")
		tempArr = books.sort((a, b) => {
			if (a.id < b.id)
			  return -1;
			if (a.id > b.id)
			  return 1;
			return 0;
		})
	else if(e.target.innerText === "Author")
		tempArr = books.sort((a, b) => {
			if (a.author < b.author)
			  return -1;
			if (a.author > b.author)
			  return 1;
			return 0;
		})
	else if(e.target.innerText === "Title")
		tempArr = books.sort((a, b) => {
			if (a.title < b.title)
			  return -1;
			if (a.title > b.title)
			  return 1;
			return 0;
		})
	hook.innerHTML = "";
	convertToTable(tempArr)
	initHandlers()

}

let initHandlers = ()=>{
	let ths = document.querySelectorAll("th");
	for (let i = 0; i < ths.length; i++) {
		ths[i].addEventListener("click",sortByClick)
	}
}

initHandlers()

