function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fHSyEx1sHb":
        Script1();
        break;
      case "6gSimfByImE":
        Script2();
        break;
      case "6PwZ4J0sKHF":
        Script3();
        break;
      case "6Gjre2zu58C":
        Script4();
        break;
      case "5rFQ6CBrNof":
        Script5();
        break;
      case "6Eu7Ya7WQeD":
        Script6();
        break;
      case "6Dx5fc7eval":
        Script7();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyi0g1u8fMbaJaawLbn1lpRkFGed6zy7g06NYa09XNG7OunH2Ca2-E6n9ASpVJRYKMTqw/exec",

type: "POST",

data: {"FirstName": player.GetVar("FirstName")
, "LastName": player.GetVar("LastName")
, "Language": player.GetVar("Language")
, "Email": player.GetVar("Email")

},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script2()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyi0g1u8fMbaJaawLbn1lpRkFGed6zy7g06NYa09XNG7OunH2Ca2-E6n9ASpVJRYKMTqw/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Organization": player.GetVar("Organization")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script3()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyHHoQPqxMzr8lIqxxWxTVY_Zj4oQefqOL0YdAXaxLJf2kpqB03mv8joA/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "QuestTotal": player.GetVar("QuestTotal")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script4()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyi0g1u8fMbaJaawLbn1lpRkFGed6zy7g06NYa09XNG7OunH2Ca2-E6n9ASpVJRYKMTqw/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "QuestTotal": player.GetVar("QuestTotal")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script5()
{
  window.print();
}

function Script6()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyi0g1u8fMbaJaawLbn1lpRkFGed6zy7g06NYa09XNG7OunH2Ca2-E6n9ASpVJRYKMTqw/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Assessment": player.GetVar("Assessment")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

function Script7()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbyi0g1u8fMbaJaawLbn1lpRkFGed6zy7g06NYa09XNG7OunH2Ca2-E6n9ASpVJRYKMTqw/exec",

type: "POST",

data: {"Email": player.GetVar("Email")
, "Assessment": player.GetVar("Assessment")
},


success: function(data)

{

console.log(data);

},

error: function(err) {
console.log('Error:', err);
}

});

return false;

}

