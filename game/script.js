
const classes = ["red","blue","green","orange"]
const game = (n)=>{
	let table = document.createElement("table");
	table.style.textAlign = "center";
	gameHolder.appendChild(table);
	for (let i = 0; i < n; i++) {
		let trTag = document.createElement("tr");
		trTag.setAttribute("id",`${i}`)
		table.appendChild(trTag)
		for (let j = 0; j < n; j++) {
			let tdTag = document.createElement("td");
				tdTag.addEventListener("click", logic)
				tdTag.style.width = "150px";
				tdTag.style.height = "150px";
				tdTag.setAttribute("id",`${i}${j}`)
				trTag.appendChild(tdTag);
				tdTag.classList.add(classes[Math.floor(Math.random()*4)])
				if(tdTag.id.split("")[1] != 0 && tdTag.id.split("")[1] != 1){
					if (tdTag.className === tdTag.previousElementSibling.className 
						&& 
						tdTag.className === tdTag.previousElementSibling.previousElementSibling.className) {
							while(true){
								let randomClass = classes[Math.floor(Math.random()*4)]
								if (randomClass != tdTag.previousElementSibling.className) {
									tdTag.className = randomClass;
									break;
								}
							}
					}
				}
				if(tdTag.parentElement.id != "0" && tdTag.parentElement.id != "1"){
					let prev = document.getElementById((parseInt(tdTag.id) - 10).toString())
					let prevprev = document.getElementById((parseInt(tdTag.id) - 20).toString().padStart(2,"0"))
					if(prev && prevprev){
						if (tdTag.className === prev.className 
							&& 
							tdTag.className === prevprev.className) {
								while(true){
								let randomClass = classes[Math.floor(Math.random()*4)]
								if (randomClass != prev.className) {
									tdTag.className = randomClass;
									break;
								}
							}
						}
					}
				}

		}
	}
}
game(5)

let IsFirstGemIsChosen = false;
let tempClass = "";
let ticker = 0;

function logic(e){
	if (!IsFirstGemIsChosen) {
		tempClass = e.target.className;
		IsFirstGemIsChosen = !IsFirstGemIsChosen;
	}
	else{
		e.target.className = tempClass;
		IsFirstGemIsChosen = !IsFirstGemIsChosen;
	}
	ticker++;
	if(ticker > 1){
		check3InRow(e.target);
		ticker = 0;
	}
}

function check3InRow(t){
	if(t.id.split("")[1] != 0 && t.id.split("")[1] != 1){
					if (t.className === t.previousElementSibling.className 
						&& 
						t.className === t.previousElementSibling.previousElementSibling.className) {
							while(true){
								let randomClass = classes[Math.floor(Math.random()*4)]
								if (randomClass != t.previousElementSibling.className) {
									t.className = randomClass;
									break;
								}
							}
					}
				}
}

/*const trs = document.getElementsByTagName("tr");
for (let i = 0; i < trs.length; i++) {
	for (let j = 0; j < trs[i].children.length; j++) {
			trs[i].children[j].addEventListener("click", e => {
				console.log(e.target.id)
			})
	}
}*/

/*function checkArray(row,col){
	let deleteColArray = hasVertical(row,col);
	let deleteRowArray = hasHorizontal(row,col);
	let resultArray = [];
	for( let i = 0; i < deleteColArray.length; i++) {
		for ( let j =0; j < deleteRowArray.length; j++) {
			resultArray.push(deleteRowArray);
			if(!checkIndex(deleteRowArray[i], deleteColArray[j]))
				resultArray.push(deleteColArray[j]);
		}
	}
	return resultArray;
}
//Проверка совпадения
function checkIndex(obj1, obj2){
	if ( obj1.row == obj2.row && obj1.col == obj2.col)
		return true;
	return false;
}
let arr = []
//Проверка вниз и вверх по индексу камня
function hasVertical(row,col){
	let current = arr[row][col];
	let arrStone = [];
	arrStone.push(current);
	let tmpRow = row;
	let stream = 0;
	while( tmpRow > 0 && arr[tmpRow-1][col] == current){
		arrStone.push({tmpRow,col});
		stream++;
		tmpRow--;
	}
	tmpRow = row;
	while( tmp < numRows -1 && arr[tmp+1][col] == current) {
		arrStone.push({tmpRow,col});
		streak++;
		tmpRow++;
	}
	if ( streak > 2) {
		return arrStone;
	}
	return streak > 2;
}
//Проверка влево и вправо по индексу камня
function hasHorizontal(row,col){
	let current = arr[row][col];
	let arrStone = [];
	arrStone.push(current);
	let tmpCol = col;
	let streak = 0;
	while( tmpCol > 0 && arr[row][tmpCol] == current){
		arrStone.push({row,tmpCol});
		stream++;
		tmpRow--;
	}
	tmpCol = col;
	while( tmpCol < numCols -1 && arr[row][tmpCol+1] == current) {
		arrStone.push({row,tmpCol});
		streak++;
		tmpCol++;
	}
	if ( streak > 2) {
		return arrStone;
	}
	return streak > 2;
}*/


