(function(){
     
     const clockElem = document.querySelector("#view-clock>h1");
    //현재시간을 알아오기
    function getTime(){
        const date = new Date();
        const hours = date.getHours(); //시
        const minutes = date.getMinutes();//분
        const seconds = date.getSeconds();//초 
        console.log (hours+"/"+minutes+"/"+seconds);
        //화면 출력 함수 호출
        setViewClock(hours,minutes,seconds);
    }


    function setViewClock(h,m,s){
        // let strS = s;
        // if( s < 10 ){
        //     strS = "0"+s;
        //삼항연산자 
        let strH = `${h<10 ? `0${h}` : h}`;
        let strM = `${m<10 ? `0${m}` : m}`;
        let strS = `${s<10 ? `0${s}` : s}`;
        clockElem.innerText = `${strH} : ${strM} : ${strS}`;
        }
       
        //         clockElem.innerText = `${h} : ${m} : ${s}`            
        // }
        // clockElem.innerText = `${h} : ${m} : ${s}`;
    
    getTime();
    setInterval(getTime, 1000);
})();