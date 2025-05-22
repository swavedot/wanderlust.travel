document.getElementById('this_year').textContent = new Date().getFullYear()

// scrollreveal
const ScrollRevealOption = {
  distance : "50px", //요소가 50px 아래서 원위치로
  origin : "bottom", // 방향 = 아래쪽
  duration : 1000, // 속도 ms(1초)
  reset : false
}

// header 
ScrollReveal().reveal('.header__container h1', {
  ...ScrollRevealOption,
});
ScrollReveal().reveal('.header__form', {
  ...ScrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal('.card', {
  ...ScrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal('.card1', {
  ...ScrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal('.card2', {
  ...ScrollRevealOption,
  delay: 800, 
});
ScrollReveal().reveal('.card3', {
  ...ScrollRevealOption,
  delay: 1100,
});
ScrollReveal().reveal('.card4', {
  ...ScrollRevealOption,
  delay: 1400,
});
ScrollReveal().reveal('.card5', {
  ...ScrollRevealOption,
  delay: 1700,
});
ScrollReveal().reveal('.card6', {
  ...ScrollRevealOption,
  delay: 2000,
});

document.addEventListener("DOMContentLoaded" , function () {
  document.querySelectorAll('.section__container').forEach((section) => {
    const $slider = $(section).find('.slider');

  $slider.slick({
    slidesToShow: 3, //화면에 보여질 요소의 개수
    slidesToScroll: 1, //이동개수
    arrows : false, //화살표 안보이기
    dots : false, //점 안보이기
    autoplay : true,
    autoplaySpeed : 3000, 
    infinite: false, // 슬라이드가 처음과 끝에 멈춤

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  //외부 버튼으로 컨트롤
  const prevBtn = section.querySelector('.slider-prev')
  const nextBtn = section.querySelector('.slider-next')

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      $slider.slick('slickPrev')
    });
    nextBtn.addEventListener('click', () => {
      $slider.slick('slickNext')
    });
  }
});
});


