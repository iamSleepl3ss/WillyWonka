function toInfo() {
	document.getElementById("logo").style.display = "none";
	document.getElementById("info").style.display = "block";
	document.getElementById("projects").style.display = "none";
	document.getElementById("bgoff").style.opacity = "0";
	document.getElementById("bgoff2").style.opacity = "1";
	document.getElementById("body1").style.opacity = "0";
	document.getElementById("body2").style.opacity = "1";
}

function toProjects() {
	document.getElementById("logo").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("projects").style.display = "block";
	document.getElementById("bgoff").style.opacity = "1";
	document.getElementById("bgoff2").style.opacity = "0";
	document.getElementById("body1").style.opacity = "0";
	document.getElementById("body2").style.opacity = "1";
}

function toHome() {
	document.getElementById("logo").style.display = "block";
	document.getElementById("info").style.display = "none";
	document.getElementById("projects").style.display = "none";
	document.getElementById("bgoff").style.opacity = "0";
	document.getElementById("bgoff2").style.opacity = "0";
	document.getElementById("body1").style.opacity = "0";
	document.getElementById("body2").style.opacity = "1";
}

window.onload = countTimer;

var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
var ulykke = Math.floor((Math.random() * 9) + 3)
		console.log(ulykke)

		function countTimer() {
		++totalSeconds;
		var hour = Math.floor(totalSeconds / 3600);
		var minute = Math.floor((totalSeconds - hour * 3600) / 60);
		var seconds = totalSeconds - (hour * 3600 + minute * 60);

		if(seconds === ulykke){
			totalSeconds=0
		}
		 document.getElementById("print").innerHTML = hour + ":" + minute + ":" + seconds;
		 if(document.getElementById("print").innerHTML == "0:0:1"){
			 document.getElementById("print").innerHTML = "<span class=\"red\">0:0:1</span>"
		 }

}
