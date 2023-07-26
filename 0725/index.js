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

submitBtn.addEventListener("click",()=>{

    let regexId = /[a-zA-Z]{1}\w{7,19}/;
    let regexPw = /(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,20}/;
    let regexName = /[가-힣]{2,4}/;
    let regexEmail = /[a-zA-Z0-9_+.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,4}/;
    let regexPhone = /(\d{3}).*(\d{3}).*(\d{4})/;

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