const $el = 
document.querySelector(".user-card");

setTimeout(() => {
    $el.classList.remove("skeleton");
    $el.querySelectorAll(".hide-text")
    .forEach((el) => el.classList.remove("hide-text"));
}, 3000);

document.getElementById("linked").onclick = function (){
    location.href = "https://www.linkedin.com/in/alok-kumar-a63061219";
};