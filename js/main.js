let menu =document.querySelectorAll(".content ul li a");
let popup =document.querySelectorAll(".container .card .popup");
let mycon =document.querySelector(".mycontent");
let mybtn =document.querySelector(".mycontent span");
let myimg =document.querySelector(".mycontent .myimg img");
let cards =document.querySelectorAll(".container .card");
let all= menu[0];

menu.forEach(function(ele){
    ele.onclick=function(el){
        menu.forEach((e)=>{
            e.classList.remove("active");
        });
        el.currentTarget.classList.add("active");
            cards.forEach(function(e){
                if(e.dataset.select==el.currentTarget.dataset.select){
                    e.style.display="block";
                }else{
                    e.style.display="none";
                }
            }); 
    }
});
all.onclick=function(el){
    menu.forEach((e)=>{
        e.classList.remove("active");
    });
    all.classList.add("active");
    cards.forEach(function(e){
   e.style.display ="block";
   });
}

//popup
let type =document.querySelector(".mycontent2 .text .type samp");
let amount =document.querySelector(".mycontent2 .text .amount samp");

mycon.style.display="none";

popup.forEach(function(p){
    p.onclick=function(e){
        mycon.style.display="block";
        mycon.classList.add("show");
        myimg.src=e.currentTarget.dataset.img;
        type.textContent=e.currentTarget.dataset.select;
        if(e.currentTarget.dataset.select=="حلويات"){
            amount.textContent="$10";
        }
        if(e.currentTarget.dataset.select=="بيتزا"){
            amount.textContent="$15";
        }
        if(e.currentTarget.dataset.select=="دجاج"){
            amount.textContent="$20";
        }
    }
});

mybtn.onclick = function(){
    mycon.style.display="none"; 
    mycon.classList.remove("show");
}

document.onclick=function(e){
    let bol;
    mycon.classList.forEach(function(e){
        if(e=="show"){
            bol=true;
        }else{
            bol=false;
        }
    });
    if(bol){
        cards.forEach(function(e){
            e.style.opacity="0.2";
        });
    }else{
        cards.forEach(function(e){
            e.style.opacity="";
        });
    }
}

let home =document.querySelector(".home");
let homeText =document.querySelector(".home .home-text");
let homeImg =document.querySelector(".home .home-img");

// window.onload=()=>{
//     homeText.style.opacity="0";
//     homeImg.style.opacity="0";
// }

function homeScroll(){
    if(window.scrollY>=home.offsetTop-250){
       homeText.style.animation="left-animation 2s";
       homeImg.style.animation="right-animation 2s";
       homeText.style.opacity="1";
     homeImg.style.opacity="1";
    }

}

let about =document.querySelector(".about");
let aboutText =document.querySelector(".about .about-text");
let aboutImg =document.querySelector(".about .about-img");

function aboutScroll(){
    if(window.scrollY>=about.offsetTop-250){
       aboutImg.style.animation="left-animation 2s";
       aboutText.style.animation="right-animation 2s";
       aboutText.style.opacity="1";
        aboutImg.style.opacity="1";
    }

}

window.onscroll=function(){
 homeScroll();
 aboutScroll();
}
let links =document.querySelectorAll(".links ul a");

links.forEach(function(ele){
    ele.onclick =function(el){
        links.forEach(function(e){
            e.classList.remove("active");
        });
        el.currentTarget.classList.add("active");
    }
});

let menubt =document.querySelector(".links .icon");
let navbar =document.querySelector(".links ul");

// menubt.onclick=(e)=>{
//     navbar.style.display="block";
// }



