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
