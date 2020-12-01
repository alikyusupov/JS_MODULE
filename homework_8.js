

/*
1. Даны несколько div элементов на html.
По первому нажатию на каждый div 
он перекрашивается зеленым цветом, 
при повторном нажатии перекрашивается 
обратно и так далее каждый клик 
происходит чередование цвета.
*/
const items = document.querySelectorAll(".item");
items.forEach(item=>{
	item.style.border = "1px solid gray";
	item.style.display = "inline-block";
	item.style.width = "100px";
	item.style.height = "100px";
})

let clickHandler = e =>{
	e.target.classList.toggle("active")
}
	
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click",clickHandler)
}

/*
2. Реализовать счётчик нажатий на 
кнопку: Дана кнопка внутри неё 
записана цифра. При клике на 
кнопку – её значение должно 
увеличиваться на единицу.
*/

const btn = document.createElement("button");
let ticker = 0;
btn.innerText = "0";
itemHolder.appendChild(btn);
btn.onclick = (e)=>{
	ticker++;
	e.target.innerText = ticker;
}

/*
3. Реализовать возможность добавления комментариев. 
Комментарий вводится в textarea.
Комментарий добавляется по нажатию на кнопку Комментировать.
При добавлении комменария отображаются: аватар автора (пока у всех комментарие одинаковый), 
имя автора (пока у всех комментарие одинаковое), дата добавления комментария (текущая дата), 
текст комментария (тот, что был введен в textarea).
*/

addPost.addEventListener("click",()=>{
	let nowDate = new Date(); 
	let date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 
	comment.parentElement.insertAdjacentHTML("beforeend",`
		<article style="width:600px;clear:both">
			<div>
				<div style="width:10%;display:inline-block;vertical-align:middle">
					<img style="width:100%" src="https://c7.uihere.com/files/435/40/972/5bbe8cd074088-thumb.jpg">
					<p align="center">Avatar</p>
					<p>${date}</p>
				</div>
				<div style="width:auto;display:inline-block;">
					<p style="padding-left:20px;">
						${comment.value}
					</p>
				</div>
			</div>
		</article>
		`);
	comment.value = "";
});

/*
4. Дан массив с объектами, где каждый объект 
описывает книгу: артикул, автор, название, описание.
Сформировать функцию, которой передаётся массив 
книг, и которая создаст и внесёт все 
необходимые html элементы, стили, и содержание 
для отображения всей информации о книгах в виде таблицы.
*/

let convertToTable = arr =>{
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
		id:"item01",
		author:"Гоголь Н. В.",
		title:"American tragedy",
		desc:"A true story ...."
	},
	{
		id:"item02",
		author:"Достоевский Ф. М.",
		title:"Преступление и наказание",
		desc:"История об одном..."
	},
	{
		id:"item03",
		author:"Чехов А. П.",
		title:"Человек в футляре",
		desc:"Сатирический рассказ ..."
	}
]

convertToTable(books)

/*
5*. Реализовать одну 
страничку HTML о знаменитом человеке с 
использованием панели с вкладками (табы). 
Например, в качестве знаменитого человека 
возьмём Пушкина А.С., из википедии возьмём 
наполнение странички, в качестве вкладок 
можно указать: биография, творчество и т.п. 
Переключение между вкладками страницы и 
изменение содержимого реализовать с 
использованием JS.
*/

const tabs = document.querySelectorAll(".tab");
const pElems = document.querySelectorAll("section p");
for (var i = 0; i < pElems.length; i++) {
	pElems[i].style.display = "none";
}
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", () =>{
		pElems[i].style.display = "block";
		if (i === 0) {
			pElems[1].style.display = "none";
			pElems[2].style.display = "none";
		}
		else if(i === 1){
			pElems[0].style.display = "none";
			pElems[2].style.display = "none";
		}
		else if(i === 2){
			pElems[0].style.display = "none";
			pElems[1].style.display = "none";
		}
	})
}
