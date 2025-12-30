let slideIndex = 0;
let slideTimer;

showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  clearTimeout(slideTimer);
  if (slideIndex === 1) {
    const video = document.getElementById("slideVideo");
    let videoDuration = video.duration;
    if (isNaN(videoDuration) || videoDuration === Infinity) videoDuration = 6;
    slideTimer = setTimeout(showSlides, videoDuration * 1000);
  } else {
    slideTimer = setTimeout(showSlides, 5000);
  }
}

const dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    manualSlide(i + 1);
  });
}

function manualSlide(n) {
  clearTimeout(slideTimer);
  slideIndex = n - 1;
  showSlides();
}
