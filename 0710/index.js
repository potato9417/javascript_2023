// 쿠키 순서 및 파일명 : 배열
var cookie_image_files = [
    'chocolate_chip',
    'german_chocolate',
    'triple_chocolate',
    'lemonade',
    'Mexican_Hot_Chocolate',
    'molasses_crinkle',
    'Oatmeal_Golden_Raisin',
    'Oatmeal_Chocolate_Chip',
    'Peanut_Butter',
    'Peanut_Butter_Cup',
    'white_choc_macedamia',
    'Root_Beer_Float',
    'Snickerdoodle',
    'Sugar'
];

var cookie_text = [
    "A classic cookie made with real butter, white and brown sugars, and tons of of high quality chocolate chips. We don't skimp on the chips!",

    "This is a German chocolate based cookie, with tons of caramely coconut and whole pecans. No need to travel to Germany for an authentic German Chocolate cookie!",

    "Especially for chocolate lovers. Triple chocolate means lots of melted chocolate, very little flour, Hershey's cocoa powder, and plenty of chocolate chips, making this cookie extremely rich. Crackly top and soft in the middle - chocolate heaven!",

    "A summer inspired cookie, made with lemonade concentrate, fresh lemon juice, and pure lemon extract. The flavor of lemonade is all throughout this soft pound cake-like cookie and it is delicious! Yummy lemon icing and yellow sparkly sprinkles decorate the top.",

    "This is one of our most unique cookies for people who like a little spicy heat. This cookie is flavored with chocolate cocoa powder and rolled in a mixture of cinnamon, chili powder and cayenne pepper - a delicious flavor combination. We dare you to try it!",

    "This recipe is from April's grandmother Alice, of Pinehurst, NC. A tried and true cookie that is hard to find these days. Made with brown sugar, molasses, and an incredible mix of spices including cinnamon, ginger and cloves. These cookies are chewy, dense and old-fashionably good.",

    "These cookies are like a bowl of oatmeal to go. We use old fashioned rolled oats for a more dense cookie, butter and brown sugar, Madagascar vanilla, a touch of kosher salt, and our special twist - locally produced honey and plump golden raisins.",

    "So many people requested this cookie we just had to bake it for you! Oatmeal chocolate chip is a dense chewy cookie filled with oats and our special twist: white AND dark chocolate chips. A sprinkle of sea salt on top before it is baked really makes your taste buds pop!",

    "Lots of peanut butter go in to these cookies, and of course they have the essential fork criss crosses on top.",

    "This is our awesome flavor created for all you peanut butter & chocolate lovers out there. You are going to love this! A chewy chocolate cookie stuffed with big chunks of peanut butter cups, swirled with more peanut butter and a whole peanut butter cup sunk right in the middle. Heaven!",

    "This rich, chewy cookie is one that customers demanded year after year. However, we didn't want to add it to the line up until it was perfect (and until bulk macadamias came down in price!). In every bite you will enjoy the contrast of crunchy, salty macadamia nuts and smooth, creamy white chocolate chips. Cookie paradise!",

    "The People love root beer so why not a root beer cookie? This is a soft, chewy cookie. Root beer extract is in the cookie and in the icing on the top. One bite and you will swear you are sipping on a creamy root beer float.",

    "You may remember these from when you were a kid - a crinkly topped sugar cookie rolled in cinnamon-sugar. Great with coffee or tea.",

    "A good old fashioned cookie, simple but heavenly. Choose plain sugar cookies or sugar cookies decorated with white icing and rainbow sprinkles. Great for kids of all ages."

];

var cookie_price = [
    1500,
    2000,
    3000,
    1500,
    1500,
    1500,
    2000,
    2000,
    1500,
    2000,
    1500,
    2000,
    1500,
    2500
];

// 반복문 돌려 안의 내용을 html에 적용
let cookieSlide = document.querySelector(".carousel-inner");
let cookieIndicator = document.querySelector(".carousel-indicators");
let order_board = document.querySelector("#order_board");
let priceBox = document.querySelectorAll(".priceBox input")
let sumBox = document.querySelectorAll(".sumBox input")
let quanNum = document.querySelectorAll(".quanBox input").values


for (i = 0; i < cookie_price.length; i++) {

    // 첫번째 쿠키는 active클래스를 넣어 carousel을 활성화 하게 함
    if (i == 0) {
        // innerHTML += : 기존의 값에 새로운 값을 추가
        cookieSlide.innerHTML +=
            `
            <div class="carousel-item active">
                <img src="./images/${cookie_image_files[i]}.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>${cookie_image_files[i]}</h5>
                <p class="sum">${cookie_text[i]}</p>
                <p class="price">${cookie_price[i]}원</p>
                </div>
            </div>
            `
        cookieIndicator.innerHTML +=
            `
            <button type="button" data-bs-target="#carouselContainer" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i + 1}"></button>
            `
    }
    else {
        cookieSlide.innerHTML +=
            `
            <div class="carousel-item">
                <img src="./images/${cookie_image_files[i]}.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>${cookie_image_files[i]}</h5>
                <p class="sum">${cookie_text[i]}</p>
                <p class="price">${cookie_price[i]}원</p>
                </div>
            </div>
            `
        cookieIndicator.innerHTML +=
            `
            <button type="button" data-bs-target="#carouselContainer" data-bs-slide-to="${i}" class="" aria-current="true" aria-label="Slide ${i + 1}"></button>
            `
    }
    order_board.innerHTML +=
        `
        <tr>
            <td width="200">
                <input type='text' id='name${i}' class="form-control" name='name${i}' readonly value='${cookie_image_files[i]}'>
            </td>
            <td width="100" class="priceBox">
                <input type='number' id='price${i}' class="form-control" name='price${i}' pattern='(d{3})' readonly min='0' 
                        value='${cookie_price[i]}'>
            </td>
            <td width="100" class="quanBox">
                <input type='number' class="form-control" min='0' id='quantity${i}' name='quantity${i}' value='0'>
            </td>
            <td width="100" class="sumBox">
                <input type='number' class="form-control" min='0' id='sum${i}' name='sum${i}' value='0' readonly>
            </td>
        </tr>
        `

    // console.log(i)


}