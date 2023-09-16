let offset = 0;
var text = document.querySelector(".text");
const slider_about = document.querySelector('.slider-line');
document.querySelector('.btn.own').addEventListener('click',function(){
  offset = 0;
  slider_about.style.left = -offset + 'px';
  document.querySelector(".btn_slider.own").classList.add('open');
  document.querySelector(".btn_slider.two").classList.remove('open');
  document.querySelector(".btn_slider.three").classList.remove('open');
  document.querySelector(".btn_slider.four").classList.remove('open');
  text.innerHTML = 'Я не сумасшедшая — просто моя реальность отличается от твоей.';
})
document.querySelector('.btn.two').addEventListener('click',function(){
  offset = 605;
  slider_about.style.left = -offset + 'px';
  document.querySelector(".btn_slider.own").classList.remove('open');
  document.querySelector(".btn_slider.two").classList.add('open');
  document.querySelector(".btn_slider.three").classList.remove('open');
  document.querySelector(".btn_slider.four").classList.remove('open');
  text.innerHTML = 'Я видала такую чепуху, по сравнению с которой эта чепуха — толковый словарь'
})
document.querySelector('.btn.three').addEventListener('click',function(){
  offset = 1210;
  slider_about.style.left = -offset + 'px';
  document.querySelector(".btn_slider.own").classList.remove('open');
  document.querySelector(".btn_slider.two").classList.remove('open');
  document.querySelector(".btn_slider.three").classList.add('open');
  document.querySelector(".btn_slider.four").classList.remove('open');
  text.innerHTML ='Ничего, выживем. В крайнем случае из ума.'
})
document.querySelector('.btn.four').addEventListener('click',function(){
    offset = 1815;
    slider_about.style.left = -offset + 'px';
    document.querySelector(".btn_slider.own").classList.remove('open');
    document.querySelector(".btn_slider.two").classList.remove('open');
    document.querySelector(".btn_slider.three").classList.remove('open');
    document.querySelector(".btn_slider.four").classList.add('open');
    text.innerHTML ='Мечты должны быть либо безумными, либо нереальными. Иначе — это планы на завтра.';
  })
