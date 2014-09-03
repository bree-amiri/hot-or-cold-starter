
$(document).ready(function(){
	var target=Math.floor((Math.random() * 100) + 1);
	var count=0;
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	$("a.new").click(function(){
  		location.reload();
  		
  	});
$('#guessButton').click(function () {
         	if (($('#userGuess').val())==(($('#userGuess').val())*2/2) ){
               var newGuess= showResult($('#userGuess').val(),target);
               
  // Is a number

               	$('#feedback').text(newGuess);
          count++
              $("#count").text(count);
               
               var nGuess=($('#userGuess').val());	
               	$('#userGuess').val(null);
               	
               	var guessItem="<li>"+nGuess+"</li>";
               
               $(guessItem).appendTo($('#guessList'));
                } else {
      			 	alert("Please insert a Number Between 1 too 100" + newGuess);
      			 }
      			 event.preventDefault();
      			
         })


});


var showResult=function(guess,target){

//	alert(Math.abs(guess-target));

	if (70 < Math.abs(guess-target) & guess!=target){
		return "Freezing";
		}else if (60 < Math.abs(guess-target) & guess!=target) {
			return "Very Cold";
		}else if (50 < Math.abs(guess-target) & guess!=target) {
			return "Cold!!";
			}else if (40 < Math.abs(guess-target) & guess!=target) {
			return "Chilli!!";
			}else if (30 < Math.abs(guess-target) & guess!=target) {
			return "Warm";
			}else if (20 < Math.abs(guess-target) & guess!=target) {
			return "Hot";
			}else if (10 < Math.abs(guess-target) & guess!=target) {
			return "Very Hot";
			}else if (5 < Math.abs(guess-target) & guess!=target) {
			return "Burning";
			}else if (0== Math.abs(guess-target) ) {
			return "Yeah! That's It!!! ";
	
	}
}