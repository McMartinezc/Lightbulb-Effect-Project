// Buena suerte ! Espero que se te encianda la "bombilla"!
const bombilla = document.querySelector("#bulb");

bombilla.addEventListener("click", ()=>{
    bombilla.classList.toggle("bulb-on")
})