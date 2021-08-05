var slideIndex = 1; // Đây là biến toàn cục

showSlide(slideIndex);

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function nextSlide(n) {
  showSlide((slideIndex += n));
}

function previousSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  // biến n lúc này là slideIndex chưa được xử lý (có thể nhận giá trị âm , giá trị lớn hơn slide.length)
  var i;
  var slide = document.getElementsByClassName("slide-item");
  var dot = document.getElementsByClassName("dot");
  console.log('slideIndex trc khi xu li: '+ slideIndex);
  if (n > slide.length) {
    slideIndex = 1;
  }
  else
  if (n < 1) {
    slideIndex = slide.length;
  }
  if(slideIndex<1){
    slideIndex = slide.length;
  }
  else if (slideIndex > slide.length){
    slideIndex = 1;
  }
  console.log('slideIndex sau khi: '+slideIndex);
  console.log('slide.length = '+slide.length);
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }
  slide[slideIndex-1].style.display = "block";
  dot[slideIndex-1].classList.add("active");

  setTimeout(showSlide,4000,slideIndex++);
}
