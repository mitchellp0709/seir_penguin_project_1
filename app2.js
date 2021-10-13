const $question = $("#question");
const $a = $("#a");
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");
const $p1Score = $("#player1 h4");
const $p2Score = $("#player2 h4");

const state = {
  p1: 0,
  p2: 0,
  currentQuestion: {},
  which: true,
};

const chooseAnswer = (event,question) => {
  
  if (event.target.innerText === question.answer) {
    console.log("correct")
    if (state.which) {
      state.p1++
      state.which = !state.which
    } else {
      state.p2++;
      state.which = !state.which;
    }
    setBoard(questions)
  } else {
    console.log("incorrect")
    setBoard(questions)
    state.which = !state.which;
  }


}




const setBoard = (q) => {
  const randomIndex = Math.floor(Math.random() * q.length)
  const randomQuestion = q[randomIndex]


  //Update the question and answer choices on the board.
  $question.text(randomQuestion.question)
  $a.text(randomQuestion.a);
  $b.text(randomQuestion.b);
  $c.text(randomQuestion.c);
  $d.text(randomQuestion.d);

  $p1Score.text(state.p1);
  $p2Score.text(state.p2);


  $("li").off()
  $("li").on("click", (event) => {
    chooseAnswer(event,randomQuestion)
  })
}













let question = []

const URL =
  "https://cdn.contentful.com/spaces/b4lrd0mzlolr/environments/master/entries?access_token=Fwvz9mWot0msbZT5yWf1Yfai9j1y0rGajVA1bU2DtBg&content_type=triviaQuestions";
$.ajax(URL).then((data) => {
  questions = data.items.map((q) => q.fields)
  console.log(data)
  console.log(questions)
  setBoard(questions)
});
