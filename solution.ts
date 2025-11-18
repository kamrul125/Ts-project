// Problem 1

// function formatValue(value: string | number | boolean) {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   } else if (typeof value === "number") {
//     return value * 10;
//   } else if (typeof value === "boolean") {
//     return !value;
//   } else {
//     ("Invalid type");
//   }
// }

// console.log(formatValue("hello")); 
// console.log(formatValue(5));       
// console.log(formatValue(true));    

// Problem 2

// function getLength(value: string | any[]) {
//     if ( typeof value === "string") {
//         return value.length
//     } else if (Array.isArray(value)) {
//         return value.length;
//     }else {
//         ("Invalid type")
//     }
// }

// console.log(getLength("typescript"));      
// console.log(getLength([10, 20, 30, 40]));


// Problem-3

// class Person {
//     name: string;
//     age: number;

//  constructor(name : string, age: number) {
//         this.name = name
//         this.age = age

//     }

//      getDetails(): string {
//         return ` Name: ${this.name}, Age: ${this.name}  `
//     }


// }

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

// Problem-4

// type item = {
//    title: string;
//    rating: number;

// }

// function filterByRating(items:item[]) {
//     return items.filter((item) => item.rating >= 4);
    
// }
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

// Problem : 5

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   isActive: boolean;
// };


// function filterActiveUsers(users: User[]): User[] {
//   return users.filter(user => user.isActive);
// }


// const users: User[] = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];


// console.log(filterActiveUsers(users));

// Problem : 6

// interface Book {
//   title: string;
//   author: string;
//   publishedYear: number;
//   isAvailable: boolean;
// }


// function printBookDetails(book: Book): void {
//   const availability = book.isAvailable ? "Yes" : "No";
// console.log(
//     `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
// }


// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };


// printBookDetails(myBook);


