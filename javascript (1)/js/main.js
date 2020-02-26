var next = document.getElementById("next")
var prev =document.getElementById("prev")
var sliders= document.querySelector("#slider ul")
var say=0;
 var sliderli=sliders.querySelectorAll("li").length
// next.onclick=nextSlider
// prev.onclick=prevSlider
// setInterval(() => {
//     nextSlider()
// },3000 );
// function prevSlider()
// {
//     say--;
//     if(say==-1){
//         say = sliderli-1;
//     }
//     sliders.style.left=-(say*500)+"px"
// }
   
// function nextSlider(){
// say++;
// if(say==sliderli){
//     say=0;
// }
// sliders.style.left=-(say*500)+"px"
// }

var miniSlide=document.querySelectorAll(".miniSlider li")
for(var i=0; i<miniSlide.length;i++){
    miniSlide[i].onclick=function(){
        var imglink=this.querySelector("img").src;
        document.querySelector("#slider img").src=imglink
    }
}