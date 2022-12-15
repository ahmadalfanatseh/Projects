let namee = document.querySelector(".name");
let emaill = document.querySelector(".email");
let phonee = document.querySelector(".phone");
let ph = document.getElementById("myPhone");
let textt = document.querySelector(".textt");
let submt = document.querySelector(".submt");

let textmsg = document.querySelector(".p-contact-khawi");
let textName = document.querySelector(".contact-khawi .nam");
let textEmail = document.querySelector(".contact-khawi .eml");
let textPhone = document.querySelector(".contact-khawi .phon");
let textMsgg = document.querySelector(".contact-khawi .mssg");

let erroMsg = document.querySelector(".p-contact-ivalid");
let erroEmail = document.querySelector(".contact-ivalid .emmml");
let erroPhone = document.querySelector(".contact-ivalid .phonnne");


var form = document.querySelector(".right");


submt.onclick = function(){
    var ind =0;

    if((namee.value=="")||(emaill.value=="")||(ph.value==undefined)||(textt.value=="")){
        textmsg.style.cssText="display: block";
    }else{
        textmsg.style.cssText="display: none";
    }

    if(namee.value==""){
        textName.style.cssText="display: block";
        namee.classList.add("error");
    }else{
        textName.style.cssText="display: none";
        namee.classList.remove("error");
        ind++;
    }
    if(emaill.value==""){
        textEmail.style.cssText="display: block";
        emaill.classList.add("error");
    }else{
        textEmail.style.cssText="display: none";
        emaill.classList.remove("error");
        ind++;
    }
    if(ph.value==""){
        textPhone.style.cssText="display: block";
        ph.classList.add("error");
    }else{
        textPhone.style.cssText="display: none";
        ph.classList.remove("error");
        ind++;
    }
    if(textt.value==""){
        textMsgg.style.cssText="display: block";
        textt.classList.add("error");
    }else{
        textMsgg.style.cssText="display: none";
        textt.classList.remove("error");
        ind++;
    }


    if((!validateEmail(emaill.value)) && (emaill.value!=="")){
        erroMsg.style.cssText="display: block";
        erroEmail.style.cssText="display: block";
        emaill.classList.add("error");
    }else{
        erroMsg.style.cssText="display: none";
        erroEmail.style.cssText="display: none";
        ind++;
        // emaill.classList.remove("error");
    }

    
    if((!validatePhoneNumber(ph.value)) && (ph.value!=="")){// && (phonee.value!==undefined)
        erroMsg.style.cssText="display: block";
        erroPhone.style.cssText="display: block";
        ph.classList.add("error");
    }else{
        erroMsg.style.cssText="display: none";
        erroPhone.style.cssText="display: none";
        ind++;
        // ph.classList.remove("error");
    }
    console.log(ind);
    if(ind==6){
        console.log("Succefuly");
    }else{
        function handleForm(event) { event.preventDefault(); } 
        form.addEventListener('submit', handleForm);
    }
}

function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
}

function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input_str);
    // return true;
}

// let Body = "Name : " + document.querySelector(".name").value +
//             "<br>Email : " + document.querySelector(".eml").value +
//             "<br>Phone : " + document.querySelector("#myPhone").value +
//             "<br>Text Msg : " + document.querySelector(".textt").value;
