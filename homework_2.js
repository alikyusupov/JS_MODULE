/*
	Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название 
    соответствующего времени года ("зима", "весна" и т.д.).
*/

let guess = parseInt(prompt("Введите число от 1 до 12"));
if(guess > 0 && guess < 13){
	if(guess < 3) console.log("На дворе зима")
	else if(guess < 6) console.log("На дворе весна")
	else if(guess < 9) console.log("На дворе лето")
	else if(guess < 12) console.log("На дворе осень")	
	else if(guess === 12) console.log("На дворе зима")
}
else console.log("Некорректное значение")

	/*
	Единицы длины пронумерованы следующим образом: 
    1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. 
    Дан номер единицы длины и длина отрезка L в этих единицах (вещественное 
    число). Вывести длину данного отрезка в метрах.
	*/

	let mesurement = parseInt(prompt("Введите единицу измерения"));
	let lengthValue = parseInt(prompt("Введите длину отрезка"));
	let result = "";

	if(mesurement === 1) result = lengthValue * .1;
	else if(mesurement === 2) result = lengthValue * 1000;
	else if(mesurement === 3) result = lengthValue * 1;
	else if(mesurement === 4) result = lengthValue * .001;
	else if(mesurement === 5) result = lengthValue * .01;
	else console.log("Некорректное значение")

	console.log(`Длина отрезка в метрах  = ${result.toFixed(1)}`)

	/*
	Дано целое число, лежащее в диапазоне от -999 до 999. 
    Вывести строку - словесное описание данного числа вида 
    "отрицательное двузначное число", 
    "нулевое число", 
    "положительное однозначное число" и т.д.
	*/


	let values = [-100, -90, -9, 0 , 7 , 89, 529]

	for (var i = 0; i < values.length; i++) {
		if (values[i] >= -999 && values[i] < -99) document.write(`<h2>${values[i]} это отрицательное трехзначное число</h2>`)
		else if (values[i] < -9) document.write(`<h2>${values[i]} это отрицательное двузначное число</h2>`)
		else if (values[i] < 0) document.write(`<h2>${values[i]} это отрицательное однозначное число</h2>`)
		else if (values[i] === 0) document.write(`<h2>${values[i]} это нулевое число</h2>`)
		else if (values[i] < 10) document.write(`<h2>${values[i]} это положительное однозначное число</h2>`)
		else if (values[i] < 100) document.write(`<h2>${values[i]} это положительное двузначное число</h2>`)
		else if (values[i] < 1000) document.write(`<h2>${values[i]} это положительное трехзначное число</h2>`)	
	}

	

	/*
	Вывести через console.log все числа от 1 до 100, с двумя исключениями. 
    Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, 
    а для чисел, делящихся на 5 (но не на 3) – ‘Five’. 
    Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.
	*/

	//Коряво но работает 
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0) console.log("three");
		else if (i % 5 === 0) console.log("five");
		if (i % 3 === 0 && i % 5 === 0) console.log("threefive");
		else console.log(i)
	}


	/*
	Пользователь вводит год, необходимо определить 
    является ли он високосным. Примеры данных для тестирования:
    1) '2000' – високосный год
    2) '1800' – не високосный год
	*/

	let year = parseInt(prompt("Введите год"))

    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if(year % 400 === 0) {
                console.log(year, "високосный год");
            }
            else
                console.log(year, "невисокосный год");
        }
        else
            console.log(year, "високосный год");
    }
    else{
    	console.log(year, "невисокосный год");
    }
    
    /*
    Задать количество тарелок и количество моющего средства.
    Моющее средство расходуется из расчета 0,5 на одну тарелку.
    В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
    В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.
    */
	
    let dishes = 13;
    let volume = 6;

    while(dishes > 0){
    	dishes--;
    	volume -= .5;
    	console.log(volume)
    	if (dishes && volume < .5) {
    		console.log(`кончилось средство и осталось ${dishes} тарелок`);
    		break;
    	}
    	if (dishes < 1 && volume > 0) {
    		console.log(`кончились тарелки и осталось ${volume} л. средства`);
    		break;
    	}
    	if (dishes === 1 && volume === .5){
    		console.log("средства хватило ровно на все тарелки - Вы Ювелир");
    		break;
    	}
    }




