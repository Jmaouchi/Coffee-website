// start with the navbar whenwver the screen is at 991px
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


// // delete item 
// document.getElementById('cart-item').addEventListener('click', function(e){
//     if (e.target.classList.contains('fa-times')){
//         e.target.parentElement.remove();
//         document.querySelector('.ul').remove();
//     }
// });

// const container = document.getElementById('cart-items-container');
// container.forEach(function(item) {
//     item.addEventListener('click', function(e){
//     const styles = e.currentTarget.classList;
//     if (styles.contains("fa-times")) {
//       alert()
//     }
//     })

// })

const collections = ['itemOne', 'itemTwo', 'itemThree', 'itemFour', 'itemFive'];

const itemOne = document.getElementById('item-one');
const itemTwo = document.getElementById('item-two');
const itemThree = document.getElementById('item-three');
const itemFour = document.getElementById('item-four');
const itemFive = document.getElementById('item-five');

let coco = collections.map((function(task){
    

}))

// remove from checkout


//add to checkout
document.getElementById('cart-item').addEventListener('click', add)
function add (e){

    const liList = document.querySelector('.cart-item');
    // creat li
    const li = document.createElement ( 'li');
    // adding a Class to the li
    li.className = 'list';
    //creat a tag
    const link = document.createElement('a');
    // a className
    link.className = 'delete';
    //add the icon html
    link.innerHTML = '<i class="fas fa-window-close"></i>';
    //append the link to li
    li.appendChild(link);
    // creating a textNode and append to ul
    li.appendChild (document.createTextNode('item 1 added, price 15.99$'));   
    document.getElementById('add-list').appendChild(li);
}



document.getElementById('add-list').addEventListener('click', function(e){
    if (e.target.classList.contains('fa-window-close')){
        document.querySelector('.list').remove();
    }
})

document.getElementById('btn').addEventListener('click', function(e){
    e.target.innerText = 'congratulations';
    e.target.style.background= 'green';
})


$(document).ready(function(){
  
  
  $('body').mousemove(function(e){

    var x = e.pageX + 'px';
    var y = e.pageY + 'px';

    $('.cursor').css({'top':y, 'left':x});

});
});




// reviews changing

const reviews = [
    { 
        id:1,
        name: 'jugurta maouchi',
        job:'frontend developer',
        img:'C:/Users/12106/OneDrive/Desktop/Coffee website/img/pic-2.png',
        text:' fosadlknasldn alskdnlaknsd asldknalksnd alskdn asdlkjna sdfsdlkansdlka sdlaknsdla sdlnasdlknsldn sdlnflknsd flnsdlfn skdfnlkn'

    }
    ,
    {   
        id:2,
        name: 'yuva maouchi',
        job:'Data Analyst',
        img:' C:/Users/12106/OneDrive/Desktop/Coffee website/img/djigo.jpg',
        text:' fosadlknasldn alskdnlaknsd asldknalksnd alskdn asdlkjna sdlkansdlkasdf d sdlaknsdla sdlnasdlknsldn sdlnflknsd flnsdlfn skdfnlkn'

    }
    ,
    {   
        id:3,
        name: 'ali maouchi',
        job:'Web developer',
        img:'C:/Users/12106/OneDrive/Desktop/Coffee website/img/pic-1.png',
        text:' fosadlknasldn alskdnlaknsd asldknalksnd alskdn  sada asdasd dsasdasddddddddddasdas dsad asd dsawe csaasdlkjna sdlkansdlka sdlaknsdla sdlnasdlknsldn sdlnflknsd flnsdlfn skdfnlkn'
    }

    ,
    {   
        id:3,
        name: 'Mohand maouchi',
        job:'Web developer',
        img:'C:/Users/12106/OneDrive/Desktop/Coffee website/img/pic-1.png',
        text:' fosadlknasldn alskdnlaknsd asldknalksnd alskdn  sada asdasd asdasasdasd dsfdfsffsdf dsf dasdasdsasdasddddddddddasd        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat molestiae accusantium magni a esse accusamus tenetur sint non perspiciatis laboriosam!as dsad asd dsawe csaasdlkjna sdlkansdlka sdlaknsdla sdlnasdlknsldn sdlnflknsd flnsdlfn skdfnlkn'
    }

    ,
    {   
        id:3,
        name: 'Nora maouchi',
        job:'Web developer',
        img:'C:/Users/12106/OneDrive/Desktop/Coffee website/img/pic-3.png ',
        text:' fosadlknasldn alskdnlaknsd asldknalksnd alskdn  sada asdasdffffffffff  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat molestiae accusantium magni a esse accusamus tenetur sint non perspiciatis laboriosam! dfssdfffffasdasddddddddddasdas dsad asd dsawe csaasdlkjna sdlkansdlka sdlaknsdla sdlnasdlknsldn sdlnflknsd flnsdlfn skdfnlkn'
    }
]


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
 item = reviews[currentItem];   
 img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 info.textContent = item.text;
})

function showPerson(){
 item = reviews[currentItem]   
 img.src = item.img;
 author.textContent = item.name;
 job.textContent = item.job;
 info.textContent = item.text;
}

// next btn

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
    showPerson();
})

// prev btn

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson();
})

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
  