const bright = document.getElementById("brightness");
const saturate = document.getElementById("Saturation");
const invert = document.getElementById("Inversion");
const grey = document.getElementById("Greyscale");
const tool = document.getElementById("tool");
const progress = document.getElementById("selet");
const anticlock = document.getElementById("anticlock");
const clock = document.getElementById("clock");
const flip = document.getElementById("flipup");
const flipside = document.getElementById("flipside");
const image = document.getElementById("image");
const valChange = document.getElementById("val"); 
const serpia= document.getElementById("serpia");
const blurr = document.getElementById("blur");
const choose = document.getElementById("chooseimg");
const reset = document.getElementById("res");
const scrip = document.getElementById("scrip");


bright.onclick = () =>{
    bright.style.backgroundColor = "rgb(253, 4, 45)";
    saturate.style.backgroundColor = "transparent";
    invert.style.backgroundColor = "transparent";
    grey.style.backgroundColor = "transparent";
    blurr.style.backgroundColor = "transparent";
    serpia.style.backgroundColor = "transparent";

    tool.innerText = "Brightness";
    
    
  

}
saturate.onclick = () =>{
    saturate.style.backgroundColor = "rgb(253, 4, 45)";
    bright.style.backgroundColor = "transparent";
    invert.style.backgroundColor = "transparent";
    grey.style.backgroundColor = "transparent";
    blurr.style.backgroundColor = "transparent";
    serpia.style.backgroundColor = "transparent";
    
    tool.innerText = "Saturation";

}
invert.onclick = () =>{
    invert.style.backgroundColor = "rgb(253, 4, 45)";
    bright.style.backgroundColor = "transparent";
    saturate.style.backgroundColor = "transparent";
    grey.style.backgroundColor = "transparent";
    blurr.style.backgroundColor = "transparent";
    serpia.style.backgroundColor = "transparent";
    
    tool.innerText = "Inversion";

}
grey.onclick = () =>{
    grey.style.backgroundColor = "rgb(253, 4, 45)";
    bright.style.backgroundColor = "transparent";
    saturate.style.backgroundColor = "transparent";
    invert.style.backgroundColor = "transparent";
    blurr.style.backgroundColor = "transparent";
    serpia.style.backgroundColor = "transparent";

    tool.innerText = "Greyscale";

}
blurr.onclick = () =>{
    blurr.style.backgroundColor = "rgb(253, 4, 45)";
    bright.style.backgroundColor = "transparent";
    saturate.style.backgroundColor = "transparent";
    invert.style.backgroundColor = "transparent";
    grey.style.backgroundColor = "transparent";
    serpia.style.backgroundColor = "transparent";
    
    tool.innerText = "Blur";

}
serpia.onclick = () =>{
    serpia.style.backgroundColor = "rgb(253, 4, 45)";
    bright.style.backgroundColor = "transparent";
    saturate.style.backgroundColor = "transparent";
    invert.style.backgroundColor = "transparent";
    grey.style.backgroundColor = "transparent";
    blurr.style.backgroundColor = "transparent";
    
    tool.innerText = "Sepia";

}
progress.onclick = () => {
    valChange.innerHTML = `${progress.value}0%`;
        if ( bright.style.backgroundColor === "rgb(253, 4, 45)") {
        image.style.filter = `brightness(${progress.value})`;
        
    } else  if ( saturate.style.backgroundColor === "rgb(253, 4, 45)") {
        image.style.filter = `saturate(${progress.value}0%)`;
        
    }
    else  if ( grey.style.backgroundColor === "rgb(253, 4, 45)") {
        image.style.filter = `grayscale(${progress.value}0%)`;
        
    }
    else  if ( invert.style.backgroundColor === "rgb(253, 4, 45)") {
        image.style.filter = `invert(${progress.value})`;
        
    }
    else  if ( blurr.style.backgroundColor === "rgb(253, 4, 45)") {
        image.style.filter = `blur(${progress.value}px)`;
        
    }
    else  if (serpia.style.backgroundColor === "rgb(253, 4, 45)") {
        image.style.filter = `sepia(${progress.value}0%)`;
        
    }
}

anticlock.onclick = () =>{
    anticlock.style.backgroundColor = "rgb(253, 4, 45)";
    clock.style.backgroundColor = "transparent";
    flip.style.backgroundColor = "transparent";
    flipside.style.backgroundColor = "transparent";
    image.style.transform = "rotate(-90deg)"
   

}
clock.onclick = () =>{
    clock.style.backgroundColor = "rgb(253, 4, 45)";
    anticlock.style.backgroundColor = "transparent";
    flip.style.backgroundColor = "transparent";
    flipside.style.backgroundColor = "transparent";
    image.style.transform = "rotateX(180deg)"
   

}
flip.onclick = () =>{
    flip.style.backgroundColor = "rgb(253, 4, 45)";
    anticlock.style.backgroundColor = "transparent";
    clock.style.backgroundColor = "transparent";
    flipside.style.backgroundColor = "transparent";
    image.style.transform = "rotateY(180deg)"
   

}
flipside.onclick = () =>{
    flipside.style.backgroundColor = "rgb(253, 4, 45)";
    anticlock.style.backgroundColor = "transparent";
    clock.style.backgroundColor = "transparent";
    flip.style.backgroundColor = "transparent";
    image.style.transform = "rotateY(0)"
   

}
reset.onclick = () => {
    image.style.filter = `brightness(1)`;
    image.style.transform = "rotateY(0)";
    progress.value = "50%";
    valChange.innerHTML = `50%`;
}

var loadFile = function(event) {
	// var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};


// var i = 0;

// setInterval(function(){
//     if(image.length > i){
//         window.open(image[i].src,'_blank');
//         i++;
//     }
// },1000);

var images = image;
var srcList = [];
var i = 0;

setInterval(function(){
    if(images.length > i){
        srcList.push(images[i].src);
        var link = document.createElement("a");
        link.id=i;
        link.download = images[i].src;
        link.href = images[i].src;
        link.click();
        i++;
    }
},1500);

// anticlock.onclick = () =>{
//     anticlock.style.backgroundColor = "rgb(253, 4, 45)";
//     clock.style.backgroundColor = "transparent";
//     flip.style.backgroundColor = "transparent";
//     flipside.style.backgroundColor = "transparent";
//     image.style.transform = "rotate(-90deg)"
   

// }
// clock.onclick = () =>{
//     flipside.style.backgroundColor = "rgb(253, 4, 45)";
//     anticlock.style.backgroundColor = "transparent";
//     clock.style.backgroundColor = "transparent";
//     flip.style.backgroundColor = "transparent";
//     image.style.transform = "rotateY(0)"
   

// }
// flip.onclick = () =>{
//     flip.style.backgroundColor = "rgb(253, 4, 45)";
//     anticlock.style.backgroundColor = "transparent";
//     clock.style.backgroundColor = "transparent";
//     flipside.style.backgroundColor = "transparent";
//     image.style.transform = "rotateY(0deg)"
   

// }
// flipside.onclick = () =>{
//     clock.style.backgroundColor = "rgb(253, 4, 45)";
//     anticlock.style.backgroundColor = "transparent";
//     flip.style.backgroundColor = "transparent";
//     flipside.style.backgroundColor = "transparent";
//     image.style.transform = "rotateY(-180deg)"
   

// }