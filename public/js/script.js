var menu = document.getElementById('bar').addEventListener('click', showMenuBar);
var item  = document.getElementById('item');
let form = document.getElementById("form");
var button = document.getElementById("button");
var inputmsg = document.querySelector(".input_text");

const sendEmail = (e) => {
  e.preventDefault();
  
  
 
  var iname = document.getElementById("name");
  var email = document.getElementById("email");
  var phone_no = document.getElementById("phone_no");
  var post_code = document.getElementById("post_code");
  var social_media = document.getElementById("social_media");
  var message = document.getElementById("message");

  let formData = {
    name: iname.value,
    email: email.value,
    phone_no: phone_no.value,
    post_code: post_code.value,
    social_media: social_media.value,
    subject: "ZaraFitAngel Contact Form Enquiry",
    message: message.value,
  };
  if (
    formData.name === "" ||
    formData.email === "" ||
    formData.message === ""
  ) {
    inputmsg.innerHTML = `<p class="errorText"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Please fill in the required fields</p>`;

    setTimeout(() => {
      inputmsg.innerHTML = "";
    }, 3000);
  } else {
    button.innerHTML = `  <div class="loader"> </div>`
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://server-acb4sssn3-art101-ui.vercel.app/sendmail");
    xhr.setRequestHeader("content-type", "application/json");
    
    xhr.send(JSON.stringify(formData));
     console.log('ok');
     
      xhr.onload = function() {
       
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
          



button.textContent = `Send Message`



          inputmsg.innerHTML = `<p class="successText"><i class="fa fa-check" aria-hidden="true"></i> Message sent successfully</p>`;
          setTimeout(() => {
            inputmsg.innerHTML = "";
          }, 3000);
          const inputs = document.querySelectorAll(
            "#name, #email, #phone_no, #post_code, #social_media, #message"
          );
          inputs.forEach((input) => {
            input.value = "";
          });
        } else {
          
          button.textContent = `Send Message`
          inputmsg.innerHTML = `<p class="errorText"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Something went wrong, try again</p>`;
          setTimeout(() => {
            inputmsg.innerHTML = "";
          }, 3000);

        }
      };

      
  
  }

 
}

button.addEventListener("click", sendEmail);

item.style.right = "-300px"
function showMenuBar(e) {
    if(item.style.right == "-300px"){

        item.style.right = "0";
    }else{
        item.style.right = "-300px";
    }

    e.preventDefault();
}

