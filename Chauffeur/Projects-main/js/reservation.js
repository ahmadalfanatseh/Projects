const prevBtns = document.querySelectorAll(".btnn-prev");
const nextBtns = document.querySelectorAll(".btnn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

/*******Input********/
//1
let userName = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

//2
let passengers = document.getElementById('passengers');
let typeService = document.getElementById('type-service');
//3
let dob = document.getElementById('dob');
let time = document.getElementById('time');

/***************/
var indx= 0;
var IndxEmail = 0;
var IndxPhone = 0;
var IndxPassenger=0;


 nextBtns[0].addEventListener("click", () => {
    //1
    if( (userName.value=="") ){
      document.querySelector(".usernameP").style.cssText="display:block !important";
    }else{
      document.querySelector(".usernameP").style.cssText="display:none !important";
    }
    if( (email.value=="") ){
      document.querySelector(".emailP").style.cssText="display:block !important";
    }else{
      document.querySelector(".emailP").style.cssText="display:none !important";
    }
    if( (phone.value=="") ){
      document.querySelector(".phoneP").style.cssText="display:block !important";
    }else{
      document.querySelector(".phoneP").style.cssText="display:none !important";
    }
    if((!validateEmail(email.value))&& (email.value!=="")){
      document.querySelector(".emailP2").style.cssText="display:block !important";
      IndxEmail=0;
    }else{
      document.querySelector(".emailP2").style.cssText="display:none !important";
      IndxEmail=1;
    }
    if((!validatePhoneNumber(phone.value)) && (phone.value!=="")){
      document.querySelector(".phoneP2").style.cssText="display:block !important";
      IndxPhone=0;
    }else{
      document.querySelector(".phoneP2").style.cssText="display:none !important";
      IndxPhone=1;
    }
    if( (userName.value!=="") && (email.value !=="") && (phone.value!=="")){
      indx=1;
    }
    if( (formStepsNum==0) && (indx==1) && (IndxEmail==1) && (IndxPhone==1) ){//hena nedir chart lihowa input dakhelin nichan - kol safha nedirlha var taha w khas twslh bach tefor
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    }
  });
  nextBtns[1].addEventListener("click", () => {
    //2
    if( (passengers.value=="") ){
      document.querySelector(".passengersP").style.cssText="display:block !important";
    }else{
      document.querySelector(".passengersP").style.cssText="display:none !important";
    }   
    if((passengers.value<0)||(passengers.value>8)) {
      document.querySelector(".passengersP2").style.cssText="display:block !important";
      IndxPassenger=0;
    } else {
      document.querySelector(".passengersP2").style.cssText="display:none !important";
      IndxPassenger=1;
      
    }
    if( (typeService.value=="") ){
      document.querySelector(".serviceP").style.cssText="display:block !important";
    }else{
      document.querySelector(".serviceP").style.cssText="display:none !important";
    }
    if( (passengers.value!=="") && (typeService.value !=="") ){ 
      indx=2;
    }
    if( (formStepsNum==1) && (indx==2) && (IndxPassenger==1) ){
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    }
  });

  nextBtns[2].addEventListener("click", () => {

    let dateNow = Date.now();
    let date = new Date(dob.value).getTime();
    let deffrentHouer = (date- dateNow)/1000/60;
    //3
    if(dob.value==""){
      document.querySelector(".dateP").style.cssText="display:block !important";
    }else{
      document.querySelector(".dateP").style.cssText="display:none !important";
    }
    console.log(dob.value)
    if((deffrentHouer>12)){
      document.querySelector(".dateP2").style.cssText="display:none !important";
      IndxDate = 1;
    }else if(deffrentHouer<12){
      document.querySelector(".dateP2").style.cssText="display:block !important";
      IndxDate = 0;
    }else{
      document.querySelector(".dateP").style.cssText="display:block !important";
      document.querySelector(".dateP2").style.cssText="display:none !important";
    }
    if(time.value==""){
      document.querySelector(".timeP").style.cssText="display:block !important";
    }else{
      document.querySelector(".timeP").style.cssText="display:none !important";
    }
    if( (dob.value!=="") && (time.value !=="") && (IndxDate==1)){ 
      indx=3;
    }
    if( (formStepsNum==2) && (indx==3) ){
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    }
    
  });



prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });
  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
      document.querySelector('.subm').style.cssText="background-color:red";//,opacity:0.5+noclick
    }
  });
  const progressActive = document.querySelectorAll(".progress-step-active");
  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}



//////////// validation Email -- Phone
function validateEmail(email) {
  let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return res.test(email);
}
function validatePhoneNumber(input_str) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(input_str);
}