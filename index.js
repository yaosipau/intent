$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
$(function () {
  var len = $('.slick-dots li button').length;
  for (var i = 0; i < len; i++){
     $('.slick-dots li button')[i].style.backgroundImage = "url(pic/"+(i+1)+".jpg)";   
  };
});      
$(function () {
  $('.button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var value = $(this).attr("data-filter");
    console.log(value);
    if (value == "all"){
      $('.filter').show("1000");
    }
    else {
      $('.filter').not("."+value).hide("1000");
      $('.filter').filter("."+value).show("1000");
    }
  })
});
