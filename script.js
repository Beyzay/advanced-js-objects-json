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
