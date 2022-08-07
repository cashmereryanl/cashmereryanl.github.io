const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');

const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');

const header = document.querySelector('.header.container');

const brand = document.querySelector('.header .nav-bar .brand a h1');

const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () =>{
    var scroll_pos = window.scrollY;

    if(scroll_pos > 250){
        header.style.backgroundImage = 'linear-gradient(8deg, white 0%, rgb(118, 162, 194) 100%)';
        // header.style.transition = '0.5s ease '+ header.style.backgroundImage;
    } else{
        header.style.backgroundImage = 'none';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
    
});

// document.addEventListener('resize', ()=>{
//     var screen_size = window.screenX;
//     if(screen_size < 786){
//        brand.style.display = 'contents';
//     }
// });
// mobile_menu.addEventListener('click', () =>{
//     hamburger.classList.toggle('active');
// });
