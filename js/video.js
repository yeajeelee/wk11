var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	document.querySelector("#volume").textContent = (video.volume * 100) + "%";
	document.querySelector("#slider").value = video.volume * 100;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click",function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower");
	video.playbackRate *= .9;
	console.log("Playback rate is ", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster");
	video.playbackRate *= 1.1;
	console.log("Playback rate is ", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0
	} else {
		video.currentTime += 10;
	}
	
	console.log("The new location is ", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false
		this.innerHTML = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true
		this.innerHTML = "Unmute";
		console.log("Muted");
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School style");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original style");
});
