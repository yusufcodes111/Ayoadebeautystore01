let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    // searchForm.classList.remove('active');
    // cartItem.classList.remove('active');  
}

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
// }


// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () =>{
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

window.onscroll = () =>{
    navbar.classList.remove('active');
    // searchForm.classList.remove('active');
    // cartItem.classList.remove('active');
}


const slides = document.querySelectorAll(".slide")

var counter = 0;

// console.log(slides)
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    if (counter != 0) {
    counter--;
    slideImage();
    }
};

const goNext = () => {
    if (counter < slides.length - 1) {
    counter++;
    slideImage();
    }
};

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
    
}