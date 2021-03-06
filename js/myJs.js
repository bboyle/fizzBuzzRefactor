$(document).ready(function () {
    "use strict"; // not sure why I need this? Brackets is advising me to add it in.
    
    var $numberList = $('p.fizzBuzzer');
       
    // adds Number if enter is pressed
    function enterNumberTyped(event) {
		if (event.keyCode === 13) {
            $numberList.empty();
            addNumber();
            event.preventDefault();
		}
	}
    
    // adds number if button is clicked
    function enterNumberClicked() {
        $numberList.empty();
        addNumber();
        event.preventDefault();
		}
    

    //checks if the input is a usable number
    function addNumber() {
        var $inputRounded,
            $input = $('input#numberInput').val();
        $input = +$input;
        console.log("number entered " + $input + " " + typeof $input);
           
        // Is it a number?
        if (!$input && $input !== 0) {
            $numberList.append('<em>Please type a number</em>');
        
        // is it more than zero?
        } else if ($input <= 0) {
            $numberList.append('<em> Please enter a number greater than Zero</em>');
         
        // is it more than 100?
        } else if ($input > 101) {
            $numberList.append('<em> Please enter a number less than 100</em>');        
                
        // Ok it's all good, round it and run fizzbuzz
        } else {
            $inputRounded = Math.round($input);
            if ($inputRounded < $input) {
                $numberList.append("Your number has been rounded down<br>\(It's your own fault for using a decimal\)"  + '<br><br>');
                } else if($inputRounded > $input) {
                    $numberList.append("Your number has been rounded up<br>\(It's your own fault for using a decimal\)"  + '<br><br>');
                } else {
                    $numberList.append('<b>Great Choice!</b>' + '<br><br>');
                }
//               
                runFizzBuzz($inputRounded);
        }
    }
    
    // Fiz Buzz the numbers up to user's # input
    function runFizzBuzz(number){
                       
        for(var i=1; i <= number; i++) {
             if ((i%15) === 0) {
                 $numberList.append('Fizz Buzz' + '<br>');
             } else if 
                 ((i%3) === 0) {
                 $numberList.append('Fizz' + '<br>');
             } else if 
                 ((i%5) === 0) {
                 $numberList.append('Buzz'+ '<br>');
             } else 
                 $numberList.append(i + '<br>');
         }
                          
        }
    
      
    // get the click event set up for the button    
    $('input.enter').on('click', enterNumberClicked);
    
    // get the keypress event set up for the enter key
    $('input#numberInput').on('keydown', enterNumberTyped);
    
});