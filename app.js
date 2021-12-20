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


// delete item 

document.getElementById('cart-item').addEventListener('click', function(e){
    if (e.target.classList.contains('fa-times')){
        e.target.parentElement.remove();
        document.querySelector('.ul').remove();
    }
});

// add to checkout

document.getElementById('cart-item').addEventListener('click', function(e){

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
})


document.getElementById('add-list').addEventListener('click', function(e){
    if (e.target.classList.contains('fa-window-close')){
        document.querySelector('.list').remove();
    }
})