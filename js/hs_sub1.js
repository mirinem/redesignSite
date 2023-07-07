$(document).ready(function(){


    //화면스크롤 부드럽게 이동
    const body = new Scrooth({ 
        acceleration:2.0,       
        strength:18,
        deceleration:0.94
      });
      
          
    // (pc) 상단 메뉴바 스크롤 시 변화
    $(function(){

        
        let prevScrollTop = 0;
      
        document.addEventListener("scroll", function(){            
            let nowScrollTop = $(window).scrollTop();

            if (nowScrollTop > prevScrollTop){
                // $("header").addClass('down');
                $("header").removeClass('up');  
                $(".his_subGnb").removeClass('up'); 
            }else {
                // $("header").removeClass('down');
                $("header").addClass('up'); 
                $(".his_subGnb").addClass('up'); 
            } 
            prevScrollTop = nowScrollTop; 

            if(nowScrollTop>500){
                $("header").addClass("down")
                $(".his_subGnb").addClass("top"); 
            }else{
                $("header").removeClass("down")
                $("header").removeClass('up');
                $(".his_subGnb").removeClass("down")
                $(".his_subGnb").removeClass('up');
                // $(".his_subGnb").removeClass("top"); 
            }
      

        });
      
    })

    // 상단 메뉴바 언어영역 애니메이션
    let btnOpen = document.querySelector(".lagIcon")
    let lagState = false
    btnOpen.addEventListener("click",function(){
        if(lagState == false){
            document.querySelector(".languageFloat").classList.add("show")
            lagState = true
        }else{
            document.querySelector(".languageFloat").classList.remove("show")
            lagState = false
        }
        
    })

    // (모바일) 버튼 클릭시 메뉴바 열리게
    let moMenuState = false;
    $("#btnMoMenu").click(function(){

        
        if(moMenuState==false){
            // 메뉴가 현재 닫혀있는 상태 -> 여는기능
            $("#btnMoMenu").addClass("closed")
            $("nav.moMenu").addClass("show")
            moMenuState =true
        }else{
            // 메뉴가 현재 열려있는 상태 -> 닫는기능
            $("#btnMoMenu").removeClass("closed")
            $("nav.moMenu").removeClass("show")
            moMenuState =false
        }

        
        
    })


    // (모바일) 메뉴바 리스트 클릭
    $(".mobileMenuList>li").click(function(){

        if($(this).hasClass("on")==true){
            $(this).css("height","46px")
            $(this).removeClass("on")
        }else{
            $(".mobileMenuList>li").css("height","46px")
            $(".mobileMenuList>li").removeClass("on")
            let li2depth = $(this).children("ul").children().length
            $(this).css("height", ((li2depth)*40+46+28)+"px")
            // ui여백(28px)+li>a높이(46px) 다 다르기 때문에 더해줘야한다. 이전 참고한 방식은 다 같은 높이였으므로 1을 더한것이다.
            $(this).addClass("on")
        }

    })

    $(".mobileMenuList ul").click(function(){
        return false
    })
    

    // (모바일) 상단 메뉴바 스크롤 시 변화
    $(function(){

        
        let prevScrollTop2 = 0;
      
        document.addEventListener("scroll", function(){            
            let nowScrollTop2 = $(window).scrollTop();

            if (nowScrollTop2 > prevScrollTop2){               
                $("header.mo").removeClass('up');  
                $("input#btnMoMenu+label").removeClass("up")
                $(".his_subGnb").removeClass("up")
            }else {               
                $("header.mo").addClass('up'); 
                $("input#btnMoMenu+label").addClass("up")
                $(".his_subGnb").addClass("up")
            } 
            prevScrollTop2 = nowScrollTop2; 

            if(nowScrollTop2 > 100){
                $("header.mo").addClass("down")
                $("input#btnMoMenu+label").addClass("down")
                $(".his_subGnb").addClass("down")
            }else{
                $("header.mo").removeClass("down")
                $("header.mo").removeClass('up');
                $("input#btnMoMenu+label").removeClass("down")
                $(".his_subGnb").removeClass("up")
                $(".his_subGnb").removeClass("down")
            }
      
        });
      
    })
    

    // (pc) 연도 이동 메뉴바
   
    $(".his_subGnb>ul>li>a").click(function(e){

        e.preventDefault() 

        let target = $(this).attr("href")
        
        let target_top = $(target).offset().top
        
        moveScroll({top:target_top,speed:1500})
    })


    function moveScroll(option){
        $("html,body").stop().animate({scrollTop:option.top},option.speed)
    }



    // 연혁 팝업창 
    $(".btn1985").click(function(e){

        e.preventDefault() 
        $(".popup-history").addClass("show")
    })

    $(".btnPopupClose").click(function(e){

        e.preventDefault() 
        $(".popup-history").removeClass("show")
    })


    // 내용 나타나기
    $("ul>li>dl").each(function(){
        $(this).addClass("blind")        
    })
    $(".moHis>div").each(function(){
        $(this).addClass("blind")        
    })


    $(window).scroll(function(){
        let winst = $(window).scrollTop() 
        let winHeight = $(window).height()*0.4 // 브라우저화면의 높이를 계산

        $(".mltr,.mrtl,.downup,.blind").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }
        })

    })


    // top 버튼 
    $(".F_scroll").click(function(e){   
        
        e.preventDefault()
        $("html,body").stop().animate({scrollTop:0},2000)       
    })

})