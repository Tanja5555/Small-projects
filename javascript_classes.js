class Rectangle {
    constructor(width, height, color) {
      this.width = width;
      this.height = height;
      this.color = color;
    }
  
    calcArea() {
      return this.width * this.height;
    }
  }
  
  let rect = new Rectangle(6, 6, 'blue');
  console.log(rect.width); 
  console.log(rect.height); 
  console.log(rect.color); 
  console.log("Area is: " + rect.calcArea()); 
  
  //------------------------------------

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

