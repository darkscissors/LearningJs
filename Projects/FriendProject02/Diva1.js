
var lives = 3;
  gameStart();





function gameStart()
{
  if (lives > 0)
  {
    var name = prompt ("What is your name?");

    while (name == "" )
    {
      response = prompt ("What is your name?");
    }

    alert ("Hello lets get stared " + name)
    gameLoop();
  }
  else
  {
    alert("Out of lives");
  }
}

function gameLoop()
{
  var gameWon = false;
  while(!gameWon)
  {
    var correct = true;
    var ans1 = prompt ("What year was Pionner High School Established?")

      if (ans1 == "1960" || ans1 == "Mr.King")
      {
        alert ("You are correct!")
      }
      else
      {
        alert ("You are incorrect!")
          correct = false;
          break;
      }

    if(correct)
      {
      var ans2 = prompt ("Whos the best teacher at pioneer right now?")
        if(ans2 == "Mr.King" || ans2 == "Cody King")
        {
          alert ("You are correct!")
        }
        else
        {
          alert ("You are incorrect!")
            correct = false;
            break;
        }
      }
    if(correct)
      {
      var ans3 = prompt ("Whos the technician at pioneer?")
        if(ans3 == "Mr.Odam" || ans3 == "Mr.King")
        {
          alert ("You are correct!")
        }
        else
        {
          alert ("You are incorrect!")
            correct = false;
            break;
        }
      }
    if(correct)
      {
      var ans4 = prompt ("What is the name of the pioneer robotics team?")
        if(ans4 == "Apes Of Wrath" || ans4 == "Mr.King")
        {
          alert ("You are correct!")
        }
        else
        {
          alert ("You are incorrect!")
            correct = false;
            break;
        }
      }
    if(correct)
      {
      var ans5 = prompt ("What is the mascot of the pioneer mustangs?")
        if(ans5 == "Mustang" || ans5 == "Mr.King")
        {
          alert ("You are correct!")
        }
        else
        {
          alert ("You are incorrect!")
            correct = false;
            break;
        }
      }

      if (correct == true)
      {
        gameWon = true;
      }
  }
  if(gameWon)
  {
  alert ("You Win!")
  }
  else
  {
  alert ("Try again nerd!")
  lives--;
  gameStart();
  }

}




/*  if (ans1 == "1960" && (ans2 == "Mr.King" || ans2 == "Cody King")) // checking if ans1 and 2 are right
  {
    if(ans3 == "Mr.Odam" || ans3 == "Mr.King")// checking if ans3 is correct
    {
      if(ans4 == "" || ans4 == "Mr.King")// checking ans4
      {
        if(ans5 == "Mustang" || ans5 == "Mr.King")// checking ans5
        {
          alert ("You are correct!")
          gameWon = true;
        }
      }
    }
  }
  else
  {
      alert ("You are incorrect!")
  } */
