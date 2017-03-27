function playMusic(){
    document.getElementById("track1").play();
}

function pauseMusic() { 
    document.getElementById("track1").pause(true);
}

function getVolume() { 
    "track1".volume.innerText;
} 
  

function volDown(){
    document.getElementById("track1").volume-=0.1;
}

function volUp() { 
    document.getElementById("track1").volume+=0.1;
}

function adelantar(){
    document.getElementById("track1").currentTime+=5;
}

function retroceder(){
    document.getElementById("track1").currentTime-=5;
}

function stop(){
    document.getElementById("track1").pause(true);
    document.getElementById("track1").currentTime= 0;
}




