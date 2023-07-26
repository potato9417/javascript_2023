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

let idResult = document.querySelector("#id_box .result");

let num =1;
let userInfo = [];

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

// 취소버튼 클릭시 모든 입력값 제거
resetBtn.addEventListener("click",resetInfo())

// 가입버튼 클릭시 값 확인하는 정규식
submitBtn.addEventListener("click",()=>{

    // 입력값을 확인하는 정규식
    let regexId = /[a-zA-Z]{1}\w{7,19}/;
    let regexPw = /(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,20}/;
    let regexName = /[가-힣]{2,4}/;
    let regexEmail = /[a-zA-Z0-9_+.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}/;
    let regexPhone = /(\d{3}).*(\d{3}).*(\d{4})/;

    // 정규식.test(확인할값) => 결과값 : true/false
    if(regexId.test(id.value) == false){
       console.log("아이디를 올바르게 입력해주세요");
    }
    else {
        if(regexPw.test(pw.value) == false){
            console.log("비밀번호를 올바르게 입력해주세요");
        }
        else {
            if(regexName.test(userName.value) == false){
                console.log("한글 이름을 올바르게 입력해주세요");
            }
            else {
                if(regexEmail.test(email.value) == false){
                    console.log("이메일을 올바르게 입력해주세요");
                }
                else {
                    if(regexPhone.test(phone.value) == false){
                        console.log("핸드폰번호를 올바르게 입력해주세요")
                    }
                    else {
                        console.log("가입완료되었습니다");
                        num+1;
                        userInfo = {
                            "key":num,
                            "id":id.value,
                            "pw":pw.value,
                            "userName":userName.value,
                            "email":email.value,
                            "phone":phone.value,
                        }
                        console.log(userInfo)
                        resetInfo()
                    }
                }

            }

        }

    }
})


// input입력 후 이벤트 처리
id.onblur =()=>{ // .onblur => 포커스가 없어졌을때 이벤트발생
    let regexId = /[a-zA-Z]{1}\w{7,19}/;
    // [a-zA-Z]{1} : 앞글자는 영대소문자로 시작해야한다는 정규식
    // \w : 영대소문자 & 숫자 & 밑줄문자 => [A-z0-9__]와 같은 뜻 
    // {7,19} : 8~20자리 글자
    // 앞글자는 영대소문자로 시작하는 8~20자리의 글자
    
    if(regexId.test(id.value) == false){
        console.log("아이디를 올바르게 입력해주세요");

        idResult.innerText = "아이디를 올바르게 입력해주세요";
        idResult.style.color = "#f00";

    }
    else {
        idResult.style.color = "#999";
        idResult.innerText = "아이디를 입력하셨습니다";
    }
}