// class Rectangle {
//     constructor(width, height, color) {
//       this.width = width;
//       this.height = height;
//       this.color = color;
//     }
  
//     calcArea() {
//       return this.width * this.height;
//     }
//   }
  
//   let rect = new Rectangle(6, 6, 'blue');
//   console.log(rect.width); 
//   console.log(rect.height); 
//   console.log(rect.color); 
//   console.log("Area is: " + rect.calcArea()); 
  
//   //------------------------------------

// class Person {
//     constructor(firstName, lastName, age, email) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//       this.email = email;
//     }
  
//     toString() {
//       return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
//     }
//   }
  
//   let person = new Person('Tanja', 'Leonova', 22, 'mp@gmail.com');
//   console.log(person.toString()); 

// //------------------------------------


// class Circle {
//   constructor(radius) {
//     this._radius = radius; 
//   }

//   get radius() {
//     return this._radius;
//   }

//   set diameter(newDiameter) {
//     this._radius = newDiameter / 2;
//   }

//   get diameter() {
//     return this._radius * 2;
//   }

//   area() {
//     return Math.PI * Math.pow(this._radius, 2);
//   }
// }

// let c = new Circle(3);
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area()}`); 

// c.diameter = 2;
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area()}`); 

// //--------------------------------------


// class Person {
//   constructor(firstName, lastName, age, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//   }

//   toString() {
//     return `${this.firstName} ${this.lastName ? this.lastName : ''} (age: ${this.age ? this.age : ''}, email: ${this.email ? this.email : ''})`;
//   }
// }

// function createPersonArray() {
//   const data = [
//     ['Maria', 'Petterson', 22, 'mp@gmail.com'],
//     ['Lexicon'],
//     ['Stefan', 'Larsson', 25],
//     ['Peter', 'Jansson', 24],
//   ];

//   const people = data.map(row => {
//     const [firstName, lastName, age, email] = row;
//     return new Person(firstName, lastName, age, email);
//   });

//   return people;
// }

// const peopleArray = createPersonArray();
// console.log(peopleArray.map(person => person.toString()));

// //-----------------------------------

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(point1, point2) {
    const betweenX = point1.x - point2.x;
    const betweenY = point1.y - point2.y;
    return Math.sqrt(betweenX ** 2 + betweenY ** 2);
  }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2)); 
