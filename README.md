<!-- Blog-1

Interface হল TypeScript-এ object বা class-এর একটা নিয়ম/ছক, যেটা বলে দেয়,
“এই object-এ কী কী property থাকবে এবং সেগুলোর টাইপ কী হবে।”
ভুল data ঢোকার আগেই TypeScript error ধরিয়ে দেয় → কোড সেফ হয়।

example :
Without Interface 

const student = {
  name: "Rahim",
  age: "15", // ভুল! এটা number হওয়া উচিত
  className: "9th"
}

With Interface (Safe & Clean):

interface Student {
  name: string;
  age: number;
  className: string;
}

const student: Student = {
  name: "Rahim",
  age: 15,
  className: "9th",
};

এখানে  name স্ট্রিং ,  age: number,এবং className স্ট্রিং কিনা তা চেক করবে । 


Type হলো TypeScript-এর একটি flexible alias সিস্টেম, যা ব্যবহার করে  primitive, union, tuple, function এবং ক্লাস/অবজেক্টের টাইপ নির্ধারণ করতে পারি 

Union Type উদাহরণ : 
type ID = string | number;
ব্যাখা 
এখানে আমি ID নামে একটি custom type alias বানিয়েছি।
মানে, ID হতে পারে string বা number।

Object Type উদাহরণ
type User = {
  name: string;
  age: number;
};

ব্যাখা 
এখানে User নামে একটি object type বানানো হয়েছে।
Object-টি name (string) এবং age (number) property থাকতে হবে। -->

<!-- Blog-3 -->

<!-- any:
যেকোন টাইপ চলবে 
TypeScript কোনো error দেবে না।
ঝুঁকিপূর্ণ কারণ টাইপ সেফটি থাকে না।

let data: any = "Hello"; 
data = 42;  
data = true;  
data.toUpperCase(); 

unknown: 
any এর মতো যেকোন মান দেয়া যায় বাট ব্যাবহারের আগে টাইপ চেক করতে হয় 
let value: unknown = "Hi";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

never :
এটা এমন ফাংশন যা কখনই রিটার্ন করেনা 
যেমন error throw করা, infinite loop

function throwError(): never {
  throw new Error("Error");
} -->


<!-- Blog-5 -->

<!-- Union Type (|)
typescript a union type use করা হয়,যখন একটি  variable a একাধিক type এর মধ্যে যেকোন একটি  হতে পারে  
যেমন: 
type ID = string | number;

let userId: ID;

userId = "xyz123"; 
userId = 101;      
userId = true; এটি ভূল কারন এখানে string এবং  number চলবে 

Intersection Type (&)

Intersection Type ব্যবহার করা হয় দুই বা তার বেশি টাইপ একসাথে মেলে একটি নতুন টাইপ তৈরি করতে
type Person = {
  name: string;
};
type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;
const staff: Staff = {
  name: "Rahim",
  employeeId: 123
}; -->
