function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
/*
var gotoup = document.getElementById("top");
var gotoimage = document.getElementById("gotoimage");

gotoup.style.display = "none";

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    gotoup.style.display = "block";
  } else {
    gotoup.style.display = "none";
  }
}

document.getElementById("radio1").click();*/

document.getElementById("mobilelinks").style.display = "none";
var opened = false;
document.getElementById("menu").addEventListener("click",()=>{
  if(!opened){
    document.getElementById("mobilelinks").style.display = "block";
    document.getElementById("menu").innerHTML = "<center><i class='fa-solid fa-xmark' style='font-size: 25px;'></i></center>";
    opened = true;
  }else{
    document.getElementById("mobilelinks").style.display = "none";
    document.getElementById("menu").innerHTML = "<center><i class='fa-solid fa-bars' style='font-size: 25px;'></i></center>";
    opened = false;
  }
});