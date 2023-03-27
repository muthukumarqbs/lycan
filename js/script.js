
$(document).on('click', "#topScroll", function(){
     $('html,body').animate({
         scrollTop:0
     },1000);
});

$(document).on('click','#Imgprev', function(){
    $('.pogoSlider-dir-btn--prev').trigger('click');
});
$(document).on('click','#Imgnext', function(){
    $('.pogoSlider-dir-btn--next').trigger('click');
});

$('.special-slider').slick({
    infinite:true,
    slidesToShow:3,
    slidesToSlide:1,
    autoplay:true,
    autoSpeed:1000,
    dots:false,
    responsive:[
        {
            breakpoint:1100,
            settings:{
                slidesToShow:2
            }
        },
        {
            breakpoint:992,
            settings:{
                slidesToShow:2
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:1
            }
        }
    ]
});
$('.events-slider').slick({
    infinite:true,
    slidesToShow:4,
    slidesToSlide:1,
    autoplay:true,
    autoSpeed:1000,
    dots:false,
    responsive:[
        {
            breakpoint:1100,
            settings:{
                slidesToShow:2
            }
        },
        {
            breakpoint:992,
            settings:{
                slidesToShow:2
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:1
            }
        }
    ]
});

window.addEventListener('scroll', function(event){
    var x = window.scrollY;
    if(x >= 60){
        $('#topScroll').fadeIn()
    }
    else if( x < 60){
        $('#topScroll').fadeOut();
    }
});



$('.readmore').each(function(){
    if($(this).text().length > $(this).attr('data-read')){
        var para = $(this).text();
       var firstPara = para.substr(0,$(this).attr('data-read'));
       var lastPara = para.substr($(this).attr('data-read'), para.length);
       var newPara = `${firstPara}<span class="read-para">${lastPara}</span> <a type="button" class="text-danger readmore-btn">read more</a>`;
       $(this).html(newPara);
    }
});
$('.readList').each(function(){
   if($(this).children('li').length > $(this).attr('data-read')){
 
       var firstList = "";
       for(var i=0; i< $(this).attr('data-read'); i++){
           firstList +=`${$(this).children('li').eq(i).prop('outerHTML')}`;
       }
       var nextList = "";
       for(var i=$(this).attr('data-read'); i< $(this).children('li').length; i++){
           nextList +=`${$(this).children('li').eq(i).prop('outerHTML')}`;
       }
       var newList = `${firstList}<span class="read-para">${nextList}</span> <a type="button" class="text-danger readmore-btn">read more</a>`;
       $(this).html(newList);
   }
});
$('.readpara').each(function(){
    if($(this).children('p').length > $(this).attr('data-length')){

        var vPara = "";
        for(var i=1; i< $(this).attr('data-length'); i++){
            vPara +=`${$(this).children('p').eq(i).prop('outerHTML')}`;
        }
        var hPara = "";
        for(var i=$(this).attr('data-length'); i< $(this).children('p').length; i++){
            hPara +=`${$(this).children('p').eq(i).prop('outerHTML')}`;
        }
        var vhpara = `${vPara}<div class="read-para">${hPara}</div> <a type="button" class="btn btn-danger readmore-btn">read more</a> `;
        $(this).html(vhpara);
    }
 });
 
 $(document).on('click', '.readmore-btn', function(){
    $(this).text($(this).text() == 'read more' ? 'read less' : 'read more');
    $(this).siblings('.read-para').slideToggle(0);
 });

 $(document).on('click', '.faq-btn', function(){
    var currentOpener = $('.faq-box.active');
    if(!$(this).parents('.faq-box').hasClass('active')){
        $(this).parents('.faq-box').addClass('active');
        $(this).children('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
        $(currentOpener).removeClass('active');
        $(currentOpener).children('.faq-btn').children('i').addClass('fa-angle-down').removeClass('fa-angle-up');
    }
});

function banner(){
    var blinkIndex = 0;
    let allbg = document.querySelectorAll('.banImg');
    setInterval(() => {
        document.querySelector('.banImg.active').classList.remove('active');
        if (blinkIndex >= allbg.length-1) {
            blinkIndex = 0;
            allbg[blinkIndex].classList.add('active');        
        } else {
            blinkIndex++;
            allbg[blinkIndex].classList.add('active');
        }
    }, 3000);
}