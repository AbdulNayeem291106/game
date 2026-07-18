/* ==========================
   VERSION 2 - SCRIPT.JS
   PART 1
   NAME VERIFICATION + GAME START
========================== */


let playerName = "";

let gameRunning = false;


function checkName(){

    let input = document
    .getElementById("playerName")
    .value
    .trim();


    let error = document
    .getElementById("error");


    if(input === "Akram"){


        playerName = input;


        // Hide name screen
        document
        .getElementById("startScreen")
        .style.display = "none";


        // Show game screen
        document
        .getElementById("gameScreen")
        .style.display = "block";


        startGame();


    }

    else{


        error.innerHTML =
        "❌ Please enter the correct name Akram";


    }

}



function startGame(){

    gameRunning = true;

    console.log(
        "Game started for " + playerName
    );

}
/* ==========================
   VERSION 2 - SCRIPT.JS
   PART 2
   PLAYER MOVEMENT + CONTROLS
========================== */


let playerPosition = 50; // percentage position



let player =
document.getElementById("player");



function movePlayer(direction){


    if(direction === "left"){


        playerPosition -= 5;


    }


    if(direction === "right"){


        playerPosition += 5;


    }



    // Road boundary limit

    if(playerPosition < 20){

        playerPosition = 20;

    }


    if(playerPosition > 80){

        playerPosition = 80;

    }



    player.style.left =
    playerPosition + "%";


}




// Left button

document
.getElementById("leftBtn")
.addEventListener("touchstart", function(){


    movePlayer("left");


});



// Right button

document
.getElementById("rightBtn")
.addEventListener("touchstart", function(){


    movePlayer("right");


});




// Mouse support (testing)

document
.getElementById("leftBtn")
.addEventListener("click", function(){


    movePlayer("left");


});


document
.getElementById("rightBtn")
.addEventListener("click", function(){


    movePlayer("right");


});




// Keyboard controls

document.addEventListener("keydown",function(event){


    if(event.key === "ArrowLeft"){


        movePlayer("left");


    }



    if(event.key === "ArrowRight"){


        movePlayer("right");


    }


});

/* ==========================
   VERSION 2 - SCRIPT.JS
   PART 3
   GAME LOOP + RUNNING EFFECT
========================== */


/* 
   GAME VARIABLES
*/


let gameRunning = false;


let roadPosition = 0;


let animationFrame;



let playerRunning = false;



/*
   START GAME FUNCTION
   (Updated)
*/


function startGame(){


    gameRunning = true;


    playerRunning = true;


    gameLoop();


    console.log("Game Started for " + playerName);


}





/*
   MAIN GAME LOOP
*/


function gameLoop(){


    if(!gameRunning){

        return;

    }



    // Move road background

    moveRoad();



    // Player running animation

    runAnimation();



    animationFrame =
    requestAnimationFrame(gameLoop);


}




/*
   ROAD MOVEMENT
*/


function moveRoad(){


    roadPosition += 2;



    let road =
    document.getElementById("road");



    if(road){

        road.style.backgroundPositionY =
        roadPosition + "px";

    }



}




/*
   PLAYER RUNNING EFFECT
*/


let runScale = 1;


let runDirection = 0.03;



function runAnimation(){


    if(!playerRunning){

        return;

    }



    runScale += runDirection;



    if(runScale > 1.08 ||
       runScale < 0.95){


        runDirection =
        -runDirection;


    }



    player.style.transform =
    "translateX(-50%) scale("+
    runScale+
    ")";

}




/*
   STOP GAME
   (Used later after gift box)
*/


function stopGame(){


    gameRunning = false;


    playerRunning = false;


    cancelAnimationFrame(animationFrame);


} 

/* ==========================
   VERSION 3B - ROAD TURNS
   PART 1
   TURN SYSTEM FOUNDATION
========================== */


/*
   ROAD TURN VARIABLES
*/


let currentRoadDirection = "straight";


let nextTurn = null;


let turnDistance = 500;



/*
   Possible directions
*/


const directions = [

    "left",
    "right"

];




/*
   Generate next turn
*/


function createNextTurn(){


    let random =
    Math.floor(Math.random() * directions.length);



    nextTurn =
    directions[random];



    console.log(
        "Next turn:",
        nextTurn
    );


}





/*
   Show turn instruction
*/


function showTurnInstruction(){


    let message =
    document.createElement("div");



    message.id =
    "turnMessage";



    message.innerHTML =

    "⚠️ Turn " +
    nextTurn.toUpperCase();



    document.body.appendChild(message);



    setTimeout(()=>{


        message.remove();


    },3000);


}




/*
   Check road distance
*/


function checkTurn(){


    turnDistance -= 2;



    if(turnDistance <= 150){


        if(nextTurn === null){

            createNextTurn();

        }


        showTurnInstruction();


    }



    if(turnDistance <= 0){


        activateTurn();


    }


}




/*
   Activate road turn
*/


function activateTurn(){


    currentRoadDirection =
    nextTurn;



    console.log(
        "Road turned:",
        currentRoadDirection
    );



    nextTurn = null;


    turnDistance = 500;


}  
