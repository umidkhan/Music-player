let audio = document.querySelectorAll('.audio');
let img = document.querySelectorAll('.img');
let img1 = document.querySelectorAll('.img1');
let play1 = document.querySelector('.playpause-track1');
let pause1 = document.querySelector('.playpause-track2');
let container = document.getElementById('image-container');
let count = 0;
let a = 0;

function imgCHoose(){
    if(a == 0){
        img1[0].style.display = 'block'
        img1[1].style.display = 'none'        
        img1[2].style.display = 'none'
        img1[3].style.display = 'none'
    }
    else if(a == 1){
        img1[0].style.display = 'none'
        img1[1].style.display = 'block'
        img1[2].style.display = 'none'
        img1[3].style.display = 'none'
    }
    else if(a == 2){
        img1[0].style.display = 'none'
        img1[1].style.display = 'none'
        img1[2].style.display = 'block'
        img1[3].style.display = 'none'
    }
    else if(a == 3){
        img1[0].style.display = 'none'
        img1[1].style.display = 'none'
        img1[2].style.display = 'none'
        img1[3].style.display = 'block'
    }    
}
imgCHoose()

function PlayPause() {
    play1.style.display = 'none'
    pause1.style.display = 'block'
    if (count == 0) {
        count = 1;
        audio[a].play()
        img1[a].style.display = 'none'
        img[a].style.display = 'block'
    }
    else {
        imgCHoose()
        play1.style.display = 'block'
        pause1.style.display = 'none'
        count = 0;
        audio[a].pause()
        img1[a].style.display = 'block'
        img[a].style.display = 'none'
    }
};

function PlayNext() {
    img1[a].style.display = 'none'
    count = 0;
    audio[a].pause()
    img[a].style.display = 'none'
    a = a + 1
    if(a < audio.length){
        PlayPause()
    }
    else{
        a = 0
        audio[a].play()
        img[a].style.display = 'block'
    }
}
function PlayPrev() {
    img1[a].style.display = 'none'
    count = 0;
    audio[a].pause()
    img[a].style.display = 'none'
    a = a - 1
    if(a >= 0){
        PlayPause()
    }
    else{
        a = audio.length - 1
        audio[a].play()
        img[a].style.display = 'block'
    }
}