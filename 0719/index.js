let slides = document.querySelectorAll("ul li");
let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");

// 슬라이드이미지 넣기
for(slide of slides){
    // console.log(slide.getAttribute("id"));
    let slideId = slide.getAttribute("id");

    slide.innerHTML =
    `
        <img src="./images/${slideId}.jpg">
    `
}

btnPrev.addEventListener("click",()=>{
    console.log("click-prev");
})

btnNext.addEventListener("click",()=>{
    console.log("click-next");
})
