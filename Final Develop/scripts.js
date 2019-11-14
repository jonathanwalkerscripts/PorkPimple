var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
var yername;
var houses = ['Lionsnoop', 'Sneezlewheeze', 'Hummingtalon', 'Wigglesnake',];
var housename = houses[Math.floor(Math.random() * houses.length)];




input.onkeypress = function(event) {
  if (event.key == "Enter" || event.keyCode == 13) {
    yername =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)




    
    
  }
};




function fadeOut() {
  document.getElementById("text").style.opacity = "0";
  document.getElementById("images").style.opacity = "0";
  document.getElementById("buttonBox").style.opacity = "0";
  document.getElementById("body").style.opacity = "0";
}

function fadeIn() {
  document.getElementById("text").style.opacity = "1";
  document.getElementById("images").style.opacity = "1";
  document.getElementById("buttonBox").style.opacity = "1";
  document.getElementById("body").style.opacity = "1";
  
  
}



var changeText = function(words) {
  
  text.innerHTML = words.replace("yourname", yername).replace("yoname",yername)
 .replace("housename", housename).replace("yohouse", housename);
  
 if (housename == "Wigglesnake")
 {
 document.body.style.background = "#0D6217";
 document.body.style.border = "thick ridge #AAAAAA";
 document.getElementById("text").style.color = '#AAAAAA';
 }
 if (housename == "Wigglesnake")
 {
 }
 else if (housename == "Hummingtalon")
 {
   document.body.style.background = "#000A90";
   document.body.style.border = "thick ridge #946b2d";
   document.getElementById("text").style.color = '#946b2d';
   
 }
 else if (housename == "Sneezlewheeze")
 {
   document.body.style.background = "#EEE117";
   document.body.style.border = "thick ridge black";
   document.getElementById("text").style.color = 'black';
 }
 else if (housename == "Lionsnoop")
 {
   document.body.style.background = "#7f0909";
   document.body.style.border = "thick ridge #ffc500";
   document.getElementById("text").style.color = 'ffc500';
   
 }

 


  console.log (changeText);
  
  
};



var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};

var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "<b>";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
};

var advanceTo = function(s) {
  fadeOut () 
 
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
  setTimeout(fadeIn, 500);
  
  
  
};

var advancePointsTo = function(s) {
  fadeOut () 
 
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
  setTimeout(fadeIn, 500);
  
  
  
};


scenario = {}
var scenario = {
  
  one: {
    image: "sockpuppet1.jpg", //dog
    text: "<b>Congratulations! You have been accepted to the Porkpimple School of Wands and Sorcery. Just sign your name below to get started with your magical education.</b>\n",
  },
  two: {
    image: "https://media.giphy.com/media/d3NjSIKlYXH2g/giphy.gif", //house
    text: "You slip on the strange, foul-smelling sock and wait. You feel a stirring at your ankle before it turns to you and speaks, \"Ah, yes! I've been waiting for you, yourname. I could smell you from a mile away. You may thrive within any house, in truth, but only one will help you achieve your full potential. You are destined for <b>House housename!</b>\"",
    buttons: [["Leave the Student Hall","advanceTo(scenario.three)"]]
  },
  three: {
    image: "",
    text: "<div id=\"plus500\"></div> Before you can exit the hall, a small man hobbles up to you and grasps you by the shoulder. \"yourname, congratulations on your selection to House housename!\" The man flashes a smile through an overgrown grey mustache. You begin to thank him, but he rambles on, \"I am <b>Stumbledwarf</b>, Housemaster of Porkpimple. I just wanted to find a random student to let them know that this is a totally normal magical school. You probably don't need to worry about mysteries, hidden passages, or your life being in peril. Most likely. Anyhow, enjoy the rest of your day! Courses begin tomorrow.\" The man limps away awkwardly.",
    buttons: [["Begin Your Classes", "advanceTo(scenario.four)"]]
  },
  four: {
    image: "http://cdn.shopify.com/s/files/1/0289/1534/products/QMx_HP_PrisonerAzkabanPrint_1756x988-2_grande.jpg?v=1485566675",
    text: "Your dog has run, barking loudly, into the basement. Your House wonder what's Your dog down there. The door jammed when you slammed it behind you. You are going to need something to pry it back open",
    buttons: [["Follow your Dog Downstairs", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
  },
  five: {
    image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "Despite the Grand Finale, you find Your House feeling frisky. You create Your dog a fire ball with your dog hands, and eye the bats fiercely.",
    buttons: [["Fireball at Bat #1", "advanceTo(scenario.six)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
  },
  six: {
    image: "",
    text: "You shoot the fireball at the bat no 1. It hits! The bat falls to the floor, but the others flash their fangs as your house they swoop in.",
    buttons: [["Duck and Cover", "advanceTo(scenario.five)"],["Swing Fists Wildly", "advanceTo(scenario.five)"],
    ["Conjure another fireball", "advanceTo(scenario.seven)"]]
  },
  seven: {
    
    image: "",
    text: "You begin to conjure your house another fireball, but there isn't enough time. The bats reach your house first, driving their fangs deep into your flesh.",
    buttons: [["Try Again", "advanceTo(scenario.one)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
  }

  
  
};



fadeIn ()
