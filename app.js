const $question = $("#question")
const $a = $("#a")
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");
const $p1Score=$("#player1 h4")
const $p2Score = $("#player2 h4")
console.log($p1Score)


const reset = {
  p1: 0,
  p2: 0,
  currentQuestion: {}
}

//Gets user click and checks if it is correct

const chooseAnswer = (event, qData) => {
  const chosenAnswer = event.target.innerText
  const correctAnswer = qData.answer
  
  if (chosenAnswer === correctAnswer) {
    console.log("correct")
  } else {
    console.log("incorrect")
  }


}







//Function tosets the board with a random question and answer
const setUp = (quest) => {
  const randQ = Math.floor(Math.random() * quest.length)
  const randomQuestion = qa[randQ]
  $question.text(randomQuestion.question)
  $a.text(randomQuestion.a)
  $b.text(randomQuestion.b);
  $c.text(randomQuestion.c);
  $d.text(randomQuestion.d);


  $p1Score.text(reset.p1)
  $p2Score.text(reset.p2)

  

  $("li").on("click", (event) => {
    chooseAnswer(event,randomQuestion)
  })
  
  
}








let qa = []

const URL = "https://cdn.contentful.com/spaces/b4lrd0mzlolr/environments/master/entries?access_token=Fwvz9mWot0msbZT5yWf1Yfai9j1y0rGajVA1bU2DtBg&content_type=triviaQuestions"
$.ajax(URL)
  .then((data) => {
   
    qa = data.items.map((q)=>q.fields)
    console.log(qa)


    
    
     console.log(qa);

   setUp(qa);
  

  })

