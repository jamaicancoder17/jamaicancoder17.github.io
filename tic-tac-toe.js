"use strict";

var count = 0;
let boardState = ["a","b","c","d","e","f","g","h","i"];

var main = function(){
    var cube  = document.querySelectorAll(".square");
    var but = document.querySelector(".btn");
    for (var number = 0; number < cube.length; number++){
        cube[number].addEventListener("click", function name (event){
            event.preventDefault();
            console.log(boardState);
            if (boardState[event.target.id] == "X" || boardState[event.target.id] == "O"){
                console.log("Error, you cannot click here");
            }
            else{
                if (count % 2 == 0){
                    console.log("You have pressed 'X'");
                    event.target.classList.add("X");
                    event.target.textContent = "X";
                    boardState[event.target.id] = "X";
                } 
                else{
                    console.log("You have pressed 'O'");
                    event.target.classList.add("O");
                    event.target.textContent = "O";
                    boardState[event.target.id] = "O"
                }
                count = count + 1; 
                var test = checkwin(boardState);
    
                if (test[0]){
                    var message = document.querySelector("#status");
                    message.textContent = "Congratuations! "+test[1]+ " is the Winner!";
                    message.classList.add("you-won");
                    
                    for(var i = 0; i<9;i++){
                        console.log("here");
                        //cube[i].removeEventListener("click", name);
                    }
                }
            }
            
        })

        cube[number].addEventListener("mouseover",function(event){
            event.preventDefault();
            event.target.classList.add("hover");
        })
        
        cube[number].addEventListener("mouseout",function(event){
            event.preventDefault();
            event.target.classList.remove("hover");
        })

        but.addEventListener("click",function(event){
            event.preventDefault();
            var cube1  = document.querySelectorAll(".square");
            for (var number = 0; number < cube1.length; number++){
                //Clearing the board onscreen
                cube1[number].textContent = "";
            }
            var message = document.querySelector("#status");
            message.textContent = "Move your mouse over a square and click to play an X or an O.";
            message.classList.remove("you-won");
        
            //Resetting the board state
            boardState = ["a","b","c","d","e","f","g","h","i"];
            count = 0;
            console.log("Cleared it");
            location.reload();
        });

}
    console.log("Finished setting up Event Handlers");
}

//Loading all the squares onto the page
window.onload =  function() {
    var x  = document.querySelectorAll("#board div");
    for (var number = 0; number < x.length; number++){
        x[number].className = "square";
        x[number].id = number;
    }
    console.log("Finished Setup");
    main();
}

var checkwin = function(boardState){
    if(boardState[0] == boardState[1] && boardState[1] == boardState[2]){
        console.log(boardState[0] + " WON");
        console.log("State 1");
        return [true,boardState[0]];
    }
    else if(boardState[0] == boardState[3] && boardState[3] == boardState[6]){
        console.log(boardState[0] + " WON");
        console.log("State 2");
        return [true,boardState[0]];
    }
    else if(boardState[1] == boardState[4] && boardState[4]== boardState[7]){
        console.log(boardState[1] + " WON");
        console.log("State 3");
        return [true,boardState[1]];
    }
    else if(boardState[2] == boardState[5] && boardState[5]== boardState[8]){
        console.log(boardState[2] + " WON");
        console.log("State 4");
        return [true,boardState[2]];
    }
    else if(boardState[3] == boardState[4] && boardState[4]== boardState[5]){
        console.log(boardState[3] + " WON");
        console.log("State 5");
        return [true,boardState[3]];
    }
    else if(boardState[6] == boardState[7] && boardState[7]== boardState[8]){
        console.log(boardState[6] + " WON");
        console.log("State 6");
        return [true,boardState[6]];
    }
    else if(boardState[0] == boardState[4] && boardState[4]== boardState[8]){
        console.log(boardState[0] + " WON");
        console.log("State 7");
        return [true,boardState[0]];
    }
    else if(boardState[6] == boardState[4] && boardState[4]== boardState[2]){
        console.log(boardState[6] + " WON");
        console.log("State 8");
        return [true,boardState[6]];
    }
    else{
        console.log("Continue");
        return [false];
    }
}


