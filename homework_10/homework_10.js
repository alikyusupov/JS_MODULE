/*
1. Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».

Создать шаблон объектов «Корзина товаров». 
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.
*/

function Product(name, price){
	this.name = name;
	this.price = price
}
let prod = new Product("Wallet",79.99);
console.log(prod.name, prod.price)//"Wallet" 79.99

function Cart(){
	let items = [];
	let numOfItems = items.length;
	this.addItem = function(p){
		items.push(p)
	}
	this.getTotal = function(){
		let totalSum = 0;
		items.forEach(o =>totalSum += o.price);
		return totalSum.toFixed(2)
	}
	this.getQty = function(){
		return items.length;
	}

}
let _cart_ = new Cart();

//добавляем два одинаковых товара созданных ранее
_cart_.addItem(prod);
_cart_.addItem(prod);
_cart_.addItem(prod);
console.log(_cart_.getTotal())//239.97
console.log(_cart_.getTotal())//239.97
console.log(_cart_.getQty())//2

/*
2. Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке 
вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
Интересы: музыка, программирование. 
Обучается в ИТМО.»
*/

function Homo(name, age, sex, hobbies){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.hobbies = hobbies;
	this.toString = function(){
		return `Человек: ${this.name}. Возраст: ${this.age}. Пол: ${this.sex}. Интересы:${this.hobbies.map(h=>" "+h)}`
	}
}
let man = new Homo("Алишер", 33, "мужской", ["web","svg","node"])
console.log(man.toString())//Человек: Алишер. Возраст: 33. Пол: мужской. Интересы: web,svg,node

function Student(name, age, sex, hobbies, education){
	Homo.call(this, name, age, sex, hobbies)
		this.education = education;
		this.toString = function(){
		return `Человек: ${this.name}. Возраст: ${this.age}. Пол: ${this.sex}. Интересы:${this.hobbies.map(h=>" "+h)}. Обучается в: ${this.education}`;
	}
}

let student = new Student("Алишер", 33, "мужской", ["web","svg","node"],"ITMO")
console.log(student.toString())//Человек: Алишер. Возраст: 33. Пол: мужской. Интересы: web, svg, node. Обучается в: ITMO

/*
3. Создать шаблон объектов «Пользователь».
Метод преобразования к строке выводит имя пользователя.
Два фабричных метода:
- «Создать анонимного пользователя» не получает аргументов,
 в качества имя пользователя устанавливает «Аноним».
- «Создать пользователя из данных» в качества аргументов 
получает объект с именем и возрастом пользователя.
*/

function User(){
	this.toString = function(){
		return "Человек с именем";
	}
}

	User.incognito = function(){
		let user = new User;
		user.toString = function(){
			return "Аноним";
		}
		return user;
	}

	User.famous = function(name, age){
		let user = new User;
		user.name = name;
		user.age = age
		user.toString = function(){
			return `${user.name} ${user.age}`
		}
		return user;
	}


let person1 = new User();
console.log(person1.toString())//Человек с именем

let person2 = User.incognito();
console.log(person2.toString())//Аноним

let person3 = User.famous("Антон", 25);
console.log(person3.toString())//Антон 25

/*
4. Выбрать 10 незнакомых (которые не разбирались на занятиях) 
шаблонов объектов (классов) доступных в глобальной области и 
привести информацию в виде комментариев в коде для чего 
они используются. Информацию можно найти в документации 
(справочные системы по js, статьи по программированию и т.п.).
*/



/**************************
	-ArrayBuffer
Объект ArrayBuffer используется для работы с бинарными данными


	-Error
Конструктор Error создаёт объект ошибки. 
Экземпляры объекта Error выбрасываются при возникновении ошибок во время выполнения
const y = new Error('I was constructed via the "new" keyword!');


	-Int16Array
Объект Int16Array представляет типизированный массив 16-битных целых чисел 
со знаком с дополнением до двух с платформо-зависимым порядком байт
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2


	-JSON
Объект JSON содержит методы для разбора объектной нотации JavaScript 
(JavaScript Object Notation — сокращённо JSON) и преобразования значений в JSON
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};
let json = JSON.stringify(student);
alert(typeof json); // мы получили строку!
alert(json); 
выведет объект в формате JSON:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}


	-Proxy
Объект Proxy позволяет создать прокси для другого объекта, может перехватывать и 
переопределить основные операции для данного объекта.
var handler = {
    get: function(target, name){
        return name in target?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;
console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37


	-Set
Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, 
так и другие типы объектов.
var mySet = new Set();
mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }


	-Map
Объект Map содержит пары ключ-значение и сохраняет порядок вставки. Любое значение (как объекты, так и примитивы) 
могут быть использованы в качестве ключей.

const myMap = new Map();

const keyObj = {},
    keyFunc = function () {},
    keyString = 'a string';

// задание значений
myMap.set(keyString, 'value associated with “a string”');
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// получение значений
myMap.get(keyString);    // value associated with “a string”
myMap.get(keyObj);       // value associated with keyObj
myMap.get(keyFunc);      // value associated with keyFunc


	-WeakMap
Объект WeakMap — коллекция пар ключ-значение. В качестве ключей могут быть использованы 
ТОЛЬКО объекты, а значения могут быть произвольных типов.
const wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
const o1 = {},
    o2 = function(){},
    o3 = window,
    o4 = [1, 2, 3];

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2);        // значением может быть что угодно, включая объект или функцию
wm2.set(o3, undefined);
wm2.set(wm1, wm2);      // ключами и значениями могут быть объекты. Даже WeakMap-ами

wm1.get(o2); // 'azerty'
wm2.get(o2); // undefined, нет значения для o2 в wm2
wm2.get(o3); // undefined, это установленное значение

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (даже если значение равно 'undefined')

wm3.set(o1, 37);
wm3.get(o1);     // 37

wm1.has(o1);     // true
wm1.delete(o1);
wm1.has(o1);

	-WeakSet
Объект WeakSet - коллекция, элементами которой могут быть только объекты. 
Ссылки на эти объекты в WeakSet являются слабыми. 
Каждый объект может быть добавлен в WeakSet только один раз.
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, foo не добавлен в WeakSet

ws.delete(window); // удаляет window из WeakSet
ws.has(window);    // false, window был удалён


*********************/

/*
5.* Перенести в ОО-код следующий пример из реального мира:
- есть курсы, учителя и ученики
- у каждого курса есть свой учитель
- у каждого учителя есть своя группа учеников
Определите какие объекты есть в этом примере, какие у них 
свойства и какие методы, как эти объекты будут между собой 
взаимодействовать, например, к курсу можно добавить учителя.
Создайте все необходимые шаблоны объектов (классы) и приведите 
пример их использования.
*/

function Course(name, durationInHours){
	let group = [];
	this.name = name;
	this.duration = durationInHours;
	this.addListener = function(member){
		group.push(member)
	}
	this.deleteListener = function(member){
		let index = group.findIndex(g=>g.id === member.id)
		group.splice(index,1)
	}
	this.getGroup = function(){
		return group;
	}
}

function Person(name){
	let courses = [];
	this.name = name;
	this.addCourse = function(course){
		courses.push(course)
	}
	this.deleteCourse = function(course){
		let index = courses.findIndex(c=>c.name === course.name)
		courses.splice(index,1)
	}
	this.getCourses = function(){
		return courses;
	}
}

function Teacher(name, profile){
	Person.call(this, name);
	this.profile = profile;
}

function Trainee(name, grade, id){
	Person.call(this, name);
	this.grade = grade;
	this.id = id;
}

	let course_1 = new Course("Maths", 120)

	let course_2 = new Course("History", 80)

	let course_3 = new Course("Art", 165)

	let teacher_1 = new Teacher("Ivan Ivanov", "Maths");

	let teacher_2 = new Teacher("Petr Petrov", "History");

	let teacher_3 = new Teacher("Oleg Shishkin", "Art");

	let student_1 = new Trainee("Alisher Yusupov", 2, "001");

	let student_2 = new Trainee("Aleksei Bystrov", 5, "002");

	let student_3 = new Trainee("Gennady Voloshin", 1, "003");


console.dir(teacher_1.getCourses());//[]
	teacher_1.addCourse(course_1);//добавили курс
console.dir(teacher_1.getCourses());//Array(1) [ {…} ]

	teacher_2.addCourse(course_2);//добавили курс
console.dir(teacher_2.getCourses());//Array(1) [ {…} ]

	teacher_3.addCourse(course_2);//добавили курс
console.dir(teacher_3.getCourses());//Array(1) [ {…} ]
	teacher_3.addCourse(course_3);//добавили курс
console.dir(teacher_3.getCourses());//Array(2) [ {…}, {…} ]
	teacher_3.deleteCourse(course_2);//удалили курс
console.dir(teacher_3.getCourses());//Array(1) [ {…} ]

	student_1.addCourse(course_2);
console.dir(student_1.getCourses());//Array(1) [ {…} ]

	course_1.addListener(student_1);
	course_1.addListener(student_2);
	course_1.addListener(student_3);
console.dir(course_1.getGroup())//Array(3) [ {…}, {…}, {…} ]
	
	course_1.deleteListener(student_1);
console.dir(course_1.getGroup())//Array(2) [ {…}, {…} ]


