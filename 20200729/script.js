
(function(){
    //메뉴바 고정시킬 위치 확인 위해 객체가져오기//
    const navElem= document.querySelector("nav");
    let yHeight = navElem.offsetTop;
    //위와 같이 바깥으로 뺼경우 아래처럼 사용해도 상관없음)
    // let yHeight = navElem.getBoundingClientRect().top;

    let topElem= document.querySelector(".btn");
    //
    // function fnMenuBarFix(){
    //     let posY = navElem.getBoundingClientRect().top;
    //     if( posY <= 0 ){
    //         navElem.classList.add("sticky");
    //     }
    //     else{
    //         navElem.classList.remove("sticky");
    //     }
    // }
    // function btntop(){

    // } 

    function offsetFixMenu(){
        
        // console.log( yHeight );
        if(window.pageYOffset >= yHeight){
            navElem.classList.add("sticky");               
        }
        else{
            navElem.classList.remove("sticky");
        }
    }

    //top버튼 
    
    function topBtnView(){
       let scrollY = document.documentElement.scrollTop;
        // if(window.pageYOffset > 30){   << 이렇게 쓰거나 아래처럼 쓰거나 같은 효과
            if(scrollY > 30){
            topElem.style.display = "block";
        }
        else{
            topElem.style.display = "none"
        }
    }

    window.addEventListener("scroll",function(){
        offsetFixMenu();
        topBtnView();
    
    });

//버튼 클릭 이벤트 함수 만들기
function btnClick_topMove(){
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
     document.documentElement.scrollTop=0;
}


//탑버튼을 클릭시 탑으로 이동하도록 
topElem.addEventListener("click",btnClick_topMove); 


})();

