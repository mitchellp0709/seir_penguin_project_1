const $question = $("#question")
const $a = $("#a")
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");
const $p1Score=$("#player1 h4")
const $p2Score = $("#player2 h4")



const state = {
  p1: 0,
  p2: 0,
  currentQuestion: {},
  which: true
}

//Gets user click and checks if it is correct

// const chooseAnswer = (event, qData) => {
//   let chosenAnswer = event.target.innerText
//   let correctAnswer = qData.answer
  
//   // if (chosenAnswer == correctAnswer) {
//   //   if (state.which) {
//   //     state.p1++
//   //     state.which = !state.which;
//   //   } else {
//   //     state.p2++;
//   //     state.which = !state.which;
//   //   }
//   // } else{state.which = !state.which}
//   // setUp(qa)
//   //state.which != state.which;
  
//   console.log(correctAnswer)
//   if (chosenAnswer === correctAnswer) {
//     console.log("correct")
//     setUp(qa);
//   } else {
//     console.log("incorrect")  
//     setUp(qa);
//   }
//   console.log(qData)
  

// }



//Retry of the choose answer function

const chooseAnswer = (event, question) => {
  console.log(event)
  if (event.target.innerText === question.answer) {
  } else {
    setUp(qa)
  }
}













//Function tosets the board with a random question and answer

const setUp = (quest) => {
  //Creates random index based on number of questions
  let randQ = Math.floor(Math.random() * quest.length)
  //Creates a random question based on the random index
  let randomQuestion = qa[randQ]
  //Sets the game with parts of the random question
  $question.text(randomQuestion.question)
  $a.text(randomQuestion.a)
  $b.text(randomQuestion.b);
  $c.text(randomQuestion.c);
  $d.text(randomQuestion.d);


  $p1Score.text(state.p1)
  $p2Score.text(state.p2)

  
  $("li").on("click", (event) => {
  chooseAnswer(event, randomQuestion)
})



// $("li").on("click", (chooseAnswer) => {
//   chooseAnswer(event, randomQuestion);
// });
  

}

  







let qa = []

const URL = "https://cdn.contentful.com/spaces/b4lrd0mzlolr/environments/master/entries?access_token=Fwvz9mWot0msbZT5yWf1Yfai9j1y0rGajVA1bU2DtBg&content_type=triviaQuestions"
$.ajax(URL)
  .then((data) => {
   
    //Grabs data as an array of objects and stores them in variable qa
    qa = data.items.map((q)=>q.fields)
    console.log(qa)

   setUp(qa);
  

  })

