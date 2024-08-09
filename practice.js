
 var b=10;

 b=40;


function fun1(a){
  console.log("a==1>",a);
a=30;
console.log("a==2>",a);
return a

}
fun1();
// console.log(a);


function checkEven(){
  let a =document.getElementById("number").value;
  if(!a) return alert("Please enter value")
 if(a%2===0){
  return alert("Number is even");
 }else{
  return alert('Number is odd');
 }
}

let userData=[{name:"sachin",email:"sachin@gmail.com",otp:5643},{name:"Lucky",email:"lucky@gmail.com",otp:2233}];
let email=""
function checkEmail(){
  let email2=document.getElementById('email').value;
  if(!email2) return alert("Please enter your email id");
  let check=userData.find((ele)=>ele.email==email2);
  if(check){
    alert("Successfully send otp")
    email=check.email;
    document.getElementById('email').style.display="none";    
    document.getElementById('otp').style.display="block";
    document.getElementById('login').style.display="none";
    document.getElementById("Verify").style.display="block";
  }else{
    return alert("Email id is not registered")
  }
}

function verifyOtp(){
  let otp=document.getElementById('otp').value;
  if(!otp) return alert("Please enter your otp");
  let checkotp=userData.find((ele)=>ele.email==email&&ele.otp==otp);
  if(checkotp){
  alert("Successfully login");
   window.location.assign("https://www.skillyards.com/")
  }else{
    return alert("Otp is not verify");
  }
}



