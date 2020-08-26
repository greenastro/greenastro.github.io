(function () {
    //움직여줘야하는 stage를 객체로 가져옴
    const stageElem = document.querySelector("#stage");
    const containerElem = document.querySelector("#container");
    let maxScrollHeight = 0;
    let mousePos = { x: 0, y: 0 };
    let preClickMenu = 0; //전에 뭘 클릭했는지 기억하기 위한 변수
    let clickMenu = 0;

    //window resize
    function onWindowResize() {
        maxScrollHeight = document.body.offsetHeight - window.innerHeight;
    }
    window.addEventListener("resize", onWindowResize);

    // menu click event
    const liElem = document.querySelectorAll(".sub-menu>li");
    // console.log( liElem );
    for (let i = 0; i < liElem.length; i++) {
        liElem[i].addEventListener("click", function () {
            //alert("menu index="+i); // 몇번째를 클릭했는지 창이 뜨도록
            liElem[preClickMenu].classList.remove("on");
            liElem[i].classList.add("on");
            preClickMenu = i;
        });

        // menu click event:  change color
        const spElem = document.querySelectorAll(".sub-menu li>span");

        for (let i = 0; i < spElem.length; i++) {
            spElem[i].addEventListener("click", function () {
                spElem[clickMenu].classList.remove("on");
                spElem[i].classList.add("on");
                clickMenu = i;
            });
        }
        
    }
    //side 클릭시 스크롤 이동


    //window scroll event
    function onStageScroll() {
        // console.log("pageYOffset");
        const scrollPer = pageYOffset / maxScrollHeight; //(document.body.offsetHeight - window.innerHeight);
        const zMove = scrollPer * 990 - 500;

        // 이렇게 또는 아래처럼 stageElem.style.transform = "translateZ("+()+"vw)";
        stageElem.style.transform = `translateZ(${zMove}vw)`;
    }

    window.addEventListener("scroll", onStageScroll);
   

    onWindowResize();

    //window mousemove event
    function onMouseMove(e) {
        //top:0,   left:0 --->(0,0)
        //화면의 정 가운데가 (0,0)이 되도록
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        // console.log(mousePos.x, mousePos.y);

        containerElem.style.transform = `rotateX(${
            mousePos.x * 6
        }deg) rotateY(${mousePos.y * 6}deg)`;
    }

    window.addEventListener("mousemove", onMouseMove);


})();
