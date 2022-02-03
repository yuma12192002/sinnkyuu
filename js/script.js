
$('.slick01').slick({
    autoplay: true, 
    dots: false,
    autoplay:true,
    slidesToShow:1,
    arrows:false
  });

const slideConts = document.querySelectorAll('.slideConts'); 
const slideContsRect = [];
const slideContsTop = []; 
let windowY = window.pageYOffset; 
let windowH = window.innerHeight;
const remainder = 100;
for (let i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (let i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
window.addEventListener('DOMContentLoaded', function () {
  windowY = window.pageYOffset;
  for (let i = 0; i < slideConts.length; i++) {
    if(windowY > slideContsTop[i] - windowH + remainder) {
      slideConts[i].classList.add('show');
    } else {
      slideConts[i].classList.remove('show');
    }
  }
});