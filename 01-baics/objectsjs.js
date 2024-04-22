// Objests in JavaScript

const course = {
  courseName: "JavaScript",
  courseDuration: "6 months",
  courseInstructor: "John Doe",
  price: 2000,
};

// course.courseInstructor

const { courseInstructor } = course; // destructuring in JavaScript
console.log(courseInstructor);

const { courseInstructor: instructor } = course; // alias destructuring in JavaScript
console.log(instructor);
