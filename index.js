var typed = new Typed('.auto', {
    strings: ['WELCOME TO DIOTAL MARKET',
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    startDelay: 1000,
    loop: true
})
// =================== MENU COSTUMIZATION=====================
var menuContentsDisplay = document.getElementById('menu-icon');
var menuContentBox = document.getElementById('menu-link-box');
menuContentBox.innerHTML = ''
menuContentsDisplay.addEventListener('click', (e) => {
    e.preventDefault()
    if (menuContentBox.innerHTML == '') {
        menuContentsDisplay.innerHTML = '<i class="bi bi-x-lg"></i>'
        menuContentBox.innerHTML = `
          <div class="link-list">
                            <a href=""><i class="bi bi-houses-fill"></i> Home</a>
                            <a href=""><i class="bi bi-exclamation-octagon-fill"></i> About Us</a>
                            <a href=""><i class="bi bi-coin"></i> Refer & Earn</a>
                            <a href="product.html"><i class="bi bi-basket-fill"></i> Shop</a>
                            <a href=""><i class="bi bi-person-add"></i> Sign In</a>
                            <a href=""><i class="bi bi-question-circle-fill"></i> FAQs</a>
                        </div>`
    } else {
        menuContentBox.innerHTML = ''
        menuContentsDisplay.innerHTML = '<i class="bi bi-three-dots"></i>'
    }
})

// ============================================PRODUCT CATEGORY UPDATES
var slide_img = document.querySelector('.slide-image');
var sliderImage = document.querySelector('.slider')
var naviButton = document.querySelectorAll('#navigation-buttons span')

const cartBasket = document.getElementById('cartEl');

cartBasket.addEventListener('click', () => {
    location.replace('product.html')
})

slide_img.addEventListener('click', () => {
    location.replace('product.html')
})
naviButton.forEach(icon => {
    icon.addEventListener('click', () => {
        sliderImage.scrollLeft += icon.id === 'left' ? -400 : 400;
    })
})

//  =========================== ======================= CHECK INFO FILL

var checkAboutOne = document.getElementById("check-about-one");
var checkAboutTwo = document.getElementById("check-about-two");
var checkAboutThree = document.getElementById("check-about-three");
var checkAboutFour = document.getElementById("check-about-four");
var checkAboutFive = document.getElementById("check-about-five");


var differentImages = document.getElementById('img-diff').innerHTML='<img width="500" src="./image/chiken burger.jpg" alt="sample">'

document.getElementById('search-check').innerHTML = ''
document.getElementById('person-check').innerHTML = ''
document.getElementById('arrow-check').innerHTML = ''
document.getElementById('globe-check').innerHTML = ''
document.getElementById('badge-check').innerHTML = ''




checkAboutOne.addEventListener('mouseover', () => {
    document.getElementById('search-check').innerHTML = `Search and filter from hundreds of products and supplier offerings to find
                            the matching ones
                            for
                            your needs`
     document.getElementById('img-diff').innerHTML='<img width="500" src="./image/chiken burger.jpg" alt="sample">'
})
checkAboutOne.addEventListener('mouseleave', () => {
    document.getElementById('search-check').innerHTML = ''
})

checkAboutTwo.addEventListener('mouseover', () => {
    document.getElementById('person-check').innerHTML = `Evaluate product quality and supplier capabilities easily and efficiently
                            through verified
                            inspections and digital sourcing tools.`
         document.getElementById('img-diff').innerHTML=' <img src="./image/burgar.jpg" alt="burger">'
})
checkAboutTwo.addEventListener('mouseleave', () => {
    document.getElementById('person-check').innerHTML = ''
})

checkAboutThree.addEventListener('mouseover', () => {
    document.getElementById('arrow-check').innerHTML = `Pay for your order via our secure payment methods, including flexible payment terms.`
         document.getElementById('img-diff').innerHTML='<img src="./image/electronics.jpg" alt="">'
})
checkAboutThree.addEventListener('mouseleave', () => {
    document.getElementById('arrow-check').innerHTML = ''
})

checkAboutFour.addEventListener('mouseover', () => {
    document.getElementById('globe-check').innerHTML = `Get your logistics needs fulfilled with customized solutions at the
                            diotal.com Logistics
                            Marketplace, with real-time tracking across all 10 regions,
                            powered by diotal.com Logistics.`
         document.getElementById('img-diff').innerHTML='<img src="./image/clothings.jpg" alt="">'
})
checkAboutFour.addEventListener('mouseleave', () => {
    document.getElementById('globe-check').innerHTML = ''
})

checkAboutFive.addEventListener('mouseover', () => {
    document.getElementById('badge-check').innerHTML = `Check order status, manage suppliers, track payments, and contact after-sales support all via My diotal.`
            var differentImages = document.getElementById('img-diff').innerHTML=' <img src="./image/laptop.jpg" alt="">'
           
})
checkAboutFive.addEventListener('mouseleave', () => {
   document.getElementById('badge-check').innerHTML = ''
})
