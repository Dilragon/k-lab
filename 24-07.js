/* // OOP tasks
//1
class Person {
    constructor(name, age) {
        // initialize properties
        this.name = name;
        this.age = age;
    }

    greet() {
        // print greeting
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

//2
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        // add major
        this.major = major;
    }
}

//3
const student1 = new Student('Dilmurod', 20, 'Full Stack Development');
student1.greet();

//4
class AgeDifference {
    static compareAges(p1, p2) {
        // return age difference
        return p1.age - p2.age;
    }
}

console.log(AgeDifference.compareAges(student1, new Person('Alice', 10)));

//5
class Score {
    get grade() {
        // return grade
        return this._grade;
    }

    set grade(value) {
        // validate and assign
        if (value >= 0 && value <= 100) {
            this._grade = value;
        } else {
            throw new Error('Grade must be between 0 and 100');
        }
    }
}

//6
class Course {
    constructor(name) {
        this.students = [];
    }

    enroll(student) {
        // add to array
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            throw new Error('Only instances of Student can be enrolled');
        }
    }

    listStudents() {
        // print list
        this.students.forEach(student => {
            console.log(`${student.name}, Major: ${student.major}`);
        });
    }
}

const course1 = new Course('JavaScript 101');
course1.enroll(student1);
course1.listStudents();

//7
class Teacher extends Person {
    teach() {
        // print teaching message
        console.log(`${this.name} is teaching.`);
    }
}

const teacher1 = new Teacher('Bob');
teacher1.teach();
*/

/* // Function tasks
//8
let arr = [1, 2, 3, 4, 5];

function sumArray(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumArray(arr));

//9
let num = 5;

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(num));

//10
let arr2 = [1, 2, 3];

function appllyOperator(arr, operation) {
    return arr.map(operation);
}

console.log(appllyOperator(arr2, x => x * x));

//11
let arr3 = [1, 2, 3, 4, 5];

const evens = (arr) => arr.filter(x => x % 2 === 0);

console.log(evens(arr3));

//12
let num2 = 4;

function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(num2));

//13
function generateGreeting(name) {
    return `Hello, ${ name } ! `;
}
*/

/* // DOM manipulation tasks
//14
const btn = document.createElement("button");
btn.setAttribute("id", "btn");
document.body.appendChild(btn);

document.getElementById("btn").onclick = function () {
    // change text
    this.textContent = "Clicked!";
};

//15
const li = document.createElement("li");
// set text and append
li.textContent = "New Item";
document.querySelector("ul").appendChild(li);

//16
document.querySelector('div').onclick = function () {
    this.classList.toggle("highlight");
}

//17
const form = document.createElement('form');
const input = document.createElement('input');
input.type = "text";
form.appendChild(input);
document.body.appendChild(form);


form.onsubmit = function(e) {
  e.preventDefault();
  // check input value
  alert(input.value.trim() === "" ? "Input cannot be empty!" : `Submitted: ${input.value}`);
};


//18
const paragraph = document.createElement('p');
paragraph.setAttribute('id', 'time');
paragraph.textContent = 'None';

const now = new Date();
document.getElementById("time").textContent = now.toLocaleString();

//19
document.getElementById("colorSelect").onchange = function () {
    document.body.style.backgroundColor = this.value;
};

//20
const button = document.createElement("button");
button.setAttribute("id", "openModal");
const modal = document.createElement("div");
modal.setAttribute("id", "modal");
modal.style.display = "none";

document.getElementById("openModal").onclick = function () {
    document.getElementById("modal").style.display = "block";
};
*/