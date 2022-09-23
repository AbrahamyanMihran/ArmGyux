let header = document.querySelector("header");
let hay = document.querySelector("#link1");
let rus = document.querySelector("#link2");
let eng = document.querySelector("#link3");
let point = 0;

window.addEventListener("scroll", () => {
    header.classList.toggle("header", window.scrollY > 0);
});


hay.onclick = function() {
    if(point === 0){
        rus.style.display = "block";
        eng.style.display = "block";
        point = 1;
    } else{
        rus.style.display = "none";
        eng.style.display = "none";
        point = 0;
    }
}


