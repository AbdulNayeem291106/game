function checkName(){

let name=document
.getElementById("nameBox")
.value
.trim();

let error=
document.getElementById("error");

if(name==="Akram"){

document.body.innerHTML=`

<div style="

background:url('images/start.jpg');

background-size:cover;

height:100vh;

display:flex;

justify-content:center;

align-items:center;

flex-direction:column;

">

<h1 style="color:white">

Hi Akram!

</h1>

<h2 style="color:white">

Shall we start the game?

</h2>

<button

style="

padding:15px;

font-size:22px;

margin-top:30px;

"

onclick="alert('Game starts in Part 2')">

START

</button>

</div>

`;

}

else{

error.innerHTML=

"❌ Please enter the correct name.";

}

}
