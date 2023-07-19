// 슬라이드이미지 넣기
let slides = document.querySelectorAll("ul li");

// console.log(slides);
for(slide of slides){
    // console.log(slide.getAttribute("id"));
    let slideId = slide.getAttribute("id");

    slide.innerHTML =
    `
        <img src="./images/${slideId}.jpg">
    `
}

