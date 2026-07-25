
for (var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    addDrumSound(this.innerHTML); 
    addKeyAnimation(this.innerHTML);
});
}

document.addEventListener("keydown", function(event){
     addDrumSound(event.key);
     addKeyAnimation(event.key);
   
})

function addDrumSound(key){
        switch(key) {
        case "s":{
                 var drumsound= new Audio("./sounds/tom-1.mp3");
                 drumsound.play();
                 break;
        }
         case "r":{
                 var drumsound= new Audio("./sounds/tom-2.mp3");
                 drumsound.play();
                 break;
        }
         case "g":{
                 var drumsound= new Audio("./sounds/tom-3.mp3");
                 drumsound.play();
                 break;
        }
         case "m":{
                 var drumsound= new Audio("./sounds/tom-4.mp3");
                 drumsound.play();
                 break;
        }
         case "p":{
                 var drumsound= new Audio("./sounds/crash.mp3");
                 drumsound.play();
                 break;
        }
         case "d":{
                 var drumsound= new Audio("./sounds/kick-bass.mp3");
                 drumsound.play();
                 break;
        }
         case "n":{
                 var drumsound= new Audio("./sounds/snare.mp3");
                 drumsound.play();
                 break;
        }
        default:console.log(key+" - Why are you pressing/clicking random keys?");
                 break;
    }
}

function addKeyAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}