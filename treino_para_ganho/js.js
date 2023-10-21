const treino = document.getElementById("peitos")
const treino1 = document.getElementById("pernas")
const treino2 = document.getElementById("Bracos")
const treino3 = document.getElementById("costa")
const treino4 = document.getElementById("biceps")
const treino5 = document.getElementById("triceps")
var box = document.querySelector('.box-treino')
var boxx = document.querySelector('.box-treino1')
var box_perna = document.querySelector('.box-treino2')
var box_Costa = document.querySelector('.box-treino3')
var box_biceps = document.querySelector('.box-treino4')
var box_triceps = document.querySelector('.box-treino5')
let tuop = false;

treino.addEventListener ('click', function(event){
    event.preventDefault();
    box.classList.add('show')
    box_triceps.classList.remove('shoffff')
    boxx.classList.remove('showw')
    box_perna.classList.remove('shof')
    box_Costa.classList.remove('shoff')
    box_biceps.classList.remove('shofff')
})

treino1.addEventListener ('click', function(event){
    event.preventDefault();
    boxx.classList.add('showw')
    box.classList.remove('show')
    box_triceps.classList.remove('shoffff')
    box_perna.classList.remove('shof')
    box_Costa.classList.remove('shoff')
    box_biceps.classList.remove('shofff')
})

treino2.addEventListener ('click', function(event){
    event.preventDefault();
    boxx.classList.remove('showw')
    box.classList.remove('show')
    box_triceps.classList.remove('shoffff')
    box_perna.classList.add('shof')
    box_Costa.classList.remove('shoff')
    box_biceps.classList.remove('shofff')
})

treino3.addEventListener ('click', function(event){
    event.preventDefault();
    box_Costa.classList.add('shoff')
    box.classList.remove('show')
    boxx.classList.remove('showw')
    box_perna.classList.remove('shof')
    box_biceps.classList.remove('shofff')
    box_triceps.classList.remove('shoffff')
})

treino4.addEventListener ('click', function(event){
    event.preventDefault();
    box_biceps.classList.add('shofff')
    box.classList.remove('show')
    boxx.classList.remove('showw')
    box_perna.classList.remove('shof')
    box_Costa.classList.remove('shoff')
    box_triceps.classList.remove('shoffff')

})

treino5.addEventListener ('click', function(event){
    event.preventDefault();
    box_triceps.classList.add('shoffff')
    box.classList.remove('show')
    boxx.classList.remove('showw')
    box_perna.classList.remove('shof')
    box_Costa.classList.remove('shoff')
    box_biceps.classList.remove('shofff')
})



