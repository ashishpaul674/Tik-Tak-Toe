// Function called whenever user tab on any box
function myfunc() {

  // Setting DOM to all boxes od input field
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  // Checking if player A won or not and after that disabled all other fields
  if ((b1 == "A" || b1 == "A") &&
    (b2 == "A" || b2 == "A") &&
    (b3 == "A" || b3 == "A")) {
    document.getElementById('turn').innerHTML = "Player A won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player A won');
  } 
  else if ((b1 == "A" || b1 == "A") &&
    (b4 == "A" || b4 == "A") &&
    (b7 == "A" || b7 == "A")) {
    document.getElementById('turn').innerHTML = "Player A won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player A won');
  } 
  else if ((b7 == "A" || b7 == "A") &&
    (b8 == "A" || b8 == "A") &&
    (b9 == "A" || b9 == "A")) {
    document.getElementById('turn').innerHTML = "Player A won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    window.alert('Player A won');
  } 
  else if (
    (b3 == "A" || b3 == "A") &&
    (b6 == "A" || b6 == "A") &&
    (b9 == "A" || b9 == "A")
  ) {
    document.getElementById('turn').innerHTML = "Player A won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player A won');
  } else if (
    (b1 == "A" || b1 == "A") &&
    (b5 == "A" || b5 == "A") &&
    (b9 == "A" || b9 == "A")
  ) {
    document.getElementById('turn').innerHTML = "Player A won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player A won');
  } else if (
    (b3 == "A" || b3 == "A") &&
    (b5 == "A" || b5 == "A") &&
    (b7 == "A" || b7 == "A")
  ) {
    document.getElementById('turn').innerHTML = "Player A won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player A won');
  } else if (
    (b2 == "A" || b2 == "A") &&
    (b5 == "A" || b5 == "A") &&
    (b8 == "A" || b8 == "A")
  ) {
    document.getElementById('turn').innerHTML = "Player A won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player A won');
  } else if (
    (b4 == "A" || b4 == "A") &&
    (b5 == "A" || b5 == "A") &&
    (b6 == "A" || b6 == "A")
  ) {
    document.getElementById('turn').innerHTML = "Player A won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player A won');
  }

  // Checking of player A finished
  // Checking for player B Starts, Is player B won or not and after that disabled all the other field
  else if (
    (b1 == "B" || b1 == "B") &&
    (b2 == "B" || b2 == "B") &&
    (b3 == "B" || b3 == "B")
  ) {
    document.getElementById('turn').innerHTML = "Player B won";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player B won');
  } else if (
    (b1 == "B" || b1 == "B") &&
    (b4 == "B" || b4 == "B") &&
    (b7 == "B" || b7 == "B")
  ) {
    document.getElementById('turn').innerHTML = "Player B won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player B won');
  } else if (
    (b7 == "B" || b7 == "B") &&
    (b8 == "B" || b8 == "B") &&
    (b9 == "B" || b9 == "B")
  ) {
    document.getElementById('turn').innerHTML = "Player B won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    window.alert('Player B won');
  } else if (
    (b3 == "B" || b3 == "B") &&
    (b6 == "B" || b6 == "B") &&
    (b9 == "B" || b9 == "B")
  ) {
    document.getElementById('turn').innerHTML = "Player B won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player B won');
  } else if (
    (b1 == "B" || b1 == "B") &&
    (b5 == "B" || b5 == "B") &&
    (b9 == "B" || b9 == "B")
  ) {
    document.getElementById('turn').innerHTML = "Player B won";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    window.alert('Player B won');
  } else if (
    (b3 == "B" || b3 == "B") &&
    (b5 == "B" || b5 == "B") &&
    (b7 == "B" || b7 == "B")
  ) {
    document.getElementById('turn').innerHTML = "Player B won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player B won');
  } else if (
    (b2 == "B" || b2 == "B") &&
    (b5 == "B" || b5 == "B") &&
    (b8 == "B" || b8 == "B")
  ) {
    document.getElementById('turn').innerHTML = "Player B won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player B won');
  } else if (
    (b4 == "B" || b4 == "B") &&
    (b5 == "B" || b5 == "B") &&
    (b6 == "B" || b6 == "B")
  ) {
    document.getElementById('turn').innerHTML = "Player B won";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    window.alert('Player B won');
  }

  // Checking of player B finish. Here, checking about Tie
  else if ((b1 == "A" || b1 == "B") &&
    (b2 == "A" || b2 == "B") &&
    (b3 == "A" || b3 == "B") &&
    (b4 == "A" || b4 == "B") &&
    (b5 == "A" || b5 == "B") &&
    (b6 == "A" || b6 == "B") &&
    (b7 == "A" || b7 == "B") &&
    (b8 == "A" || b8 == "B") &&
    (b9 == "A" || b9 == "B")) {
    document.getElementById('turn').innerHTML = "Match Tie";
    window.alert('Match Tie');
  } 
  else {
    // Here, Printing Result
    if (flag == 1) {
      document.getElementById('turn')
      .innerHTML = "Player A Turn";
    } 
    else {
      document.getElementById('turn')
      .innerHTML = "Player B Turn";
    }
  }
}

// Function to reset game
function myfunc_10() {
  location.reload();
  document.getElementById('b1').value = '';
  document.getElementById('b2').value = '';
  document.getElementById('b3').value = '';
  document.getElementById('b4').value = '';
  document.getElementById('b5').value = '';
  document.getElementById('b6').value = '';
  document.getElementById('b7').value = '';
  document.getElementById('b8').value = '';
  document.getElementById('b9').value = '';
}

// functions check turn of the player and put accordingly value A or B
flag = 1;
function myfunc_1() {
  if (flag == 1) {
    document.getElementById("b1").value = "A";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } 
  else {
    document.getElementById("b1").value = "B";
    document.getElementById("b1").disabled = true;
    flag = 1;
  }
}
function myfunc_2() {
  if (flag == 1) {
    document.getElementById("b2").value = "A";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b2").value = "B";
    document.getElementById("b2").disabled = true;
    flag = 1;
  }
}
function myfunc_3() {
  if (flag == 1) {
    document.getElementById("b3").value = "A";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b3").value = "B";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }
}
function myfunc_4() {
  if (flag == 1) {
    document.getElementById("b4").value = "A";
    document.getElementById("b4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b4").value = "B";
    document.getElementById("b4").disabled = true;
    flag = 1;
  }
}
function myfunc_5() {
  if (flag == 1) {
    document.getElementById("b5").value = "A";
    document.getElementById("b5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b5").value = "B";
    document.getElementById("b5").disabled = true;
    flag = 1;
  }
}
function myfunc_6() {
  if (flag == 1) {
    document.getElementById("b6").value = "A";
    document.getElementById("b6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b6").value = "B";
    document.getElementById("b6").disabled = true;
    flag = 1;
  }
}
function myfunc_7() {
  if (flag == 1) {
    document.getElementById("b7").value = "A";
    document.getElementById("b7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b7").value = "B";
    document.getElementById("b7").disabled = true;
    flag = 1;
  }
}
function myfunc_8() {
  if (flag == 1) {
    document.getElementById("b8").value = "A";
    document.getElementById("b8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b8").value = "B";
    document.getElementById("b8").disabled = true;
    flag = 1;
  }
}
function myfunc_9() {
  if (flag == 1) {
    document.getElementById("b9").value = "A";
    document.getElementById("b9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b9").value = "B";
    document.getElementById("b9").disabled = true;
    flag = 1;
  }
}
