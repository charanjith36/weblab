let user={
    username:"",
    mail:"",
    mobile:"",
    password:""
};
const username=document.querySelector("#username");
const pwd=document.querySelector("#password");
const cnfpwd=document.querySelector("#confirm-password");
const mail=document.querySelector("#email");
const mobile=document.querySelector("#mobile");
const submit=document.querySelector("#submit");
const form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(username.value&& pwd.value&&mail.value&&mobile.value){
        user.username=username.value;
        user.mail=mail.value;
        user.mobile=mobile.value;
        user.password=pwd.value;
        console.log(user);
        if(pwd.value.trim().length>=8){
            if(pwd.value===cnfpwd.value){
                console.log("valid password");
        }
        else{
            console.log("password not match");
            }
    }}
})