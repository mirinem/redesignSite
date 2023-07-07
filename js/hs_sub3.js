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
            }else {
                // $("header").removeClass('down');
                $("header").addClass('up'); 
            } 
            prevScrollTop = nowScrollTop; 

            if(nowScrollTop > 400){
                $("header").addClass("down")
            }else{
                $("header").removeClass("down")
                $("header").removeClass('up');
            }
      
        });
      
    })

    // (pc) 상단 메뉴바 언어영역 애니메이션
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


    // (pc) 스크롤 시 이미지 크기 변화 - overflow: hidden을 이용하여 너비변화

    // $(window).scroll(function(){
    //     let imgHeight = $(window).scrollTop();
    //     console.log(imgHeight);

    //     let y = (5/6000)*imgHeight + (-3000/6000);

    //     $('.middleS_img>img').css('opacity',y);
       
    //     let z = (-1/6)*imgHeight + (1200/6);

    //     if(imgHeight>=1200 && imgHeight<=1800){
    //         $('.blank_door3').css('transform',`translateX(0%)`);
    //     }else{
    //         $('.blank_door3').css('transform',`translateX(`+z+`%)`);            
    //     }

    // })

    let middleTop = $(".middleS_img").offset().top
    let middleHeight = $(".middleS_img").height()
    let devHeight = $(window).height()/2  //화면의 반 높이부터 시작하게

    let purpose = 30 //스크롤 내릴때 너비 60%->90% 까지의 값
    $(window).scroll(function(){
        let winst = $(window).scrollTop();
        let transRatio = ((winst+devHeight-middleTop)/middleHeight)*purpose;
        if(winst+devHeight>=middleTop && winst+devHeight<middleTop+middleHeight){
            // console.log("애니메이션이 지정되는 구간")    
            $(".middleS_img").css("width",60+transRatio+"%")

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
            }else {               
                $("header.mo").addClass('up'); 
                $("input#btnMoMenu+label").addClass("up")
            } 
            prevScrollTop2 = nowScrollTop2; 

            if(nowScrollTop2 > 300){
                $("header.mo").addClass("down")
                $("input#btnMoMenu+label").addClass("down")
            }else{
                $("header.mo").removeClass("down")
                $("header.mo").removeClass('up');
                $("input#btnMoMenu+label").removeClass("down")
            }
      
        });
      
    })
    

    // 내용 나타나기
    
    $(window).scroll(function(){
        let winst = $(window).scrollTop() 
        let winHeight = $(window).height()*0.4 // 브라우저화면의 높이를 계산

        $(".mltr,.mrtl,.downup,.blind").each(function(){
            if(winst+winHeight>$(this).offset().top){
                $(this).addClass("on")
            }
        })

    })



    // (모바일) 스크롤 시 이미지 크기 변화
    $(window).scroll(function(){
        let imgst = $(window).scrollTop() 
        let imgHeight = $(window).height()*0.4 
        // console.log(imgst)

        $(".mo_middleS_img").each(function(){
            if(imgst+imgHeight>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

    })

    // top 버튼 
    $(".F_scroll").click(function(e){   
        
        e.preventDefault()
        $("html,body").stop().animate({scrollTop:0},2000)       
    })

})