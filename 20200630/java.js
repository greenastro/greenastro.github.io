let container = document. querySelector("#wrapper");
console.log(container);

let preTarget = null;
container.addEventListener("click", function(e){
    // console.log(this);
    // console.log(e.currentTarget);
    // console.log(e.target);
    let target =e.target;
    // 부모요소를 선택되지 않게..
    if(target == this ){
        return;

    }
    if(preTarget !== null ){
    preTarget.classList.remove("newBorder");
    }
    preTarget = target;
    // target.style.border = "3px solid red";
    target.classList.toggle("newBorder");
});
