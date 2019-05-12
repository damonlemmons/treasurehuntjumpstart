//create a random number for the treasure and the bomb
var treasureLocation = Math.floor(Math.random()*16)
var bombLocation = Math.floor(Math.random()*16)
var counter = 14

//make sure the bomb and the treasure aren't the same number
if(treasureLocation === bombLocation){
  bombLocation = Math.floor(Math.random() * 16)
}

//set the initial counter value


// countFunc = (location) =>{
//     if(treasureLocation !== location && bombLocation !== location){
//       counter = counter-1
//     } else {
//       counter = 14
//     }
//
// }
var element = document.getElementById("0").value
console.log(element);

function treasure(location){
console.log(document.getElementById(location).value);

     if(treasureLocation === location){
    document.getElementById("outcome").innerHTML = "You WIN! &#x1f308"
    document.getElementById("gameboard").innerHTML = ""
  }
  else if(bombLocation === location){
    document.getElementById("outcome").innerHTML = "Sorry, you lose &#x2620"
    document.getElementById("gameboard").innerHTML = ""
  }
  else if(counter === 0){
    document.getElementById("outcome").innerHTML = "Sorry, you lose &#x2620"
    document.getElementById("gameboard").innerHTML = ""
  }
  else {
    document.getElementById(location).innerHTML = "&#x1f332"
    }
    if (document.getElementById(location).innerHTML != "&#x1f332"){
        counter=counter-1
        console.log(counter);
    }


// if(document.getElementById(location).value !== location) {
//     counter = counter-1
//     document.getElementById("counter").innerHTML = counter
//     console.log(counter)
//   }
}
