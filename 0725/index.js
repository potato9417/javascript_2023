let id = document.querySelector("#id");
let pw = document.querySelector("#pw");
let userName = document.querySelector("#name");
// let gender = document.querySelector("#");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let zip = document.querySelector("#zip");
let address1 = document.querySelector("#address1");
let address2 = document.querySelector("#address2");
let birth = document.querySelector("#birth");
let submitBtn = document.querySelector("#submit");
let resetBtn = document.querySelector("#reset");
let submitBox = document.querySelector("#submit_box");
let addressSearchBox = document.getElementById("address_search")


// 라디오의 체크된 값 불러오기
let genderVal;
let genderValArr = document.querySelectorAll('#gender_box .form_box input');
let genderValNum = 0;


// 입력값에 따른 결과 값
let idResult = document.querySelector("#id_box .result");
let pwResult = document.querySelector("#pw_box .result");
let nameResult = document.querySelector("#name_box .result");
let emailResult = document.querySelector("#email_box .result");
let phoneResult = document.querySelector("#phone_box .result");

// 결과 값 노출
let num =1;
let userInfo = [];
let pushInfo={};

// 결과값에 따른 boolean
let idIsError = true;
let pwIsError = true;
let nameIsError = true;
let genderIsError = true;
let emailIsError = true;
let phoneIsError = true;

// 정규식
const regexId = /^[a-zA-Z]{1}\w{7,19}$/;
const regexPw = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,20}$/;
const regexName = /^[가-힣]{2,50}$/;
const regexEmail = /^[a-zA-Z0-9_+.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}$/;
const regexPhone = /^(\d{3}).*(\d{4}).*(\d{4})$/;

// 리셋
function resetInfo(){
    id.value = "";
    pw.value = "";
    userName.value = "";
    email.value = "";
    phone.value = "";
    zip.value = "";
    address1.value = "";
    address2.value = "";
    birth.value = "";
}


// 정보 추출
function submitInfo(){
    num+1;
    pushInfo = {
        "key":num,
        "id":id.value,
        "pw":pw.value,
        "userName":userName.value,
        "gender":genderVal,
        "email":email.value,
        "phone":phone.value,
    }
    
    userInfo.push(pushInfo)
    console.log(pushInfo)
    resetInfo();
}


// 입력값 확인 함수화
function chekcedError(category, categoryKor){
    if(regexId.test(category.value) == false){
        console.log(`${categoryKor}를 올바르게 입력해주세요`);

        idResult.innerText = `${categoryKor}를 올바르게 입력해주세요`;
        idResult.style.color = "#f00";
        id.style.backgroundColor="#ffe4e4";
    }
    else {
        idResult.style.color = "#999";
        idResult.innerText = `${categoryKor}를 입력하셨습니다`;
        idIsError = false;
    }
}

// 취소버튼 클릭시 모든 입력값 제거
resetBtn.addEventListener("click",resetInfo())

// // 가입버튼 클릭시 값 확인하는 정규식
// submitBtn.addEventListener("click",()=>{

//     // 정규식.test(확인할값) => 결과값 : true/false
//     if(regexId.test(id.value) == false){
//        console.log("아이디를 올바르게 입력해주세요");
//     }
//     else {
//         if(regexPw.test(pw.value) == false){
//             console.log("비밀번호를 올바르게 입력해주세요");
//         }
//         else {
//             if(regexName.test(userName.value) == false){
//                 console.log("한글 이름을 올바르게 입력해주세요");
//             }
//             else {
//                 if(regexEmail.test(email.value) == false){
//                     console.log("이메일을 올바르게 입력해주세요");
//                 }
//                 else {
//                     if(regexPhone.test(phone.value) == false){
//                         console.log("핸드폰번호를 올바르게 입력해주세요")
//                     }
//                     else {
//                         console.log("가입완료되었습니다");
//                         num+1;
//                         userInfo = {
//                             "key":num,
//                             "id":id.value,
//                             "pw":pw.value,
//                             "userName":userName.value,
//                             "email":email.value,
//                             "phone":phone.value,
//                         }
//                         console.log(userInfo)
//                         resetInfo()
//                     }
//                 }

//             }

//         }

//     }
// })


// input입력 후 이벤트 처리
id.onblur =()=>{ // .onblur => 포커스가 없어졌을때 이벤트발생
    
    if(regexId.test(id.value) == false){
        console.log("아이디를 올바르게 입력해주세요");

        idResult.innerText = "아이디를 올바르게 입력해주세요";
        idResult.style.color = "#f00";

    }
    else {
        idResult.style.color = "#999";
        idResult.innerText = "아이디를 입력하셨습니다";
        idIsError = false;
    }
}


pw.onblur =()=>{ // .onblur => 포커스가 없어졌을때 이벤트발생
    
    if(regexPw.test(pw.value) == false){
        console.log("비밀번호를 올바르게 입력해주세요");

        pwResult.innerText = "비밀번호를 올바르게 입력해주세요";
        pwResult.style.color = "#f00";

    }
    else {
        pwResult.style.color = "#999";
        pwResult.innerText = "비밀번호를 입력하셨습니다";
        pwIsError = false;
    }
}

userName.onblur =()=>{ // .onblur => 포커스가 없어졌을때 이벤트발생
    
    if(regexName.test(userName.value) == false){
        console.log("이름을 올바르게 입력해주세요");

        nameResult.innerText = "이름을 올바르게 입력해주세요";
        nameResult.style.color = "#f00";

    }
    else {
        nameResult.style.color = "#999";
        nameResult.innerText = "이름을 입력하셨습니다";
        nameIsError = false;
    }
}

email.onblur =()=>{ // .onblur => 포커스가 없어졌을때 이벤트발생
    
    if(regexEmail.test(email.value) == false){
        console.log("이메일을 올바르게 입력해주세요");

        emailResult.innerText = "이메일을 올바르게 입력해주세요";
        emailResult.style.color = "#f00";

    }
    else {
        emailResult.style.color = "#999";
        emailResult.innerText = "이메일을 입력하셨습니다";
        emailIsError = false;
    }
}

phone.onblur =()=>{ // .onblur => 포커스가 없어졌을때 이벤트발생
    
    if(regexPhone.test(phone.value) == false){
        console.log("번호를 올바르게 입력해주세요");

        phoneResult.innerText = "번호를 올바르게 입력해주세요";
        phoneResult.style.color = "#f00";

    }
    else {
        phoneResult.style.color = "#999";
        phoneResult.innerText = "번호를 입력하셨습니다";
        phoneIsError = false;
    }
}


for(i=0;i<genderValArr.length;i++){
    genderValArr[i].addEventListener("click",function(){
        // console.log(this.checked +"hihi")
        // console.log(this.value);
        
        genderVal = this.value
        if(this.checked){
            genderIsError = false
        }
        
    })
    
}


function addsSearchBtn(){
    console.log("click")
    new daum.Postcode({
        oncomplete: function(data) {
            //data는 사용자가 선택한 주소 정보를 담고 있는 객체이며, 상세 설명은 아래 목록에서 확인하실 수 있습니다.

            let zoncodeAddr = data.zonecode // 우편번호
            let roadAddr = data.roadAddress; // 도로명 주소 변수

        }
    })
}
    






// 가입버튼클릭시 (click 이벤트발생시)
// submitBtn.addEventListener("click",()=>{
//     // button 클릭시 새로고침 현상발생
//     // button의 type을 submit이 아닌 button으로 변경하거나
//     // button을 감싸고 있는 부모 태그를 form이 아닌 div로 변경
//     // => submit으로 백단으로 보내야 하므로 두번째 방법 사용
//     // https://devhoma.tistory.com/90

//     if( regexId.test(id.value),
//         regexPw.test(pw.value),
//         regexName.test(userName.value),
//         regexEmail.test(email.value),
//         regexPhone.test(phone.value) == false) {

//         console.log("값을 다시 입력해주세요");
//         errorBlock(idIsError);
//         resetInfo();
//     }
//     else {
//         submitInfo();
//     }
// });
    
// 가입버튼 클릭시 (submit 이벤트 발생시)
submitBox.addEventListener("submit",(e)=>{
    // button 클릭시 새로고침 현상발생
    // 1) button의 type을 submit이 아닌 button으로 변경
    // 2) button을 감싸고 있는 부모 태그를 form이 아닌 div로 변경
    // 3) e.preventDefault(); 사용
    // https://devhoma.tistory.com/90
    e.preventDefault();
    console.log(idIsError+" "+pwIsError+" "+nameIsError+" "+emailIsError+" "+phoneIsError+" "+genderIsError)
    if(idIsError, pwIsError, nameIsError, emailIsError, phoneIsError, genderIsError == false) {
        
        submitInfo();
    }
    else {
        console.log("값을 다시 입력해주세요");
    }


    // submitInfo();
});
    


