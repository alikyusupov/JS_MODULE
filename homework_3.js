/*
	1. Заданы два массива 
	A = [ 12, 4, 3, 10, 1, 20 ]  
	B = [-3, -7, -100, -33] 
	необходимо их объединить 
	в один массив C добавив 
	массив B в конец(в начало) A. 
*/

let arr_1 = [12, 4, 3, 10, 1, 20];
let arr_2 = [-3, -7, -100, -33];

let arr_1_and_arr_2 = arr_1.concat(arr_2);
let arr_2_and_arr_1 = arr_2.concat(arr_1);

console.log(arr_1_and_arr_2, arr_2_and_arr_1)


/*
	Одномерным массивом задана доска 3 на 3 
	var area = [ null, null, null, null, null, null, null, null, null ]
	Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 
	При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
	Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
*/


let area = [1, null, 0, null, 1, null, null, null, null];
let row = "";

for (var i = 0; i < area.length; i++) {
	if (area[i] === 1) row += "<span>X</span>";
	else if (area[i] === 0) row += "<span>0</span>";
	else if (area[i] === null) row += "<span>...</span>";
	if ((i+1) % 3 === 0) row += "<br>";

}

document.write(row)


/*
	Задан массив  - [12,4,3,10,1,20]. 
	Удалить из него наименьшее и наибольшее значение.
*/	

	//первый способ

	let arr_3 = [12,4,3,10,1,20];
	let min = arr_3[0], max = arr_3[0];
	for(let i = 1; i < arr_3.length; i++){
		if(arr_3[i] > max) {
			max = arr_3[i];
		} else if (arr_3[i] < min) {
			min = arr_3[i];
		}
	}
	arr_3.splice(arr_3.indexOf(max),1);
	arr_3.splice(arr_3.indexOf(min),1);
	console.log(arr_3)//[12,4,3,10];

	//второй способ

	/*arr_3.splice(arr_3.indexOf(Math.max(arr_3)),1)
	arr_3.splice(arr_3.indexOf(Math.min(arr_3)),1)
	console.log(arr_3)//[12,4,3,10];*/

	/*
	В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. 
	Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов 
	с номерами от 000001 до 999999. 
	«Счастливым» считается билетик у которого сумма первых трёх цифр номера равна 
	сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576. 
	Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и 
	теперь раздумывает, как много сувениров потребуется. 
	С помощью программы подсчитайте сколько счастливых билетов в одном рулоне.
	*/

	let ticker = 0;
	for (var i = 1; i <= 999999; i++) {
		let paddedNum = i.toString().padStart(6,0);
		if(
			parseInt(paddedNum[0]) + parseInt(paddedNum[1]) + parseInt(paddedNum[2]) 
			===
			parseInt(paddedNum[3]) + parseInt(paddedNum[4]) + parseInt(paddedNum[5])
		) ticker++;
	}

	console.log(ticker)//55251


	/*
		дополнительная задача
	*/

	let weights = [2,7,4,1,8,1];//1
	weights = [100,50,50,25,5]//20

	let sortedWeights = weights.sort((a,b)=>{
		if (a > b) return 1;
		else if(b < a) return -1;
		else return 0;
	})
	console.log(sortedWeights)//[ 1, 1, 2, 4, 7, 8 ]


		while(sortedWeights.length > 1){
			let a = sortedWeights[sortedWeights.length - 1];
			let b = sortedWeights[sortedWeights.length - 2];
			sortedWeights.splice(sortedWeights.length - 2, 2);
			if(a - b > 0){
				sortedWeights.push(a - b);
				sortedWeights.sort((c,d)=>{
					if (c > d) return 1;
					else if(c < d) return -1;
					else return 0;
				})
			}
		}

	console.log(sortedWeights)