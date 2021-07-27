function ExecuteScript(strId)
{
  switch (strId)
  {
      case "625LhXOVXbI":
        Script1();
        break;
      case "6V3mGpVXUPH":
        Script2();
        break;
      case "5VpwSIeSVrW":
        Script3();
        break;
      case "6WukR3UbQMN":
        Script4();
        break;
      case "6Q1u4HpZRKD":
        Script5();
        break;
      case "6e5Gl7mHFgM":
        Script6();
        break;
      case "6lBt9GJv5aF":
        Script7();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

$.ajax({

url:
"https://script.google.com/macros/s/AKfycbxogWlaHI8ilUjtz9KNZHW93Hjnqzym_R31UJjt9NPbdpSaeDUqg6Xe5xuudBeoP-iMaA/exec",

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
"https://script.google.com/macros/s/AKfycbxogWlaHI8ilUjtz9KNZHW93Hjnqzym_R31UJjt9NPbdpSaeDUqg6Xe5xuudBeoP-iMaA/exec",

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

