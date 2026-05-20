// TYPING EFFECT

var typed = new Typed(".auto-type", {
  strings: [
    "Frontend Developer",
    "MERN Stack Developer",
    "Creative Coder"
  ],

  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});


// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});


// 3D CARD EFFECT

const card = document.getElementById("card");

card.addEventListener("mousemove", (e) => {

  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 18;
  const rotateY = (centerX - x) / 18;

  card.style.transform =
  `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});


card.addEventListener("mouseleave", () => {

  card.style.transform =
  `rotateX(0deg) rotateY(0deg)`;

});