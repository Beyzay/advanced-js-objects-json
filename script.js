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

// 3.b. Create an array of scores and destructure the first 2 scores and log them
let scores = [95, 90, 100];
let [firstScore, secondScore] = scores;
console.log("First score (Destructured):", firstScore);
console.log("Second score (Destructured):", secondScore);

// 4.a. Use the spread operator to clone the "student" object and modify the cloned object
let modifiedStudentClone = { ...student, graduationYear: 2025 };
console.log("Modified student object clone:", modifiedStudentClone);
console.log("Original student object:", student); // Original object remains unchanged

