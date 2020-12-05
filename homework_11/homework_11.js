/*
1. Используя прототипы:
Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Cвойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.
*/
class SuperProduct{
	constructor(name, price){
		this.name = name;
		this.price = price;
	}
}

class Product extends SuperProduct{
	constructor(name, price){
		super(name, price);
	}
}

function Cart(){}

Cart.prototype.products = [];

Cart.prototype.addItem = function(p){
	this.products.push(p)
}
Cart.prototype.getTotal = function(){
	let totalSum = 0;
	this.products.forEach(o =>totalSum += o.price);
	return totalSum.toFixed(2)
}
Cart.prototype.getQty = function(){
	return this.products.length;
}

let prod = new Product("Wallet",79.99);
console.log(prod.name, prod.price)//"Wallet" 79.99

let _cart_ = new Cart();
//добавляем два одинаковых товара созданных ранее
_cart_.addItem(prod);
_cart_.addItem(prod);
_cart_.addItem(prod);
console.log(_cart_.getTotal())//239.97
console.log(_cart_.getTotal())//239.97
console.log(_cart_.getQty())//3
/*
2. Используя смешанное наследование:
Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке вида: 
«Студент: Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование. Обучается в ИТМО.»
*/

function Homo(name, age, sex, hobbies){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.hobbies = hobbies;
}
Homo.prototype.toString = function(){
	return `Человек: ${this.name}. Возраст: ${this.age}. Пол: ${this.sex}. Интересы:${this.hobbies.map(h=>" "+h)}`
}

let man = new Homo("Алишер", 33, "мужской", ["web","svg","node"])
console.log(man.toString())//Человек: Алишер. Возраст: 33. Пол: мужской. Интересы: web,svg,node

function Student(name, age, sex, hobbies, education){
	Homo.call(this, name, age, sex, hobbies);
	this.education = education;
}
Student.prototype.toString = function(){
	return `Человек: ${this.name}. Возраст: ${this.age}. Пол: ${this.sex}. Интересы:${this.hobbies.map(h=>" "+h)}. Обучается в: ${this.education}`;
}

let student = new Student("Алишер", 33, "мужской", ["web","svg","node"],"ITMO")
console.log(student.toString())//Человек: Алишер. Возраст: 33. Пол: мужской. Интересы: web, svg, node. Обучается в: ITMO