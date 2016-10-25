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
	document.getElementById("body1").style.opacity = "1";
	document.getElementById("body2").style.opacity = "0";
}
