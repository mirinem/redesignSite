$(document).ready(function(){

    // 지속가능경영이념 슬라이드
    $(window).scroll(function(){
        let height = $(window).scrollTop();
        console.log(height);

        let y1 = (-1/300)*height + (3100/300);
        let y2 = (-1/300)*height + (4200/300);
        $('.imgbox').eq(0).css('opacity',y1);
        $('.imgbox').eq(1).css('opacity',y2);

        let z1 = (-1/3000)*height + (5800/3000); 
        let z2 = (-1/3000)*height + (6900/3000);        
        
        if(height>=2800 && height<=3100){
            $('.imgbox').eq(0).css('transform',`scale(${z1})`);
        }else{
            $('.imgbox').eq(0).css('transform',`scale(1)`);
            if(height>=3900 && height<=4200){
                $('.imgbox').eq(1).css('transform',`scale(${z2})`);
            }else{
                $('.imgbox').eq(1).css('transform',`scale(1)`); 
            }
        }

    })

    // 내용 나타나기
    $(".flotxt3>ul>li").each(function(){
            $(this).addClass("downup")        
    })
    

    $(window).scroll(function(){
        let winst = $(window).scrollTop() 
        let winHeight = $(window).height()*0.5 // 브라우저화면의 높이를 계산

        $(".mltr,.mrtl,.downup,.blind").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }
        })

    })



})