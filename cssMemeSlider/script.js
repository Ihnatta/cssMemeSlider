let offset = 0;
const slider_about = document.querySelector('.slider-line');
document.querySelector('.btn.own').addEventListener('click',function(){
  offset = 0;
  if( offset > 960){offset = 0;}
  slider_about.style.left = -offset + 'px';
})
document.querySelector('.btn.two').addEventListener('click',function(){
  offset = 605;
  
  if( offset > 960){offset = 0;}
  slider_about.style.left = -offset + 'px';
})
document.querySelector('.btn.three').addEventListener('click',function(){
  offset = 1210;
  //if( offset < 0){offset = 965;}
  slider_about.style.left = -offset + 'px';
})
document.querySelector('.btn.four').addEventListener('click',function(){
    offset = 1815;
    //if( offset < 0){offset = 965;}
    slider_about.style.left = -offset + 'px';
  })
