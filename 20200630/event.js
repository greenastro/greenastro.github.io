//작은이미지 클릭시 배너이미 변경되는 작업//
let imgIdx = 0;
let smallTag = document.querySelector(".small");
let bannerTag = document.querySelector(".banner");
let captionTag = document.querySelector(".caption");
// console.log(smallTag);
smallTag.addEventListener("click",function(e){
  let imgTag = e.target;


  smallTag.onclick= change();
  function change(){
      smallTag.setAttribute("src","images/2.jpg");)
  }

  
//스몰이미지 클릭시 배너이미지의 슬라이드번호 변경하게 만들기//
  imgIdx = Number(imgTag.getAttribute("value"));
  bannerTag.children[0].textContent = (imgIdx+1)+"/6";
  let src = imgTag.getAttribute("src");
  
//   console.log(src);
  bannerTag.style.backgroundImage=`url(${src})`;


//캡션 이름 변경//
// let captionTag = document.querySelector(".caption");
let text = imgTag.getAttribute("alt");

captionTag.textContent = imgTag.getAttribute("alt");
captionTag.textContent = text;

});



//배너 사진 좌우버튼//

// let prevTag = document.querySelector(".prev");
let nextTag = document.querySelector(".next");

let preTag= document.querySelector(".prev");
// console.log(nextTag);
//버튼을 눌러 다음 이미지가 나오도록 하기위해 인덱스 번호를 이용
// let imgIdx= 0;

//클릭시 동작 이벤트 등록

// nextTag.addEventListener("click",function(e){
//     if(imgIdx<6) {
//         imgIdx++;
// }
// });

// preTag.addEventListener("click",function(e){
//     if(imgIdx>0){
//         imgIdx--;
//     }
// });

nextTag.addEventListener("click",function(e){
  slideImage(1);

});

preTag.addEventListener("click",function(e){
    slideImage(0);

});



// let arrName=['0','1','2','3','4','5'];

//함수로 하나 뺴기
function slideImage(btn)
{
    if(btn){
        // console.log("next button click");
        //next button click
        if(imgIdx>4) return;
        imgIdx++;
        
    }
    else{
        // console.log("pre button click");
        //pre button click
        if(imgIdx<1) return;
        imgIdx--;
       
    }
    //
    let imgName = smallTag.children[imgIdx].getAttribute("src");
    // console.log(imgName);
    // let src ="images/"+imgName[imgIdx]+".jpg";
    bannerTag.style.backgroundImage=`url(${imgName})`; 
    //images/img_blue.jpg 이미지명을 배열로 가져와서 하나씩 변경하기
    captionTag.textContent= smallTag.children[imgIdx].getAttribute("alt");
    bannerTag.children[0].textContent =`${imgIdx+1}/6`;
}
