var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

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
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster");
	video.playbackRate *= 1.1;
	console.log("Playback rate is ", video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0
	} else {
		video.currentTime += 10;
	}
	
	console.log("The new location is ", video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.volume= 0;
})