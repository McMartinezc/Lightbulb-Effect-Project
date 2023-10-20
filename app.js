// Buena suerte ! Espero que se te encianda la "bombilla"!
const bombilla = document.querySelector("#bulb");

// bombilla.addEventListener("click", ()=>{
//     bombilla.classList.toggle("bulb-on");
// })

bombilla.addEventListener("mouseover", () => {
    bombilla.classList.add("bulb-on");
    bombilla.classList.remove("bulb-off");
});

bombilla.addEventListener("mouseout", () => {
    bombilla.classList.remove("bulb-on");
    bombilla.classList.add("bulb-off");
});