// coding challenge 3 part 1
function avgScore(scoreOne, scoreTwo, scoreThree) {
  let average = (scoreOne + scoreTwo + scoreThree) / 3;
  return average;
}
let avgKoalas = avgScore(96, 108, 89);
let avgDolphins = avgScore(88, 91, 110);

if (avgKoalas > 100 && avgDolphins > 100) {
  if (avgDolphins > avgKoalas)
    console.log(`Dolpins have won with ${avgDolphins}`);
  else if (avgKoalas > avgDolphins)
    console.log(`Dolpins have won with ${avgKoalas}`);
  else console.log("It is a draw");
} else console.log("nobody qualifies for winner");

//coding challenge 4 part 1

let value = 275;
let tip;

50 <= value <= 300 ? (tip = value * 0.15) : (tip = value * 0.2);
console.log(`The value is 
${value} and the tip is ${tip} `);

//coding challenge 1 part2
let calcAverage = (scoreOne, scoreTwo, scoreThree) =>
  (scoreOne + scoreTwo + scoreThree) / 3;
let avgD = calcAverage(85, 54, 41);
let avgK = calcAverage(23, 34, 27);
console.log(avgD, avgK);
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs.${avgKoalas})`);
  } else if (avgKoalas > 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs.${avgDolphins})`);
  } else console.log("no winner");
}

checkWinner(avgD, avgK);

//challenge 2 part 2
let bills = [125, 555, 44];

let calcTip = function (bill) {
  return 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
};
let total = bills + tips;

console.log(tips, total);

//challenge 1 part 1
//let BMI = mass/height **2
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;
let bmiMark = markWeight / markHeight ** 2;
let bmiJohn = johnWeight / johnHeight ** 2;
let markHigherBMI;

if (bmiMark < bmiJohn) {
  markHigherBMI = true;
} else markHigherBMI = false;

console.log(markHigherBMI);

//challenge 3 part 2 alt.1

function calcBMI(weight, height) {
  return weight / height ** 2;
}

const mark = {
  fullname: "Mark Miller",
  weight: 78,
  height: 1.78,

  bmi: calcBMI(this.height, this.weight),
};

const john = {
  fullname: "John Smith",
  weight: 92,
  height: 1.95,
  bmi: calcBMI(this.weight, this.height),
};

const markBMI = calcBMI(mark.weight, mark.height);
const johnBMI = calcBMI(john.weight, john.height)(markBMI > johnBMI)
  ? console.log(`${mark.fullname} has ${markBMI} BMI`)
  : console.log(`${john.fullname} has ${johnBMI} BMI`);

ß;

//challenge 3 part 2 alt.2

const mark = {
  fullname: "Mark Miller",
  weight: 78,
  height: 1.78,
  calcBMI: function () {
    this.bmi = (this.weight / this.height) ** 2;
    return this.bmi;
  },
};

const john = {
  fullname: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = (this.weight / this.height) ** 2;
    return this.bmi;
  },
};

if (markBMI > johnBMI) console.log(`${mark.fullname} has ${mark.bmi} BMI`);
else console.log(`${john.fullname} has ${john.bmi} BMI`);

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
totals = [];
tips = [];
for (let i = 0; i < bills.length; i++) {
  50 <= bills[i] <= 300 ? (tips[i] = bills[i] * 0.15) : (tips[i] = bills * 0.2);
  console.log(`The value is ${bills[i]} and the tip is ${tips[i]} `);
  let total = bills[i] + tips[i];
  totals.push(total);
  tips.push(tips[i]);
}

console.log(tips, totals);

let calcAverage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
  }

  let avg = sum / arr.length;
  return avg;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));

//coding challenge developer skills and setup alt.1

temp = [17, 21, 23, 35, 39];
temp2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let counter = 1;

  for (let i = 0; i < arr.length; i++) {
    let message = `.. ${arr[i]} in ${counter}...`;

    console.log(message);
    counter += 1;
    message = message.concat(message);
  }
}
printForecast(temp2);

//coding challenge developer skills and setup alt.2

temp = [17, 21, 23, 35, 39];
temp2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let counter = 1;
  let message = ``;

  for (let i = 0; i < arr.length; i++) {
    message += `.. ${arr[i]} in ${counter}...`;

    counter += 1;
  }

  console.log(message);
}
printForecast(temp2);

//challenge 1 part 14 OOP in JS

let Car = function(make, speed){
  this.make = make;
  this.speed = speed;

}

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(this.speed);
}

Car.prototype.brake = function(){
 this.speed -= 5;
  console.log(this.speed);
}

let carOne = new Car("BMW", 120);
let carTwo = new Car ("Mercedes", 95);
console.log(carOne, carTwo);

console.log(carOne.brake(), carTwo.accelerate());