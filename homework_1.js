/*
 На садовом участке площадью 10 соток, разбили грядки 
15 на 25 метров. Сколько м2 осталось незанято?
*/
let areaTotal = 1000;//10 соток  = 1000 кв м 
let remainder = areaTotal%(15*25);
console.log(remainder)//250

/*
Найдите площадь овального кольца, полученного из овала 
площадью 15 дм2 вырезанием овала площадью 600 см2.
*/
let ring = 1500 - 600;//15 дм2 = 1500 см2
console.log(ring)//900 см2

/*
Из трех данных чисел выбрать наименьшее.
*/

let smallest = Math.min(5,3,7);//первый способ
console.log(smallest)//3

let num1 = 15, num2 = 13, num3 = 17;//второй способ
let compare_start = num1 < num2 ? num1 : num2;
let compare_end	= compare_start < num3 ? compare_start : num3;
console.log(compare_end)//13

/*
Вывести в консоль ближайшее к 10 из двух чисел, 
записанных в переменные m и n. Например, среди 
чисел 8.5 и 11.45 ближайшее к десяти 11.45.
*/

//Здесь предполагается что одно число
//обязательно меньше 10
//а другое - больше
let middle = 10, m = 6.5, n = 12.5;
let closest = (middle-m) < (n-middle) ? m : n;
console.log(closest)//12.5

//здесь без дополнительных условий указанных ранее

let result_1 = m > middle ? m - middle : middle - m;
let result_2 = n > middle ? n - middle : middle - n;
let closest_version_two = result_1 < result_2 ? m : n;
console.log(closest_version_two)//12.5


/*
Трёхмерное пространство:
Есть три вершины a, b и с. У каждой 
вершина заданы координатами x, y, z как 
целые числа. Нужно определить - является 
ли треугольник с заданными координатами 
прямоугольным.
*/

//теорема Пифагора a*a + b*b = c*c

let coord1 = 3, coord2 = 4, coord3 = 5;
let isTriangle = coord3**2 ===( coord2**2) + (coord1**2) ? "Прямоугольный треугольник" : "Другой треугольник";
console.log(isTriangle)//Прямоугольный треугольник
/*
let coord1 = 3, coord2 = 7, coord3 = 5;
console.log(isTriangle)//Другой треугольник
*/
