var name = prompt ("What is your name?");

while (name == "" )
{
  response = prompt ("What is your name?");
}

var num = prompt ("Would you like to add or mutiply?")

var output = 0

if (num == "add" || num == "+")
{
    //var sum = 0
    var input = 0
    while (input != "stop")
    {
      if(input != null)
      output += input
      input = prompt ("Enter Number or Put stop to quit.")
    }



}
else if (num == 'multiply' || num == '*' )
{
  //var sum = 0
  var input = 0
  while (input != "stop")
  {
    if(input != null)
    output *= input
    input = prompt ("Enter Number or Put stop to quit.")
  }
}
if(output != null)
{
alert ( "Your calculation is: " + output)
}
else
{
alert ("Invalid output number")
}

//alert ("Have a nice day :)")
