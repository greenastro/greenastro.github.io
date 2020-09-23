(function(){
    //1. 로컬스토리지에 데이터가 유무를 확인
    const KEY_TODOS = "todos";
    //2. submit  이벤트를 일으킬 객체를 가져옴
    const formElem = document.querySelector("#view-todoList>form");
    //3. input에 있는 객체를 가져와야함
    const inputElem = document.querySelector("#view-todoList>form>input"); 
    //4.ul 자식에 리스트 추가 하기 위해 객체가져옴
    const ulElem = document.querySelector(".todo_list");
    let toDos = [];

    function onDelBtnClick(e){
        const target = e.target;
        const list = target.parentElement;
        const ul = list.parentElement;
        const liID = parseInt(list.id);
        ul.removeChild(list);
        // console.log(list);
        //toDos 배열에 있는 목록을 제외하는 작업
     toDos.filter(function(todo){
        return todo.key !== liID 
     });
    //  console.log(toDos);
     stringToDo();
    }
    function saveToDo(text){
        const obj = {
            key: toDos.length+1,
            value : text
        }
    
        toDos.push(obj);
        //문자열화
        const strToDo = JSON.stringify(toDos);
        localStorage.setItem( KEY_TODOS, strToDo);
        stringToDo();

    }

    // 목록 만들기
    function addToDoList(text){
    
        //1.list에 대한 객체//
        const list = document.createElement("li");
        list.className -"todo"
        list.id = "toDos.length+1"
        //x표시나는 span
        const delBtn = document.createElement("span");
        delBtn.innerHTML = "X";
        //엑스 스판 클릭시 이벤트 발생
        delBtn.addEventListener("click",onDelBtnClick);


        //text가 표시되는 span
        const label = document.createElement("span");
        label.innerHTML = text;
        //list 에 자식 객체 추가
        list.appendChild(delBtn);
        list.appendChild(label);
        ulElem.appendChild(list);
        //스토리지에 TODO리스트 저장
        saveToDo(text);

    }
    function onSubmit(e){
        e.preventDefault();
        let listValue = inputElem.Value;
        // console.log(listValue);
        //list value값이 없을때 공백이 삽입 되지 않도록
        if( listValue !== ""){
            addToDoList(listValue);
            inputElem.value ="";
        }
        addToDoList(listValue);
        inputElem.value="";
        
    }

    function loadToDos(){
        const todoList = localStorage.getItem(KEY_TODOS);
        if(todoList !== null ){
             //todolist 있음_목록을 보여줌

             const temp = JSON.parse(todoList);
            //  console.log(temp);
             temp.forEach(function(todo){
                 addToDoList(todo.value);
             });
    }

        formElem.addEventListener("submit",onSubmit);
       
    }
    loadToDos();
})();