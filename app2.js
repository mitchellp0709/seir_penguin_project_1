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
  which: true,
};









  const backgroundImgURLs = {
    0: ['url("https://media.istockphoto.com/photos/tennis-rackets-and-balls-leaned-against-the-net-picture-id1171084311?k=20&m=1171084311&s=612x612&w=0&h=5gTGOsXlkZkSggxRnxbevqt80mKf12xT6GXUC6MN_Qc=")', "Tennis scores go Love, 15, 30, 40, game."],

    1: ['url("https://static0.srcdn.com/wordpress/wp-content/uploads/2019/09/bikini-bottom.png")', "It's not just a boulder, it's a rock! The pioneers used to ride these babies for miles!."],

    2: ['url("https://wallpaperaccess.com/full/793421.jpg")', "It is known."],

    3: ['url("https://wallpapercave.com/wp/wp6025656.jpg")', "Despite their long neck, their center of gravity is low on ther body. Once they reach that point in the depth of water, it will rise to the surface, causing their head to fall forward and submerging their head."],

    4: ['url("https://wallpaperaccess.com/full/202054.jpg")', "Our closest neighbor is a mere 2.5 million light-years away!"],

    5: ['url("https://wallpaperaccess.com/full/37639.jpg")', "It takes light from the sun a full 8 min to reach the Earth!"],

    6: ['url("https://www.thoughtco.com/thmb/EdSHeAblTXlLPZ_d_AXX_ddggg0=/1025x1025/filters:no_upscale():max_bytes(150000):strip_icc()/Mute-swans-56a27c773df78cf77276984f.jpg")', "The symbol of our country mates for life just like we do!"],

    7: ['url("https://cutewallpaper.org/21/beaver-wallpaper/American-Beaver-Bing-Wallpaper-Download.jpg")', "Bonus fun fact: Beavers are nocturnal only by instinct. The predators that they used to avoid by being active in the day time are now extinct!"],

    8: ['url("https://nerdist.com/wp-content/uploads/2020/08/7205314-sevenj.jpg")', "'You see, Companies, they come and go. But talent, talent is forever.'"],

    9: ['url("https://media1.popsugar-assets.com/files/thumbor/JtA7H7eMZSdKSIhSvEPVmgvJRnU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/08/956/n/1922507/4dadda3b58741b2d_bob_s_burgers/i/Bob-Burgers-Zoom-Background.png")', "McDonalds recently passed Subway for biggest chain."],

    10: ['url("https://cdn-1.motorsport.com/static/img/amp/4900000/4980000/4986000/4986300/4986332/s6_1001214/1001214.jpg")', "Despite making the engines for Red Bull, they do not have an official team."],

    11: ['url("https://www.wipremiertrivia.com/wp-content/uploads/2018/09/NFL-Wallpaper.jpg")', "I don't want to talk about it."],

    12: ['url("https://upload.wikimedia.org/wikipedia/commons/6/66/Wilfredintertitle.png")', "Fear is the mind killer, Ryan"],

    13: ['url("https://images5.alphacoders.com/668/thumb-1920-668183.jpg")', "Go Cows!!!"],

    14: ['url("https://i.pinimg.com/originals/f3/a9/c7/f3a9c7b5ede76621b0fe02dc4edddded.png")', "Hooray Todd!"],

    15: ['url("https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/01/skyrim-finally-awake-memes-featured-Cropped.jpg?q=50&fit=contain&w=943&h=496&dpr=1.5")', "But they should be."],

    16: ['url("https://wallpapercave.com/wp/THWKvXb.jpg")', "He may act young, but don't forget he's actually 112 years old!"],

    17: ['url("https://www.wallpapertip.com/wmimgs/72-729918_halo-artwork-forerunner-art-design-walls-data-src.jpg")', "Even they couldn't escape the Flood"],

    18: ['url("https://media.istockphoto.com/photos/crocodile-head-isolated-close-up-on-a-green-background-picture-id1204016813")', "Technically the death roll induces drowning, but 'death roll' is too cool of a term to not be included."],

    19: ['url("https://wallpaperaccess.com/full/2933522.jpg")', "Yeah, seriously."],
  };


//Makes a functional close button for users to close the initial modal and final modal
$(".close").on("click", () => {
  $("#modal").hide()
  $("#wmodal").hide()
})




//Allows users to choose how many points they need to win!
let maxPoints = null
$("button").on("click",()=> {
  maxPoints = $("input").val()
  
  $("#modal").hide()
  maxPoints = parseInt(maxPoints);
  
})

//Creates button functionality to play again
$("#play-again").on("click",()=> {
  $("#wmodal").hide()
  $("#modal").show()
  state.p1 = 0;
  state.p2 = 0;
  state.which = true;
  $p1Score.text(state.p1);
  $p2Score.text(state.p2);
})





  $("h5").on("click", (event) => {
    event.preventDefault()
    state.p1 = 0
    state.p2 = 0
    state.which = true
    $p1Score.text(state.p1);
    $p2Score.text(state.p2);
    $("#modal").show()
  })




const winningModal = (score1, score2) => {
  if (score1 >= maxPoints || score2 >= maxPoints) {
    $("#wmodal").show()
    if (state.p1 > state.p2) {
      $("#wmodal p").text("Congratulations, player 1 wins!");
    } else {
      $("#wmodal p").text("Congratulations, player 2 wins!");
    }
  }
}





  const popup = (event) => {
    if (event.target.innerText === question.answer) {
      alert("Correct! ");
    } else {
      alert("Incorrect");
    }


  }



  const chooseAnswer = (event, question, ind) => {
  
    if (event.target.innerText === question.answer) {
      alert("Correct!")
      if (state.which) {
        $("#player2 h3").css("background-color", "green")
        $("#player1 h3").css("background-color", "rgb(66, 112, 169)");
        state.p1++
        state.which = !state.which
      } else {
        $("#player1 h3").css("background-color", "green");
        $("#player2 h3").css("background-color", "rgb(66, 112, 169)");
        state.p2++;
        state.which = !state.which;
      }
      setBoard(questions)
    } else {
      alert("Sorry, the correct answer was " + question.answer + ". " + backgroundImgURLs[ind][1])
      setBoard(questions)
      state.which = !state.which;
    }
    winningModal(state.p1, state.p1);

  }




  const setBoard = (q) => {
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

 
    $("body").css("background-image", backgroundImgURLs[randomIndex][0])
 
   

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
      chooseAnswer(event, randomQuestion, randomIndex)
    })
    
  }











  let question = [];

  const URL =
    "https://cdn.contentful.com/spaces/b4lrd0mzlolr/environments/master/entries?access_token=Fwvz9mWot0msbZT5yWf1Yfai9j1y0rGajVA1bU2DtBg&content_type=triviaQuestions";
  $.ajax(URL).then((data) => {
    questions = data.items.map((q) => q.fields);
    console.log(data);
    console.log(questions);
    setBoard(questions);

  });
