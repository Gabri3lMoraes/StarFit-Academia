const wrapper = document.querySelector(".login-form");
const login = document.querySelector(".register-link");
const btts = document.querySelector(".buttonn");
const btnicon = document.querySelector(".iconclose");
const registro = document.querySelector(".login-link");

login.addEventListener("click", () => {
  wrapper.classList.add("active");
});

registro.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btts.addEventListener("click", () => {
  wrapper.classList.add("active-btts");
});

btnicon.addEventListener("click", ()=> {
  wrapper.classList.remove('active-btts')
})
const tparagrafos = document.querySelectorAll(".topi");

const myobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      myobserver.unobserve(entry.target);
    }
  });
});
const titulo = document.querySelector(".start");
const paragrafos = document.querySelectorAll(".hidden");

paragrafos.forEach((element) => myobserver.observe(element));
titulo.forEach((element) => myobserver.observe(element));



const Inputs = document.getElementById("inpot")

Inputs.addEventListener;


