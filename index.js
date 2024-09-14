// Auto-Tab Function
$(".squares").keyup(function () {
    if (this.value.length == this.maxLength) {
      var next = $(this).next('.squares');
      if (next.length)
          $(this).next('.squares').focus();
      else
          $(this).blur();
    }
});
// function which returns a regular expression to test if a string is a single alphabetical letter
function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}
// Selects all 30 input fields (doesn't work without for loop below due to how querySelectorAll works intrinsecally)
const squares = document.querySelectorAll(".squares")
for (let i = 0; i < squares.length; i++) {
  const y = squares[i];
  // only here below you can start doing things 
  y.addEventListener("keydown", function (event) {
    // uses the isLetter function from above to check if a user hit a valid keystroke. Effectively preventing numbers.
    if (isLetter(event.key) === false) {
      event.preventDefault();
    }
  });
}
//==============================================================
async function init () {
  const response = await fetch("https://words.dev-apis.com/word-of-the-day?"); /* add -puzzle=635- or other number to get a rigged one */
  const responseObject = await response.json();
  const word = responseObject.word.toUpperCase() // word = correct answer in API's database
  const correctWordArray = word.split("") // turns the words sent by the API into an array

  // Modifies style of -squares- variable declared in line 16
  // Row 1
  if (squares[0].value.toUpperCase() === correctWordArray[0]) {
    squares[0].style.backgroundColor = "green";
  } else if (squares[0].value.toUpperCase() === correctWordArray[1] || 
    squares[0].value.toUpperCase() === correctWordArray[2] || 
    squares[0].value.toUpperCase() === correctWordArray[3] || 
    squares[0].value.toUpperCase() === correctWordArray[4]) {
    squares[0].style.backgroundColor = "yellow";}
    else if (squares[0].value.toUpperCase() !== '') {
      squares[0].style.backgroundColor = "red";}

  if (squares[1].value.toUpperCase() === correctWordArray[1]) {
    squares[1].style.backgroundColor = "green";
  } else if (squares[1].value.toUpperCase() === correctWordArray[0] || 
    squares[1].value.toUpperCase() === correctWordArray[2] || 
    squares[1].value.toUpperCase() === correctWordArray[3] || 
    squares[1].value.toUpperCase() === correctWordArray[4]) {
    squares[1].style.backgroundColor = "yellow";} 
    else if (squares[1].value.toUpperCase() !== '') {
      squares[1].style.backgroundColor = "red";}
  
  if (squares[2].value.toUpperCase() === correctWordArray[2]) {
    squares[2].style.backgroundColor = "green";
  } else if (squares[2].value.toUpperCase() === correctWordArray[0] || 
    squares[2].value.toUpperCase() === correctWordArray[1] || 
    squares[2].value.toUpperCase() === correctWordArray[3] || 
    squares[2].value.toUpperCase() === correctWordArray[4]) {
    squares[2].style.backgroundColor = "yellow";}
    else if (squares[2].value.toUpperCase() !== '') {
      squares[2].style.backgroundColor = "red";} 

  if (squares[3].value.toUpperCase() === correctWordArray[3]) {
    squares[3].style.backgroundColor = "green";
  } else if (squares[3].value.toUpperCase() === correctWordArray[0] || 
    squares[3].value.toUpperCase() === correctWordArray[1] || 
    squares[3].value.toUpperCase() === correctWordArray[2] || 
    squares[3].value.toUpperCase() === correctWordArray[4]) {
    squares[3].style.backgroundColor = "yellow";}
    else if (squares[3].value.toUpperCase() !== '') {
      squares[3].style.backgroundColor = "red";}

  if (squares[4].value.toUpperCase() === correctWordArray[4]) {
    squares[4].style.backgroundColor = "green";
  } else if (squares[4].value === correctWordArray[0] || 
    squares[4].value.toUpperCase() === correctWordArray[1] || 
    squares[4].value.toUpperCase() === correctWordArray[2] || 
    squares[4].value.toUpperCase() === correctWordArray[3]) {
    squares[4].style.backgroundColor = "yellow";} 
    else if (squares[4].value.toUpperCase() !== '') {
    squares[4].style.backgroundColor = "red";}

  // Row 2
  if (squares[5].value.toUpperCase() === correctWordArray[0]) {
    squares[5].style.backgroundColor = "green";
  } else if (squares[5].value.toUpperCase() === correctWordArray[1] || 
    squares[5].value.toUpperCase() === correctWordArray[2] || 
    squares[5].value.toUpperCase() === correctWordArray[3] || 
    squares[5].value.toUpperCase() === correctWordArray[4]) {
    squares[5].style.backgroundColor = "yellow";}
    else if (squares[5].value.toUpperCase() !== '') {
      squares[5].style.backgroundColor = "red";}

  if (squares[6].value.toUpperCase() === correctWordArray[1]) {
    squares[6].style.backgroundColor = "green";
  } else if (squares[6].value.toUpperCase() === correctWordArray[0] || 
    squares[6].value.toUpperCase() === correctWordArray[2] || 
    squares[6].value.toUpperCase() === correctWordArray[3] || 
    squares[6].value.toUpperCase() === correctWordArray[4]) {
    squares[6].style.backgroundColor = "yellow";}
    else if (squares[6].value.toUpperCase() !== '') {
      squares[6].style.backgroundColor = "red";}

  if (squares[7].value.toUpperCase() === correctWordArray[2]) {
    squares[7].style.backgroundColor = "green";
  } else if (squares[7].value.toUpperCase() === correctWordArray[0] || 
    squares[7].value.toUpperCase() === correctWordArray[1] || 
    squares[7].value.toUpperCase() === correctWordArray[3] || 
    squares[7].value.toUpperCase() === correctWordArray[4]) {
    squares[7].style.backgroundColor = "yellow";}
    else if (squares[7].value.toUpperCase() !== '') {
      squares[7].style.backgroundColor = "red";}

  if (squares[8].value.toUpperCase() === correctWordArray[3]) {
    squares[8].style.backgroundColor = "green";
  } else if (squares[8].value.toUpperCase() === correctWordArray[0] || 
    squares[8].value.toUpperCase() === correctWordArray[1] || 
    squares[8].value.toUpperCase() === correctWordArray[2] || 
    squares[8].value.toUpperCase() === correctWordArray[4]) {
    squares[8].style.backgroundColor = "yellow";}
    else if (squares[8].value.toUpperCase() !== '') {
      squares[8].style.backgroundColor = "red";}

  if (squares[9].value.toUpperCase() === correctWordArray[4]) {
    squares[9].style.backgroundColor = "green";
  } else if (squares[9].value.toUpperCase() === correctWordArray[0] || 
    squares[9].value.toUpperCase() === correctWordArray[1] || 
    squares[9].value.toUpperCase() === correctWordArray[2] || 
    squares[9].value.toUpperCase() === correctWordArray[3]) {
    squares[9].style.backgroundColor = "yellow";}
    else if (squares[9].value.toUpperCase() !== '') {
      squares[9].style.backgroundColor = "red";}

  // Row 3
  if (squares[10].value.toUpperCase() === correctWordArray[0]) {
    squares[10].style.backgroundColor = "green";
  } else if (squares[10].value.toUpperCase() === correctWordArray[1] || 
    squares[10].value.toUpperCase() === correctWordArray[2] || 
    squares[10].value.toUpperCase() === correctWordArray[3] || 
    squares[10].value.toUpperCase() === correctWordArray[4]) {
    squares[10].style.backgroundColor = "yellow";}
    else if (squares[10].value.toUpperCase() !== '') {
      squares[10].style.backgroundColor = "red";}

  if (squares[11].value.toUpperCase() === correctWordArray[1]) {
    squares[11].style.backgroundColor = "green";
  } else if (squares[11].value.toUpperCase() === correctWordArray[0] || 
    squares[11].value.toUpperCase() === correctWordArray[2] || 
    squares[11].value.toUpperCase() === correctWordArray[3] || 
    squares[11].value.toUpperCase() === correctWordArray[4]) {
    squares[11].style.backgroundColor = "yellow";}
    else if (squares[11].value.toUpperCase() !== '') {
      squares[11].style.backgroundColor = "red";}

  if (squares[12].value.toUpperCase() === correctWordArray[2]) {
    squares[12].style.backgroundColor = "green";
  } else if (squares[12].value.toUpperCase() === correctWordArray[0] || 
    squares[12].value.toUpperCase() === correctWordArray[1] || 
    squares[12].value.toUpperCase() === correctWordArray[3] || 
    squares[12].value.toUpperCase() === correctWordArray[4]) {
    squares[12].style.backgroundColor = "yellow";}
    else if (squares[12].value.toUpperCase() !== '') {
      squares[12].style.backgroundColor = "red";}

  if (squares[13].value.toUpperCase() === correctWordArray[3]) {
    squares[13].style.backgroundColor = "green";
  } else if (squares[13].value.toUpperCase() === correctWordArray[0] || 
    squares[13].value.toUpperCase() === correctWordArray[1] || 
    squares[13].value.toUpperCase() === correctWordArray[2] || 
    squares[13].value.toUpperCase() === correctWordArray[4]) {
    squares[13].style.backgroundColor = "yellow";}
    else if (squares[13].value.toUpperCase() !== '') {
      squares[13].style.backgroundColor = "red";}

  if (squares[14].value.toUpperCase() === correctWordArray[4]) {
    squares[14].style.backgroundColor = "green";
  } else if (squares[14].value.toUpperCase() === correctWordArray[0] || 
    squares[14].value.toUpperCase() === correctWordArray[1] || 
    squares[14].value.toUpperCase() === correctWordArray[2] || 
    squares[14].value.toUpperCase() === correctWordArray[3]) {
    squares[14].style.backgroundColor = "yellow";}
    else if (squares[14].value.toUpperCase() !== '') {
      squares[14].style.backgroundColor = "red";}

  // Row 4
  if (squares[15].value.toUpperCase() === correctWordArray[0]) {
    squares[15].style.backgroundColor = "green";
  } else if (squares[15].value.toUpperCase() === correctWordArray[1] || 
    squares[15].value.toUpperCase() === correctWordArray[2] || 
    squares[15].value.toUpperCase() === correctWordArray[3] || 
    squares[15].value.toUpperCase() === correctWordArray[4]) {
    squares[15].style.backgroundColor = "yellow";}
    else if (squares[15].value.toUpperCase() !== '') {
      squares[15].style.backgroundColor = "red";}

  if (squares[16].value.toUpperCase() === correctWordArray[1]) {
    squares[16].style.backgroundColor = "green";
  } else if (squares[16].value.toUpperCase() === correctWordArray[0] || 
    squares[16].value.toUpperCase() === correctWordArray[2] || 
    squares[16].value.toUpperCase() === correctWordArray[3] || 
    squares[16].value.toUpperCase() === correctWordArray[4]) {
    squares[16].style.backgroundColor = "yellow";}
    else if (squares[16].value.toUpperCase() !== '') {
      squares[16].style.backgroundColor = "red";}

  if (squares[17].value.toUpperCase() === correctWordArray[2]) {
    squares[17].style.backgroundColor = "green";
  } else if (squares[17].value.toUpperCase() === correctWordArray[0] || 
    squares[17].value.toUpperCase() === correctWordArray[1] || 
    squares[17].value.toUpperCase() === correctWordArray[3] || 
    squares[17].value.toUpperCase() === correctWordArray[4]) {
    squares[17].style.backgroundColor = "yellow";}
    else if (squares[17].value.toUpperCase() !== '') {
      squares[17].style.backgroundColor = "red";} 

  if (squares[18].value.toUpperCase() === correctWordArray[3]) {
    squares[18].style.backgroundColor = "green";
  } else if (squares[18].value.toUpperCase() === correctWordArray[0] || 
    squares[18].value.toUpperCase() === correctWordArray[1] || 
    squares[18].value.toUpperCase() === correctWordArray[2] || 
    squares[18].value.toUpperCase() === correctWordArray[4]) {
    squares[18].style.backgroundColor = "yellow";}
    else if (squares[18].value.toUpperCase() !== '') {
      squares[18].style.backgroundColor = "red";}

  if (squares[19].value.toUpperCase() === correctWordArray[4]) {
    squares[19].style.backgroundColor = "green";
  } else if (squares[19].value.toUpperCase() === correctWordArray[0] || 
    squares[19].value.toUpperCase() === correctWordArray[1] || 
    squares[19].value.toUpperCase() === correctWordArray[2] || 
    squares[19].value.toUpperCase() === correctWordArray[3]) {
    squares[19].style.backgroundColor = "yellow";}
    else if (squares[19].value.toUpperCase() !== '') {
      squares[19].style.backgroundColor = "red";}

  // Row 5
  if (squares[20].value.toUpperCase() === correctWordArray[0]) {
    squares[20].style.backgroundColor = "green";
  } else if (squares[20].value.toUpperCase() === correctWordArray[1] || 
    squares[20].value.toUpperCase() === correctWordArray[2] || 
    squares[20].value.toUpperCase() === correctWordArray[3] || 
    squares[20].value.toUpperCase() === correctWordArray[4]) {
    squares[20].style.backgroundColor = "yellow";}
    else if (squares[20].value.toUpperCase() !== '') {
      squares[20].style.backgroundColor = "red";}

  if (squares[21].value.toUpperCase() === correctWordArray[1]) {
    squares[21].style.backgroundColor = "green";
  } else if (squares[21].value.toUpperCase() === correctWordArray[0] || 
    squares[21].value.toUpperCase() === correctWordArray[2] || 
    squares[21].value.toUpperCase() === correctWordArray[3] || 
    squares[21].value.toUpperCase() === correctWordArray[4]) {
    squares[21].style.backgroundColor = "yellow";}
    else if (squares[21].value.toUpperCase() !== '') {
      squares[21].style.backgroundColor = "red";}

  if (squares[22].value.toUpperCase() === correctWordArray[2]) {
    squares[22].style.backgroundColor = "green";
  } else if (squares[22].value.toUpperCase() === correctWordArray[0] || 
    squares[22].value.toUpperCase() === correctWordArray[1] || 
    squares[22].value.toUpperCase() === correctWordArray[3] || 
    squares[22].value.toUpperCase() === correctWordArray[4]) {
    squares[22].style.backgroundColor = "yellow";}
    else if (squares[22].value.toUpperCase() !== '') {
      squares[22].style.backgroundColor = "red";} 

  if (squares[23].value.toUpperCase() === correctWordArray[3]) {
    squares[23].style.backgroundColor = "green";
  } else if (squares[23].value.toUpperCase() === correctWordArray[0] || 
    squares[23].value.toUpperCase() === correctWordArray[1] || 
    squares[23].value.toUpperCase() === correctWordArray[2] || 
    squares[23].value.toUpperCase() === correctWordArray[4]) {
    squares[23].style.backgroundColor = "yellow";}
    else if (squares[23].value.toUpperCase() !== '') {
      squares[23].style.backgroundColor = "red";}

  if (squares[24].value.toUpperCase() === correctWordArray[4]) {
    squares[24].style.backgroundColor = "green";
  } else if (squares[24].value.toUpperCase() === correctWordArray[0] || 
    squares[24].value.toUpperCase() === correctWordArray[1] || 
    squares[24].value.toUpperCase() === correctWordArray[2] || 
    squares[24].value.toUpperCase() === correctWordArray[3]) {
    squares[24].style.backgroundColor = "yellow";}
    else if (squares[24].value.toUpperCase() !== '') {
      squares[24].style.backgroundColor = "red";}

  // Row 6
  if (squares[25].value.toUpperCase() === correctWordArray[0]) {
    squares[25].style.backgroundColor = "green";
  } else if (squares[25].value.toUpperCase() === correctWordArray[1] || 
    squares[25].value.toUpperCase() === correctWordArray[2] || 
    squares[25].value.toUpperCase() === correctWordArray[3] || 
    squares[25].value.toUpperCase() === correctWordArray[4]) {
    squares[25].style.backgroundColor = "yellow";}
    else if (squares[25].value.toUpperCase() !== '') {
      squares[25].style.backgroundColor = "red";}

  if (squares[26].value.toUpperCase() === correctWordArray[1]) {
    squares[26].style.backgroundColor = "green";
  } else if (squares[26].value.toUpperCase() === correctWordArray[0] || 
    squares[26].value.toUpperCase() === correctWordArray[2] || 
    squares[26].value.toUpperCase() === correctWordArray[3] || 
    squares[26].value.toUpperCase() === correctWordArray[4]) {
    squares[26].style.backgroundColor = "yellow";}
    else if (squares[26].value.toUpperCase() !== '') {
      squares[26].style.backgroundColor = "red";}

  if (squares[27].value.toUpperCase() === correctWordArray[2]) {
    squares[27].style.backgroundColor = "green";
  } else if (squares[27].value.toUpperCase() === correctWordArray[0] || 
    squares[27].value.toUpperCase() === correctWordArray[1] || 
    squares[27].value.toUpperCase() === correctWordArray[3] || 
    squares[27].value.toUpperCase() === correctWordArray[4]) {
    squares[27].style.backgroundColor = "yellow";}
    else if (squares[27].value.toUpperCase() !== '') {
      squares[27].style.backgroundColor = "red";}

  if (squares[28].value.toUpperCase() === correctWordArray[3]) {
    squares[28].style.backgroundColor = "green";
  } else if (squares[28].value.toUpperCase() === correctWordArray[0] || 
    squares[28].value.toUpperCase() === correctWordArray[1] || 
    squares[28].value.toUpperCase() === correctWordArray[2] || 
    squares[28].value.toUpperCase() === correctWordArray[4]) {
    squares[28].style.backgroundColor = "yellow";}
    else if (squares[28].value.toUpperCase() !== '') {
      squares[28].style.backgroundColor = "red";} 

  if (squares[29].value.toUpperCase() === correctWordArray[4]) {
    squares[29].style.backgroundColor = "green";
  } else if (squares[29].value.toUpperCase() === correctWordArray[0] || 
    squares[29].value.toUpperCase() === correctWordArray[1] || 
    squares[29].value.toUpperCase() === correctWordArray[2] || 
    squares[29].value.toUpperCase() === correctWordArray[3]) {
    squares[29].style.backgroundColor = "yellow";}
    else if (squares[29].value.toUpperCase() !== '') {
      squares[29].style.backgroundColor = "red";}

  // VICTORY SCREEN
  // Row 1
  if (squares[0].value.toUpperCase() === correctWordArray[0] && 
      squares[1].value.toUpperCase() === correctWordArray[1] && 
      squares[2].value.toUpperCase() === correctWordArray[2] && 
      squares[3].value.toUpperCase() === correctWordArray[3] && 
      squares[4].value.toUpperCase() === correctWordArray[4]) 
      {
        document.querySelector(".title").classList.add("RGB")
        document.querySelector(".confetti-container").classList.add("container")
        document.querySelector(".a").classList.add("confetti")
        document.querySelector(".b").classList.add("confetti")
        document.querySelector(".c").classList.add("confetti")
        document.querySelector(".d").classList.add("confetti")
        document.querySelector(".e").classList.add("confetti")
        document.querySelector(".f").classList.add("confetti")
        document.querySelector(".g").classList.add("confetti")
        document.querySelector(".h").classList.add("confetti")
        document.querySelector(".i").classList.add("confetti")
        document.querySelector(".j").classList.add("confetti")
        document.querySelector(".k").classList.add("confetti")
        document.querySelector(".l").classList.add("confetti")
        document.querySelector(".m").classList.add("confetti")
        document.querySelector(".n").classList.add("confetti")
        document.querySelector(".o").classList.add("confetti")
        document.querySelector(".p").classList.add("confetti")
        document.querySelector(".q").classList.add("confetti")
        document.querySelector(".r").classList.add("confetti")
        document.querySelector(".s").classList.add("confetti")
        alert("YOU WIN!!!")
      }

  // Row 2
  if (squares[5].value.toUpperCase() === correctWordArray[0] && 
      squares[6].value.toUpperCase() === correctWordArray[1] && 
      squares[7].value.toUpperCase() === correctWordArray[2] && 
      squares[8].value.toUpperCase() === correctWordArray[3] && 
      squares[9].value.toUpperCase() === correctWordArray[4]) 
    {
      document.querySelector(".title").classList.add("RGB")
      document.querySelector(".confetti-container").classList.add("container")
      document.querySelector(".a").classList.add("confetti")
      document.querySelector(".b").classList.add("confetti")
      document.querySelector(".c").classList.add("confetti")
      document.querySelector(".d").classList.add("confetti")
      document.querySelector(".e").classList.add("confetti")
      document.querySelector(".f").classList.add("confetti")
      document.querySelector(".g").classList.add("confetti")
      document.querySelector(".h").classList.add("confetti")
      document.querySelector(".i").classList.add("confetti")
      document.querySelector(".j").classList.add("confetti")
      document.querySelector(".k").classList.add("confetti")
      document.querySelector(".l").classList.add("confetti")
      document.querySelector(".m").classList.add("confetti")
      document.querySelector(".n").classList.add("confetti")
      document.querySelector(".o").classList.add("confetti")
      document.querySelector(".p").classList.add("confetti")
      document.querySelector(".q").classList.add("confetti")
      document.querySelector(".r").classList.add("confetti")
      document.querySelector(".s").classList.add("confetti")
      alert("YOU WIN!!!")
    }

  // Row 3
  if (squares[10].value.toUpperCase() === correctWordArray[0] &&
      squares[11].value.toUpperCase() === correctWordArray[1] && 
      squares[12].value.toUpperCase() === correctWordArray[2] && 
      squares[13].value.toUpperCase() === correctWordArray[3] && 
      squares[14].value.toUpperCase() === correctWordArray[4]) 
    {
      document.querySelector(".title").classList.add("RGB")
      document.querySelector(".confetti-container").classList.add("container")
      document.querySelector(".a").classList.add("confetti")
      document.querySelector(".b").classList.add("confetti")
      document.querySelector(".c").classList.add("confetti")
      document.querySelector(".d").classList.add("confetti")
      document.querySelector(".e").classList.add("confetti")
      document.querySelector(".f").classList.add("confetti")
      document.querySelector(".g").classList.add("confetti")
      document.querySelector(".h").classList.add("confetti")
      document.querySelector(".i").classList.add("confetti")
      document.querySelector(".j").classList.add("confetti")
      document.querySelector(".k").classList.add("confetti")
      document.querySelector(".l").classList.add("confetti")
      document.querySelector(".m").classList.add("confetti")
      document.querySelector(".n").classList.add("confetti")
      document.querySelector(".o").classList.add("confetti")
      document.querySelector(".p").classList.add("confetti")
      document.querySelector(".q").classList.add("confetti")
      document.querySelector(".r").classList.add("confetti")
      document.querySelector(".s").classList.add("confetti")
      alert("YOU WIN!!!")
    }

  // Row 4
  if (squares[15].value.toUpperCase() === correctWordArray[0] && 
      squares[16].value.toUpperCase() === correctWordArray[1] && 
      squares[17].value.toUpperCase() === correctWordArray[2] && 
      squares[18].value.toUpperCase() === correctWordArray[3] && 
      squares[19].value.toUpperCase() === correctWordArray[4]) 
    {
      document.querySelector(".title").classList.add("RGB")
      document.querySelector(".confetti-container").classList.add("container")
      document.querySelector(".a").classList.add("confetti")
      document.querySelector(".b").classList.add("confetti")
      document.querySelector(".c").classList.add("confetti")
      document.querySelector(".d").classList.add("confetti")
      document.querySelector(".e").classList.add("confetti")
      document.querySelector(".f").classList.add("confetti")
      document.querySelector(".g").classList.add("confetti")
      document.querySelector(".h").classList.add("confetti")
      document.querySelector(".i").classList.add("confetti")
      document.querySelector(".j").classList.add("confetti")
      document.querySelector(".k").classList.add("confetti")
      document.querySelector(".l").classList.add("confetti")
      document.querySelector(".m").classList.add("confetti")
      document.querySelector(".n").classList.add("confetti")
      document.querySelector(".o").classList.add("confetti")
      document.querySelector(".p").classList.add("confetti")
      document.querySelector(".q").classList.add("confetti")
      document.querySelector(".r").classList.add("confetti")
      document.querySelector(".s").classList.add("confetti")
      alert("YOU WIN!!!")
    } 
  
  // Row 5
  if (squares[20].value.toUpperCase() === correctWordArray[0] && 
      squares[21].value.toUpperCase() === correctWordArray[1] && 
      squares[22].value.toUpperCase() === correctWordArray[2] && 
      squares[23].value.toUpperCase() === correctWordArray[3] && 
      squares[24].value.toUpperCase() === correctWordArray[4]) 
    {
      document.querySelector(".title").classList.add("RGB")
      document.querySelector(".confetti-container").classList.add("container")
      document.querySelector(".a").classList.add("confetti")
      document.querySelector(".b").classList.add("confetti")
      document.querySelector(".c").classList.add("confetti")
      document.querySelector(".d").classList.add("confetti")
      document.querySelector(".e").classList.add("confetti")
      document.querySelector(".f").classList.add("confetti")
      document.querySelector(".g").classList.add("confetti")
      document.querySelector(".h").classList.add("confetti")
      document.querySelector(".i").classList.add("confetti")
      document.querySelector(".j").classList.add("confetti")
      document.querySelector(".k").classList.add("confetti")
      document.querySelector(".l").classList.add("confetti")
      document.querySelector(".m").classList.add("confetti")
      document.querySelector(".n").classList.add("confetti")
      document.querySelector(".o").classList.add("confetti")
      document.querySelector(".p").classList.add("confetti")
      document.querySelector(".q").classList.add("confetti")
      document.querySelector(".r").classList.add("confetti")
      document.querySelector(".s").classList.add("confetti")
      alert("YOU WIN!!!")
    } 

  // Row 6
  if (squares[25].value.toUpperCase() === correctWordArray[0] && 
      squares[26].value.toUpperCase() === correctWordArray[1] && 
      squares[27].value.toUpperCase() === correctWordArray[2] && 
      squares[28].value.toUpperCase() === correctWordArray[3] && 
      squares[29].value.toUpperCase() === correctWordArray[4]) 
    {
      document.querySelector(".title").classList.add("RGB")
      document.querySelector(".confetti-container").classList.add("container")
      document.querySelector(".a").classList.add("confetti")
      document.querySelector(".b").classList.add("confetti")
      document.querySelector(".c").classList.add("confetti")
      document.querySelector(".d").classList.add("confetti")
      document.querySelector(".e").classList.add("confetti")
      document.querySelector(".f").classList.add("confetti")
      document.querySelector(".g").classList.add("confetti")
      document.querySelector(".h").classList.add("confetti")
      document.querySelector(".i").classList.add("confetti")
      document.querySelector(".j").classList.add("confetti")
      document.querySelector(".k").classList.add("confetti")
      document.querySelector(".l").classList.add("confetti")
      document.querySelector(".m").classList.add("confetti")
      document.querySelector(".n").classList.add("confetti")
      document.querySelector(".o").classList.add("confetti")
      document.querySelector(".p").classList.add("confetti")
      document.querySelector(".q").classList.add("confetti")
      document.querySelector(".r").classList.add("confetti")
      document.querySelector(".s").classList.add("confetti")
      alert("YOU WIN!!!")
    } 

  // GAME OVER SCREEN
  if (squares[0].value.toUpperCase() !== '' &&
      squares[1].value.toUpperCase() !== '' &&
      squares[2].value.toUpperCase() !== '' &&
      squares[3].value.toUpperCase() !== '' &&
      squares[4].value.toUpperCase() !== '' &&
      squares[5].value.toUpperCase() !== '' &&
      squares[6].value.toUpperCase() !== '' &&
      squares[7].value.toUpperCase() !== '' &&
      squares[8].value.toUpperCase() !== '' &&
      squares[9].value.toUpperCase() !== '' &&
      squares[10].value.toUpperCase() !== '' &&
      squares[11].value.toUpperCase() !== '' &&
      squares[12].value.toUpperCase() !== '' &&
      squares[13].value.toUpperCase() !== '' &&
      squares[14].value.toUpperCase() !== '' &&
      squares[15].value.toUpperCase() !== '' &&
      squares[16].value.toUpperCase() !== '' &&
      squares[17].value.toUpperCase() !== '' &&
      squares[18].value.toUpperCase() !== '' &&
      squares[19].value.toUpperCase() !== '' &&
      squares[20].value.toUpperCase() !== '' &&
      squares[21].value.toUpperCase() !== '' &&
      squares[22].value.toUpperCase() !== '' &&
      squares[23].value.toUpperCase() !== '' &&
      squares[24].value.toUpperCase() !== '' &&
      squares[25].value.toUpperCase() !== '' &&
      squares[26].value.toUpperCase() !== '' &&
      squares[27].value.toUpperCase() !== '' &&
      squares[28].value.toUpperCase() !== '' &&
      squares[29].value.toUpperCase() !== '') {
      alert(`GAME OVER \n the word of the day was: ${correctWordArray.join('')}`)
    }
  console.log(squares)
  console.log(correctWordArray)

} // Async Function's end


document.addEventListener('keydown', function (e) {
  if (e.keyCode == 13)
      window.location.reload()
});

init ()