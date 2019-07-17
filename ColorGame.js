var numsquares=6;
var colors=generatecolors(numsquares);
var pickedcolor=pickColor();

var colordisplay=document.querySelector("#colordisplay");
colordisplay.textContent=pickedcolor;

var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbtn=document.querySelector("button");

var squares=document.querySelectorAll("#square");
//for the easy and hard button
var easy_btn=document.querySelector("#easy_btn");
var hard_btn=document.querySelector("#hard_btn");

easy_btn.addEventListener("click",function(){

	hard_btn.classList.remove("selected");
	easy_btn.classList.add("selected");
	
	numsquares=3;
    colors=generatecolors(numsquares);

    pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
    //setting the grapped colors
    for(var i=0;i<squares.length;i++){
    	if(colors[i]){
    		squares[i].style.backgroundColor=colors[i];
    	}else{
    		squares[i].style.display= "none" ;
    	}
    }
});

hard_btn.addEventListener("click",function(){

	easy_btn.classList.remove("selected");
	hard_btn.classList.add("selected");
	
	numsquares=6;
	colors=generatecolors(numsquares);

	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	    squares[i].style.display="block";
	}    

});

for(var i=0;i<colors.length;i++){
  squares[i].style.backgroundColor=colors[i];

  squares[i].addEventListener("click",function(){
  	//grabing the color
  	var colorpicked=this.style.backgroundColor;
  	if(colorpicked===pickedcolor){
  		messagedisplay.textContent="Correct!";
  		changecolor(colorpicked);
  		h1.style.backgroundColor=colorpicked;
  		resetbtn.textContent="Play Again";
  	}
  	else{
  		this.style.backgroundColor="#232323";
  		messagedisplay.textContent="Try Again!";
  	}
  });
}
resetbtn.addEventListener("click",function(){
	colors=generatecolors(numsquares);
	pickedcolor=pickColor();
    colordisplay.textContent=pickedcolor;

    messagedisplay.textContent="";
    this.textContent="New Colors";

    for(var i=0;i<colors.length;i++){
    	squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
});

function changecolor(color){
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generatecolors(num){
	var arr=[];
	for(var i=0;i<num;i++){
      arr[i]=randomcolor();
	}
	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*255+1);
	var g=Math.floor(Math.random()*255+1);
	var b=Math.floor(Math.random()*255+1);

	return "rgb("+r+","+" "+g+","+" "+b+")";
}
