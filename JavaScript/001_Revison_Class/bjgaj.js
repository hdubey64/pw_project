const myQuestions = [
   {
      question: "What is the capital of France?",
      answers: {
         a: "Paris",
         b: "London",
         c: "New York",
      },
      correctAnswer: "a",
   },
   {
      question: "What is the largest country in the world?",
      answers: {
         a: "Russia",
         b: "China",
         c: "United States",
      },
      correctAnswer: "a",
   },
   {
      question: "What is the currency of Japan?",
      answers: {
         a: "Yuan",
         b: "Euro",
         c: "Yen",
      },
      correctAnswer: "c",
   },
];

Object.values(myQuestions[0].answers).map((key) => {
   console.log(key);
   console.log(myQuestions[0].answers[key]);
});
