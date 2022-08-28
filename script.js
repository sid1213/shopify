var vdo = document.getElementById("vdo");
var vdo_2 = document.getElementById("vdo_2");
vdo.play();
vdo_2.play();

vdo.controls=false;
var pause = document.getElementById("pause");
var pause_2 = document.getElementById("pause_2");
var pause_3 = document.getElementById("pause_3");


var playing = document.getElementById("play");
var playing_2 = document.getElementById("play_2");
var playing_3 = document.getElementById("play_3");


playing.style.display="none"
playing_2.style.display="none"
playing_3.style.display="none"



pause.addEventListener("click",function(){
playing.style.display="block"
pause.style.display="none"
vdo.pause();
});
playing.addEventListener("click",function(){
    pause.style.display="block"
    playing.style.display="none"
    vdo.play();
})

pause_2.addEventListener("click",function(){
    playing_2.style.display="block"
    pause_2.style.display="none"
    vdo_2.pause();
});
playing_2.addEventListener("click",function(){
    pause_2.style.display="block"
    playing_2.style.display="none"
    vdo_2.play();
})
var lottie_post= lottie.loadAnimation({
    container: document.getElementById("globe"), // container for the lotties
    renderer: "svg",
    path: `./assets/lf30_editor_dzhm6zg0.json`, // path of animation (json)
    autoplay: true,
    loop: true,
  });

  pause_3.addEventListener("click",function(){
    playing_3.style.display="block"
    pause_3.style.display="none"
    lottie_post.stop();
});
playing_3.addEventListener("click",function(){
    pause_3.style.display="block"
    playing_3.style.display="none"
    lottie_post.play();
})
 