var slides = document.querySelectorAll('#slider .slide');
var currentSlide = 0;
var radioSlide = document.querySelectorAll('.radioSlide');
console.log(slides);
var slideInterval = setInterval(goToSlide, 10000);

radioSlide[0].onclick = function goToSlide(){
    console.log(radioSlide);
    slides[currentSlide].className="slide";
    slides[0].className="slide showing";
    currentSlide=0;
}
radioSlide[1].onclick = function goToSlide(){
    console.log(radioSlide);
    slides[currentSlide].className="slide";
    slides[1].className="slide showing";
    currentSlide=1;
}

    
/*function nextSlide() {
    goToSlide(currentSlide+1);
}
function previousSlide(){
    goToSlide(currentSlide-1);
}*/
function goToSlide() {
    slides[currentSlide].className='slide';
    currentSlide =(currentSlide+1)%slides.length;
    slides[currentSlide].className='slide showing'
    radioSlide[currentSlide].setAttribute('checked', "true")

}


/*var next = document.getElementById('slide1');
var previous = document.getElementById('slide2');
*/
/*next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};*/