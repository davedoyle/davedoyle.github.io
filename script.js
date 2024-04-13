  // Update scroll progress bar
  window.addEventListener('scroll', function() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollableHeight) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
  });

  // Dynamically set height of the content area
  window.addEventListener('load', function() {
    const contentHeight = document.getElementById('content').offsetHeight;
    document.body.style.height = contentHeight + 'px';
  });


function sing(){
	document.getElementById("beerButton").style.display = "none";
	
	for(i=99; i>=0; i--){//start loop

		if(i>2){//if greater than 2 loop the standard lyric
			document.getElementById("main").innerHTML+="<br />"+i + " bottles of beer on the wall, "+ i +" bottles of beer.Take one down and pass it around, " + (i-1) + " bottles of beer on the wall";
			}
		else if(i==2){ //if equal 2 modify the lyric to capture a singular bottle
			document.getElementById("main").innerHTML+="<br />"+i + " bottles of beer on the wall, "+ i +" bottles of beer.Take one down and pass it around, " + (i-1) + " bottle of beer on the wall";

			}
		else if(i==1){//if equal 1 modify the lyric for no more bottles
			document.getElementById("main").innerHTML+="<br />"+i + " bottle of beer on the wall, "+ i +" bottle of beer.Take one down and pass it around, no more bottles of beer on the wall";
		}
		else{//if nothing else print the last verse of the song
			document.getElementById("main").innerHTML+="<br />"+"No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall";


			}
			}//end loop
	
	
		
	
	
};



function subjects() {
    const subjectsCount = prompt("How Many Subjects do you do?");
    let text = "OK, so you do " + subjectsCount + " subjects";
    document.getElementById("main").innerHTML = text;

    for (let i = subjectsCount; i > 0; i--) {
        const result = prompt("What was the result for subject " + i + ", between 1 and 100?");
        let resulttext = "x";
        if (result > 80) {
            resulttext = "A";
        }
		else if(result <= 80 && result >= 60){
				resulttext = "B";
		}
		else if(result <= 59 && result >= 45){
				resulttext = "C";
		}
		else if(result <= 44 && result >= 40){
				resulttext = "D";
		} 
		else{
			resulttext = "FAIL"
		}
		
        document.getElementById("main").innerHTML += "<br /> Subject " + i + " Grade = " + resulttext;
    }
};

/*
Create an application that asks a user to enter how many subjects they have. 
The application should then ask the user to enter the results for each subject. 
Store these results in an array and print them back to the user along with their overall average and grade for each module.

*/


function subjects(){
	
	let results = [];
	const subjectsCount = prompt("How Many Subjects do you do?");
	let text = "OK, so you do " + subjectsCount + " subjects";
    document.getElementById("main").innerHTML = text;
	
	for (let i = 0; i < subjectsCount; i++) {
        const result = parseInt(prompt("What was the result for subject " + (i + 1) + ", between 1 and 100?"), 10);
        results.push(result); // Store the result in the array

        let resulttext = "x";
        if (result > 80) {
            resulttext = "A";
        } else if (result >= 60) {
            resulttext = "B";
        } else if (result >= 45) {
            resulttext = "C";
        } else if (result >= 40) {
            resulttext = "D";
        } else {
            resulttext = "FAIL";
        }

        document.getElementById("main").innerHTML += "<br /> Subject " + (i + 1) + " Grade = " + resulttext + ", your result was " + result;
    }

	let average = 0 //allows change in the future (w3schools)
	for(i=0;i<results.length;i++){
		average = average + results[i]
	}
	
	average = average/subjectsCount;
	
	document.getElementById("main").innerHTML += "<br />Average Result: " + average;

};