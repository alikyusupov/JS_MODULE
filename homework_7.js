/*
1. Создать функцию которая выводит время 
в html и обновляет значения каждую секунду. 
Время выводить в формате чч:мм:cc, при этом
часы, минуты и секунды отобразить разными цветами.
*/

hrs.style.color = "red";
mnts.style.color = "blue";
scnds.style.color = "green";

let startTimer = ()=>{
	setInterval(()=>{
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let _hours = hours.toString().padStart(2,"0");
	hrs.innerText = _hours;
	let _minutes = minutes.toString().padStart(2,"0");
	mnts.innerText = _minutes;
	let _seconds = seconds.toString().padStart(2,"0");
	scnds.innerText = _seconds;
},1000)
}

startTimer()
/*
2. Дан массив с объектами, где каждый объект 
описывает товар: фото, артикул, описание и т.п.
Сформировать функцию, которой передаётся массив 
товаров, и которая создаст и внесёт все 
необходимые html элементы, стили, и содержание 
для отображения всей информации о товарах.
*/

function displayItems(arr){
	for (let i = 0; i < arr.length; i++) {
		container.insertAdjacentHTML("beforeend",
			`<section>
				<h2>
					${arr[i].title}
				</h2>
				<img src="${arr[i].url}"></img>
				<p>
					<b>$ 
						${arr[i].price}
					</b>
				</p>
				<p>
					${arr[i].desc}
				</p>
				<hr>
			</section>
			`
			)
		}	
	}

const items = [
		{
			title:"IPhone 12 Pro",
			url:"https://im0-tub-ru.yandex.net/i?id=6bb47d915ca1dd8caada09349963ecb0&n=13",
			price:669,
			desc:"A brand new IPhone"
		},
		{
			title:"IPad",
			url:"https://www.knsneva.ru/linkpics/apple-ipad-air-2019-256gb-wi-fi-cellular-mv0p2ru-a-2-small.jpg",
			price:869,
			desc:"A brand new IPad"
		},
		{
			title:"Mac mini",
			url:"https://www.businessdirect.bt.com/images/product/uni2/DigitalContent/dx/DXHB_B549487A-BD9A-4E25-B3B9-C34D948813E6_large.jpg",
			price:1169,
			desc:"A brand new Mac mini"
		}
]

displayItems(items)

/*
3. Создать светофор (красный, желтый, 
зелёный). Переключать цвет у светофора 
через каждые 2 сек сверху вниз и снизу вверх.
*/

const lights = document.querySelectorAll('.lights-item');
const colors = ["red","yellow","green"];
let ticker = -1;
let down = true;
setInterval(()=>{

	if(down)
		ticker++;
	else
		ticker--;

	if (ticker === 2){
		lights[0].style.backgroundColor = "";
		lights[1].style.backgroundColor = "";
		down = false
	}
	else if (ticker === 0){
		lights[1].style.backgroundColor = "";
		lights[2].style.backgroundColor = "";
		down = true;
	}

	else if (ticker === 1 && down){
		lights[0].style.backgroundColor = colors[0];
		lights[2].style.backgroundColor = "";
	}

	else if (ticker === 1 && !down){
		lights[0].style.backgroundColor = "";
		lights[2].style.backgroundColor = "";
	}

	lights[ticker].style.backgroundColor = colors[ticker]

},2000)

/*
	4*. Создать функцию которая выводит в html количество дней, 
часов и минут до нового года и обновляет значения каждую минуту. 
Датой наступления нового года считается 1 января. Функция выводит в html 
строку вида: "14 дней 21 час 46 минут". Нужно реализовать корректные 
окончания слов, например: 1 день, 2 дня, 5 дней. 
Функция должна корректно работать при запуске в любом году, 
т. е. грядущий год должен вычисляться программно.
*/

let countdown = ()=>{
	let _date_ = new Date();
	let newYear =  new Date(_date_.getFullYear() + 1, 0, 1);
	let remains = newYear - _date_;
	let leftDays = Math.floor(remains / 1000 / 3600 / 24);
	let leftHours = Math.floor((remains - leftDays * 1000 * 3600 *24) / 3600000)
	let leftMinutes = Math.floor((remains - (leftDays * 1000 * 3600 * 24 + leftHours * 1000 * 3600) ) / 60000);
	let d, h, m;

	if (leftDays === 1 || leftDays === 21 || leftDays === 31)
		d = "день";
	else if (leftDays > 1 && leftDays < 5 || leftDays > 21 && leftDays < 25 || leftDays > 31 && leftDays < 35)
		d = "дня";
	else
		d = "дней";

	if (leftHours === 1 || leftHours === 21)
		h = "час";
	else if (leftHours > 1 && leftHours < 5 || leftHours > 21 && leftHours < 24)
		h = "часа";
	else
		h = "часов";

	if (leftMinutes === 1 || leftMinutes === 21 || leftMinutes === 31 || leftMinutes === 41 || leftMinutes === 51)
		m = "минута";
	else if (leftMinutes > 1 && leftMinutes < 5 || leftMinutes > 21 && leftMinutes < 25 || leftMinutes > 31 && leftMinutes < 35
		 || leftMinutes > 41 && leftMinutes < 45 || leftMinutes > 51 && leftMinutes < 55)
		m = "минуты";
	else
		m = "минут";

	count.innerHTML = `
		<h1>До Нового Года осталось:
		<span>${leftDays} ${d}</span>
		<span>${leftHours} ${h}</span>
		<span>${leftMinutes} ${m}</span>
		</h1>`
}

countdown();

let startCountdown = setInterval(countdown, 60000);
