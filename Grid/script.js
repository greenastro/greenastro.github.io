(function(){
    const mainMenuElem = document.querySelector(".main-menu");
    const gnbElem = document.querySelector('.gnb');
    const barElem = document.querySelector('.btnMenu');
    const showElem = document.querySelector(".container");
    

    // 네비게이션 바를 클릭하면 이벤트//
    gnbElem.addEventListener("click", function(e){
        // console.log( e. target );
        let target = e.target;
        let index = target.getAttribute("value");
        // console.log(typeof (index));찍어보면 index값타입이 string임.
        //우리는 숫자가 필요하므로
        index = parseInt(index);
        // console.log(typeof(index));
        if( index>=0 || index<=2 ){
            //메인메뉴가 회전되면서 안보이게
            mainMenuElem.classList.add("on");
            //barMenu  보이게
            barElem.style.display="block";
            //container를 rotate (처리전에 위에서 객체 가져올것)
             showElem.classList.remove("show");

             console.log(showElem.children);
             for( let item of showElem.children){
                item.classList.remove("item");
             }
             showElem.children[index].classList.add("item");
        }
    });

        
    //container에서 해당 이미지 보이기
    // 
    //  for( let item of showElem.children){
    //      item.classList.remove("item");
    //      showElem.children[index].classList.add("item");



    barElem.addEventListener("click", function(){
            barElem.style.display="none";                                                                                                
           mainMenuElem.classList.remove("on");
        //bar 를 클릭했을때 showElem을 다시 추가 시겨줘야함//
        showElem.classList.add("show");
    
    });
    
})();
