(function(){

    const KEY_USERNAME="username";
    const userContainer = document.querySelector("#view-user");

    //form에서  submit 이벤트가 발생되었을 떄 실행되는 함수
    function handlerSubmit(e){
        e.preventDefault();
        const inputElem = this.querySelector("input");
        const value = inputElem.value;
        localStorage.setItem(KEY_USERNAME,value);
        printSpan(value);
    }


    function printInput(){
        //form
        const addForm = document.createElement("form");
        addForm.addEventListener("submit",handlerSubmit);
        //input
        const addInput = document.createElement("input");
  
        addInput.type = "text";
        addInput.placeholder = "your name here";
        
        //element추가
        addForm.appendChild(addInput);
        userContainer.appendChild( addForm);

        
    }
    function printSpan(text){
        //인사말 나오고 위에 input은 안보이게
        userContainer.innerHTML="";
        // 내가 입력한 데이터 span으로 출력
        //1.span 요소를 생성해서 usercontainer 객체에 넣어 준다.
        const textElem = document.createElement("span");
        textElem.innerText = `안녕! ${text}`;
        textElem.className = "printSpan"
        userContainer.appendChild(textElem);
      

    }

    function loadUserName(){
        const currentName = localStorage.getItem(KEY_USERNAME);
        if(currentName === null ){
            //이때는 사용자 정보가 없음. 그래서 input이 보이게함.
            printInput();
        }
        else{
            //저장된 사용자가 있음.
            //span으로 사용자 이름을 보여줌
            printSpan(currentName);
        }
    }
    loadUserName();
})();