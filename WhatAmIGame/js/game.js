
var score = 0;

first = [
  "I love having seconds because I never gain a pound!",
  "I've been running my entire life.",
  "I've never been polished, but I shine like nobody's business!",
  "I'm freakishly strong--and I don't even exercise!",
  "I don't believe in raincoats or umbrellas.",
  "I've always got my back against the wall.",
  "My job has its ups and downs, but I kinda like it.",
  "I love it when people drop me little notes.",
  "Fix your hair with my comb? Bad idea.",
  "I've lived rent-free all my life!"
];

second = [
  "I'm almost always up against the wall.",
  "I may be crooked, but I'll never be a criminal.",
  "I've helped lost sailors find their way home for years.",
  "I can hold up a piano without even breaking a sweat.",
  "I'm full of blades, but I'd never cut you.",
  "Whenever we're together, I like what I see (at least I should like what I see).",
  "I'm with you every step of the way.",
  "None of my keyes will ever fit into a lock.",
  "Having me around can be sticky business.",
  "I've got nothing to hide... except my head, legs, and tail!"
];

third = [
  "The only thing I can hold in my hands is time.",
  "I'm so full of forks, I could open up a silverware store.",
  "I really got it glowin' on!",
  "As tough as I am, people always seem to walk all over me.",
  "Green? Yes. Envious? No.",
  "I'm always taking time to reflect.",
  "I see people from all walks of life.",
  "I'm full of scales, but I'm not a fish.",
  "Bee-lieve me when I say it doesn't get any sweeter than me!",
  "Slow and steady always win the race."
];

answer = [
  "clock",
  "river",
  "star",
  "floor",
  "lawn",
  "mirror",
  "stairs",
  "piano",
  "honey",
  "turtle"
];

i = 0;
//console.log(i);
rid1 = true;
rid2 = false;
rid3 = false;

//console.log("hello");
document.getElementById('riddle1').innerHTML = '<p>' + first[i] + '</p>';

function hint(){
  if ((rid1 == true) && (rid2 == false)){
    document.getElementById('hints').innerHTML += "<section id='riddle2' class='fullwidth'></section>";
    document.getElementById('riddle2').innerHTML = '<p>' + second[i] + '</p>';
    rid2 = true;
  }
  else if ((rid1 == true) && (rid2 == true) && (rid3 == false)){
    document.getElementById('hints').innerHTML += "<section id='riddle3' class='fullwidth'></section>"
    document.getElementById('riddle3').innerHTML = '<p>' + third[i] + '</p>';
    rid3 = true;
  }
  else if ((rid1 == true) && (rid2 == true) && (rid3 == true)){
    alert('There are no more hints left. See if you can guess what I am with the three hints provided. Otherwise, press the "Check Answer" button to see the answer.');
  }
};

function info(){
  alert("HOW TO PLAY: \n 1. One hint will appear before you, and you must guess what the thing is based off of it.\n 2. If you cannot get it, you can ask for a second and third hint.\n 3. If you guess correctly based off of the first hint, you get 3 points. If you guess correctly based off of the first and second hints, you get 2 points. If you guess correctly based off of all three hints, you get 1 point. If you don't guess correctly or skip the riddle, you get 0 points.\n 4. The more riddles you guess correctly, the more points you get!");
}

function skip(){
  i++;
  //console.log(i);
  if(i > 9){
    endgame();
  }
  document.getElementById('hints').innerHTML = "<section id='riddle1' class='fullwidth'><p>" + first[i] + "</p></section";
  rid2 = false;
  rid3 = false;
  document.getElementById('answerCheck').innerHTML = '';
  document.getElementById('answer').value = '';

};

function check(){
  ans = document.getElementById('answer').value
  if (ans == answer[i]){
    // 1 HINT
    if ((rid1 == true) && (rid2 == false)){
      score += 3;
      document.getElementById('answerCheck').innerHTML = 'Correct! <br> Total Score: '+ score +"<br> <button class='button next' onclick='skip()'>Next Riddle</button>";
    }
    // 2 HINTS
    else if ((rid1 == true) && (rid2 == true) && (rid3 == false)){
      score += 2;
      document.getElementById('answerCheck').innerHTML = 'Correct! <br> Total Score: '+ score+"<br> <button class='button next' onclick='skip()'>Next Riddle</button>";
    }
    // 3 HINTS
    else if ((rid1 == true) && (rid2 == true) && (rid3 == true)){
      score += 1;
      document.getElementById('answerCheck').innerHTML = 'Correct! <br> Total Score: '+ score+"<br> <button class='button next' onclick='skip()'>Next Riddle</button>";
    }

  }
  else{
    document.getElementById('answerCheck').innerHTML = "Wrong!<br> Try again or click the 'Reveal Answer' button. <br> <button class='button reveal' onclick='reveal()'>Reveal Answer</button>";
  }
};

function reveal(){
  document.getElementById('answerCheck').innerHTML = "";
  document.getElementById('answerCheck').innerHTML = "Answer: "+ answer[i] +"<br> Total Score: "+ score + "<br> <button class='button next' onclick='skip()'>Next Riddle</button>";
}

function endgame(){
  window.location.href="./end.html";
  // Where I learned how to store variables in local storage: https://www.c-sharpcorner.com/blogs/get-and-set-variable-values-from-one-javascript-file-to-another-javascript-file-using-local-storage
  localStorage.setItem("scoreLS", score); //need to pass variable to another JS file, so store it in localStorage
  //console.log("You finished!");
}
