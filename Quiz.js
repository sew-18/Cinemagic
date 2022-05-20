
function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;

var correct = 0;
var marks = 0;
var line1= "1. Correct ";
var line2= "2. Correct ";
var line3= "3. Correct ";
var line4= "4. Correct ";
var line5= "5. Correct ";
var line6= "6. Correct ";
var line7= "7. Correct ";
var line8= "8. Correct ";
var line9= "9. Correct ";
var line10= "10. Correct ";


// Correct answers//
	if(question1=="3"){
		correct++ ;
		marks = marks + 2
		document.getElementById("line_1").innerHTML= line1; 
		
	}
	if(question2=="Thomas Middleditch") {
		correct++ ;
		marks = marks + 2
		document.getElementById("line_2").innerHTML= line2;
	
	}
	if(question3=="Christorpher Nolan") {
		correct++ ;
		marks = marks + 2
		document.getElementById("line_3").innerHTML= line3;
	
	}
	if(question4=="Jesse Eisenberg") {
		correct++ ;
		marks = marks + 2
		document.getElementById("line_4").innerHTML= line4;
	
	}
	if(question5=="3") {
		correct++ ;
		marks = marks + 2
		document.getElementById("line_5").innerHTML= line5;
	
	}
	if(question6=="Chris Columbus"){
		correct++ ;
		marks = marks + 2
		document.getElementById("line_6").innerHTML= line6;
	
	}
	if(question7=="Parasite"){
		correct++ ;
		marks = marks + 2
		document.getElementById("line_7").innerHTML= line7;
		
	}
	if(question8=="Joaquin Phoenix"){
		correct++ ;
		marks = marks + 2
		document.getElementById("line_8").innerHTML= line8;
	
	}
	if(question9=="Avengers End Game"){
		correct++ ;
		marks = marks + 2
		document.getElementById("line_9").innerHTML= line9;
	
	}
	if(question10=="Christian Bale"){
		correct++ ;
		marks = marks + 2
		document.getElementById("line_10").innerHTML= line10;
	
	}
	

//to display messages//	
var message = ["Great !", "Try Again", "Good"]; //array//

var range;
	if(marks < 10) {
		range = 1;
		document.getElementById("mycolour").style.background = "#FF0000";
	}
	if(marks>= 10 && correct <= 20) {
		range = 2;
		document.getElementById("mycolour").style.background = "#add8e6";
	}
	if(marks== 20 ) {
		range = 0;
		document.getElementById("mycolour").style.background = "#00FF00";
	}
	


document.getElementById("submit_quiz").style.visibility="visible";

document.getElementById("message").innerHTML= message[range];


document.getElementById("correct").innerHTML= "Correct Answers" + " = " + correct + " out of " + "10";
document.getElementById("marks").innerHTML= "You have got" + " "+ marks +" "+ "Marks.";

}



var count = 60;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=" YOU HAVE " + count + " SECONDS "; 
  document.getElementById('count').style.fontSize = "x-large";
  document.getElementById('count').style.fontFamily= "Trebuchet MS";
  document.getElementById('count').style.paddingTop= "8px";
  document.getElementById('count').style.textAlign = "center";
  document.getElementById('count').style.color= "white";
  count--;
  if (count === 0){
    clearInterval(interval);
	
    document.getElementById('count').innerHTML='Done';
	
	alert("TIME OUT !!! ");
	
	
	
	 check();             

  }
}, 1000); 

// scroll function to hidding navigation bar
var prevpos = window.pageYOffset;
window.onscroll = function() {
  var currpos = window.pageYOffset;
  if (prevpos > currpos) {
    document.getElementById("navbar").style.top = "0";
	
  } else {
    document.getElementById("navbar").style.top = "-80px";


  }
  prevpos = currpos;
}


