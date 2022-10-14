

var imgs=Array.from(document.querySelectorAll(".img-fluid"));
var lightboxcontainer=document.getElementById("lightbox-container");
var lightboxItem=document.getElementById("lightbox-item");
var closeIcon=document.getElementById("close");
var prevIcon=document.getElementById("prev");
var nextIcon=document.getElementById("next");
var currentIndex=0;

for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(e){
        lightboxcontainer.style.display="flex";
        var imgSrc=e.target.src;
        lightboxItem.style.backgroundImage=`Url(${imgSrc})`
        currentIndex=imgs.indexOf(e.target);
    })
}

closeIcon.addEventListener("click",closeSlider);
function closeSlider(){
    lightboxcontainer.style.display="none";
}

nextIcon.addEventListener("click",getNextSlide)

function getNextSlide(){
    currentIndex++; 
    if(currentIndex==imgs.length){
        currentIndex=0;
    }
  var imgSrc=imgs[currentIndex].src;
  lightboxItem.style.backgroundImage=`Url(${imgSrc})`

}

prevIcon.addEventListener("click",getPrevSlide)
function getPrevSlide(){
    currentIndex--; 
    if(currentIndex<0){
        currentIndex=imgs.length-1
    }
  var imgSrc=imgs[currentIndex].src;
  lightboxItem.style.backgroundImage=`Url(${imgSrc})`

}

document.addEventListener("keydown",function(e){
  if(e.key=="Escape"){
    closeSlider()
  }
  else if(e.key=="ArrowRight"){
    getNextSlide()
  }
  else if(e.key=="ArrowLeft"){
    getPrevSlide()
  }
})

lightboxcontainer.addEventListener("click",function(e){
    if(e.target!=lightboxItem&&e.target!=prevIcon&&e.target!=nextIcon){
        closeSlider()
    }
})




// var httpRequest=new XMLHttpRequest();
// var posts=[];
// httpRequest.open("GET","https://jsonplaceholder.typicode.com/posts");
// httpRequest.send();
// httpRequest.addEventListener("readystatechange",function(){

//   if(httpRequest.readyState==4&&httpRequest.status==200)
//   {
//    posts= JSON.parse(httpRequest.response);
//    displayPosts();
//   }
// })

// function displayPosts(){
//   var cols='';
// for(var i=0;i<posts.length;i++){
//   cols+=
//   `
//     <div class="col-md-3">
//       <div>
//         <h3>${posts[i].id}</h3>
//         <h2>${posts[i].title}</h2>
//         <p>${posts[i].body}</p>
//       </div>
//     </div>
//   `
// }
//   document.getElementById("postsRow").innerHTML=cols
// }