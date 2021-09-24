$(function(){
    $('.teamcontainerslider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 500,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
        ]
    });
    $('.publicationscontainerslider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 500,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: true,
              }
            }
        ]
    });
    $('.partnerscontainerslider').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: true,
              }
            }
        ]
    });
});
function testJump(x){
    var ml = ~~x.getAttribute('maxlength');
    if(ml && x.value.length >= ml){
        do{
            x = x.nextSibling;
        }
        while(x && !(/text/.test(x.type)));
        if(x && /text/.test(x.type)){
            x.focus();
        }
    }
}
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}