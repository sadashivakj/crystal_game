/*
	The java script is responsible for crystal game interaction
	This is written using jquery
	@author Sadashiva Kallur  
*/
	//initialize win or lose variables
	var win = 0;
	var lose = 0;

	//display the initialized data 
	//$("#win").html("<h2>" + win + "</h2>");
	$("#win").html(win);
	$("#lose").html(lose);

	//reset all elements before user intiates action
	reset();

	//Call click function depending on which crystal is clicked
	$("#red").on("click", click);
	$("#blue").on("click", click);
	$("#green").on("click", click);
	$("#pink").on("click", click);
	
	/**
		Function which will capture user click, 
		based on the random number assigned to 
		each crystal color and decide if the user won or lost.
	*/
	function click() {
		//Capture the random number based on the crystal clicked   
		var crystalValue = ($(this).attr("data_crystalValue"));
		crystalValue = parseInt(crystalValue);
		//Append the current score with the random number 
		//of the crystal selected by user
		currentScore += crystalValue;
		$("#currentScore").html(currentScore);
		//Check if selected score is same as the target score 
		if(currentScore == targetNumber){
			//increment win counter and reset the data
			win++;
			$("#win").html(win);
			reset();
		}else if(currentScore > targetNumber){ //if user seclection exceeds 
			//increment lose counter and reset the data
			lose++;
			//$("#lose").html("<h2>" + lose + "</h2>");
			$("#lose").html(lose);
			reset();
		}
	}

	/**
		Function will reset all data including -
		a. Assigning new random number for all crytals between 1 to 12
		b. Assigning new random number for target number between 1 to 120
		c. Initialize the current score to 0
	*/
	function reset(){
		
		currentScore = 0;
		targetNumber = Math.floor(Math.random()*101)+19;
		redCrystal = Math.floor(Math.random()*11)+1;
 		blueCrystal = Math.floor(Math.random()*11)+1;
 		greenCrystal = Math.floor(Math.random()*11)+1;
 		pinkCrystal = Math.floor(Math.random()*11)+1;
		
		//$("#currentScore").html("<h2>" + currentScore + "</h2>");
		$("#currentScore").html(currentScore);
		//$("#targetNumber").html("<h2>" + targetNumber + "</h2>");
		$("#targetNumber").html(targetNumber);
 		$("#red").attr("data_crystalValue", redCrystal);
		$("#blue").attr("data_crystalValue",blueCrystal);
		$("#green").attr("data_crystalValue",greenCrystal);
		$("#pink").attr("data_crystalValue",pinkCrystal);
	}