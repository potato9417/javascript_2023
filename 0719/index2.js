let slide = document.querySelector("ul");
let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");
let slides = [];

// 슬라이드이미지 넣는 함수
function putImg(){
    for(i=0;i<5;i++){
        slides.push(i+1);
        slide.innerHTML +=
        `   
            <li id = ${slides[i]}>
                <img src="./images/${slides[i]}.jpg">
            </li>
        `
    }
}

// 웹실행시 이미지 나열하기
putImg();

// 이전버튼 클릭시
btnPrev.addEventListener("click",()=>{ 
    slide.innerHTML="";
    let item = slides[0];
    slides.shift(); // 베열의 첫번째값 제거
    slides.push(item) // 배열 끝에 값 추가

    console.log("이전버튼 클릭 "+slides)

    putImg()
})

// 다음버튼 클릭시
btnNext.addEventListener("click",()=>{
    slide.innerHTML="";
    let item = slides[slides.length-1];
    slides.pop(); // 배열 마지막값 제거
    slides.unshift(item) // 배열 맨앞에 값 추가
    
    console.log("다음버튼 클릭 "+slides)

    putImg()
})
