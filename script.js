// 1.a. Create an object using the object literal syntax
let student = {
    name: "Jane Doe",
    age: 29,
    isEnrolled: "true",
    courses: ["Math", "Science", "Art"],
    displayBasicInfo: function () {
        return `--- Student Information ---\nName: ${this.name}\nAge: ${this.age}\nEnrolled: ${this.isEnrolled}\nCourses: ${this.courses.join(", " )}`
    }
};

// 1.b. Log specific properties/method of the "student" object
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(student.displayBasicInfo());

// 2.a. Convert the "student" JS object into a JSON string and log it
let studentJSONString = JSON.stringify(student);
console.log("JSON string:", studentJSONString); // JSON String - only data (methods lost)

// 2.b. Convert the student JSON string "studentJSONString" into a new JS object
// And log it to compare with the original "student" object
let studentJSONObj = JSON.parse(studentJSONString);
console.log("JSON object:", studentJSONObj); // Parsed JSON object - only data (no methods)
console.log("Original object:", student);

// 3.a. Destructure the "student" object to extract the "name" and "courses" properties and log them
let { name, courses } = student;
console.log("Name (Destructured):", name);
console.log("Courses (Destructured):", courses);

