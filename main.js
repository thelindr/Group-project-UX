document.querySelectorAll("video").forEach((el) => {
	el.addEventListener("play", darkmode); 
});


	function darkmode(){
document.body.style.backgroundColor = "black";
  };
  


document.querySelectorAll("video").forEach((el) => {
	el.addEventListener("pause", lightmode);
});

function lightmode() {
document.body.style.backgroundColor = "white";
}

/*const video = document.querySelector('video');

video.onplaying = (event) => {
  document.body.style.backgroundColor = "black";
};*/
