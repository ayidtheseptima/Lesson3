//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

const fruts = [
	{ id: 0, name: "Apple" },
	{ id: 1, name: "Tomat" },
	{ id: 2, name: "Cherry" },
	{ id: 3, name: "Orange" },
];

const names = fruts.map((fruit) => fruit.name);

console.log(names);
//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
for (i = 2; i < 11; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}
//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }
let z = 0;
while (z < 5) {
	console.log(`цифра ${z}!`);
	z++;
}
//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
let num;

while (true) {
	num = prompt("Введіть число більше за 100:", "");
	if (num === null || num === "") {
		break;
	}
	num = Number(num);
	if (num > 100) {
		break;
	}
}
//  -- 5 --
// Вирахуйте середній вік

const girls = [
	{ age: 23, name: "Оля" },
	{ age: 29, name: "Аня" },
	{ age: 10, name: "Юля" },
	{ age: 20, name: "Катя" },
];
let sum = 0;
for (const girl of girls) {
	sum += girl.age;
}
let avg = sum / girls.length;
console.log(avg);
