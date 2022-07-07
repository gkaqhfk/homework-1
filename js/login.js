document.querySelector("#login_btn").addEventListener("click",()=>{
    const id = "gkaqhfk";
    const password = "1234";
    var input_id = document.querySelector('#id').value;
    var input_pw = document.querySelector('#password').value;

    if(input_id == id){
        if(input_pw == password){
            alert("환영합니다.");

    }
    else if(input_pw == ""){
        alert("비밀번호를 입력해주세요. ");

    }
    else{
        alert(" 비밀번호를 잘못 입력하셨습니다.");

    }
    }
else if (input_id == "" ){
    if(input_pw == "")
        alert("아이디와 비밀번호를 입력해주세요.");
    else
        alert("아이디를 입력해주세요.");
}
else if(input_id != id){
    if(input_pw == "")
        alert("비밀번호를 입력해주세요");
    else
        alert("아이디 또는 비밀번호를 잘못입력하셧습니다.");

}
});