
function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".sendBtn");

    sendBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(name.value === "" || email.value === "" || msg.value === ""){
            emptyError();
        }
        else{
            sendMail(name.value, email.value, msg.value);
            success();
            setTimeout(function(){
                document.getElementById("myForm").reset();
            }, 5000)
            
        }


    });
}

validate();

function sendMail(name, email, msg){
    emailjs.send("service_t6t2ogv","template_tyzpk0s",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}


function emptyError(){
    swal({
        title: "Oh no...",
        text: "Fields can't be empty",
        icon: "error",
        button: "OK",
      });
}


function success(){
    swal({
        title: "Email sent successfully!",
        text: "We try to reply within 24 hours",
        icon: "success",
        button: "OK",
      });
}