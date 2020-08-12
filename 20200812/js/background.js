(function(){
    const bodyElem = document.querySelector("body");
    function getRandom(){
        let number = Math.floor(Math.random()*5);
        return number+1;
    }
    bodyElem.style.backgroundImage = "url('images/"+getRandom()+".jpg')";
})();