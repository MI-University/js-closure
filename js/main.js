// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.
// Example:
// console.log("This house is not nice!".filter('not'));
// Output: "This house is nice!"

String.prototype.filter = function (bannedWords) {
  return this.split(' ')
    .filter((str) => !bannedWords.includes(str))
    .join(' ')
}

console.log('This house is not nice'.filter(['not']))

// Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
// that works by repeatedly stepping through the list to be sorted,
// Example:[6,4,0, 3,-2,1].bubbleSort();
// Output : [-2, 0, 1, 3, 4, 6]

Array.prototype.bubbleSort = function () {
  for (let j = 0; j < this.length - 1; j++) {
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        const temp = this[i]
        this[i] = this[i + 1]
        this[i + 1] = temp
      }
    }
  }
}

const arr = [6, 4, 0, 3, -2, 1]
arr.bubbleSort()
console.log(arr) // Since this is in-place algorithm

// Exercise 3:
// Create an object called Teacher derived from a Person function constructor, and implement
// a method called teach that receives a string called subject, and prints out: [teacher's name]
// is now teaching [subject].
// Create a Teacher object and call its teach method.
// Also do the same thing using Object.create. When using Object.create you will need a
// factory function instead of a function constructor in order to pass parameters such as
// ‘name’ to be set in the prototype.

function Person(name) {
  this.name = name
}
Person.prototype.sayHi = function () {
  console.log('Hi, This is', this.name)
}

function Teacher(name) {
  Person.call(this, name)
}

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher

Teacher.prototype.teach = function (subject) {
  this.subject = subject
  console.log(this.name + ' is now teaching ' + this.subject)
}

const teacher = new Teacher('Sami Taha')
teacher.teach('WAP')
teacher.sayHi()

// Exercise 4:
// Write code that will create person, student, and professor objects.
// • Person objects have
// o name and age fields
// o a greeting method that prints out: “Greetings, my name is [name] and I am
// [age] years old.”
// o a salute method that prints out: “Good morning!, and in case I dont see you,
// good afternoon, good evening and good night!”
// • Student objects inherit name, age, and salute from person. They also have a field
// ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
// [name] and I am studying [major]. The greeting should be output to the console.
// • Professor objects inherit name, age, and salute from person. They also have a field
// ‘department’ and have their own greeting method. Their salutation is “Good day,
// my name is [name] and I am in the [department] department.” Output it to the
// console.
// • Create a professor object and a student object. Call both the greeting and salutation
// methods on each.
// • Do this exercise once using the object prototype approach for inheritance and then
// using the function constructor approach.


// Style-2 ============================================================================================

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.greeting = function () {
  console.log(
    `Greetings, my name is ${this.name} and I am ${this.age} years old.`,
  )
}
Person.prototype.salute = function () {
  console.log(
    "Good morning!, and in case I don't see you, good afternoon, good evening and good night!",
  )
}


function Student(name, age, major) {
  Person.call(this, name, age)
  this.major = major
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greeting = function () {
  console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`)
}

function Professor(name, age, department) {
  Person.call(this, name, age)
  this.department = department
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Student;
Professor.prototype.greeting = function () {
  console.log(
    `Good day, my name is ${this.name} and I am in the ${this.department} department.`,
  )
}

const student = new Student('Yadab', 21, 'ICT')
const professor = new Professor('Prf. Sami Taha', 35, 'Computer Science')

student.greeting()
student.salute()
professor.greeting()
professor.salute()


// Style-1: ============================================================================================
// const Person = {
//   init: function(name, age) {
//       this.name = name;
//       this.age = age;
//       return this;
//   },
//   greeting: function() {
//       console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
//   },
//   salute: function() {
//       console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
//   }
// };

// const Student = Object.create(Person);
// Student.init = function(name, age, major) {
//   Person.init.call(this, name, age);
//   this.major = major;
//   return this;
// };
// Student.greeting = function() {
//   console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
// };

// const Professor = Object.create(Person);
// Professor.init = function(name, age, department) {
//   Person.init.call(this, name, age);
//   this.department = department;
//   return this;
// };
// Professor.greeting = function() {
//   console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
// };

// const student = Object.create(Student).init('John', 21, 'Computer Science');
// const professor = Object.create(Professor).init('Dr. Smith', 45, 'Mathematics');

// student.greeting();
// student.salute();
// professor.greeting();
// professor.salute();