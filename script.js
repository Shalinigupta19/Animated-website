// import shery from "sheryjs";

// Shery.imageEffect("#back",{style: 5,debug})
// Example code to initialize Shery.js and use a cool effect.

// import Shery from "sheryjs"; /*Don't use if using CDN*/

// Shery.mouseFollower();
// Shery.imageEffect(".image", {
//     style: 6,
//     debug: true,
//   });

Shery.imageEffect("#back", {style: 5, debug: true, gooey: true})
var elems = document.querySelectorAll(".elem");
elems.forEach(function(elem){
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;

document.querySelector("#main").addEventListener("click", function() {
   if(!animating){
     animating = true;
    gsap.to(h1s[index],{
       top: '-=100%',
       ease: Expo.easeInOut,
       duration: 1,
       onComplete: function(){
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
       },
    });
    index === h1s.length - 1 ? (index = 0) : index++;
    gsap.to(h1s[index],{
      top: '-=100%',
      ease: Expo.easeInOut,
      duration: 1,
   });
  }
});
});
