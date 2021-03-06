function ajaxRequest(e,t,n,a){let s=new XMLHttpRequest;s.open(e,t,!0),"POST"==e&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){if(4==s.readyState&&200==s.status){let e=s.responseText;a(e)}},s.send(n)}
document.addEventListener("DOMContentLoaded", function(){

    
    // Check for submission
    const urlParams = new URLSearchParams(window.location.search);
    const submissionParam = urlParams.get('submission');
    if(submissionParam){
        window.location.href = '#contact-form';
        formSuccess();
        toaster("Thanks, we've recieved your message and will be in touch!", 4500)
    }

    // How can we help section
    var helpItems = document.querySelectorAll(".what-section__item");
    var hideBtn = 0;
    for(var i=0;i<helpItems.length;i++){
        helpItems[i].addEventListener("click", function(e){

            if(hideBtn){
                clearTimeout(hideBtn);
                hideBtn = 0;
            }

            var contactBtn = document.querySelector(".contact-btn");
            contactBtn.style.opacity = "1";
            contactBtn.style.top = e.pageY + 10 +"px";
            contactBtn.style.left =  e.pageX + 10 +"px";

            hideBtn = setTimeout(function(){
                contactBtn.style.opacity = "0";
                setTimeout(function(){
                    contactBtn.style.top = "-100px";
                    contactBtn.style.left =  "-100px";
                }, 0250);
            }, 4000)
        });
    }

    // Who are we section
    const readmore = document.querySelectorAll(".more-button");
    for(var x=0;x<readmore.length;x++){
        readmore[x].addEventListener("click", function(e){
           var btn = e.target;
           var el = e.target.previousElementSibling;
           el.classList.contains("open") ?  el.classList.remove("open") : el.classList.add("open");
           el.classList.contains("open") ?  btn.innerHTML = 'Read less <i class="gg-arrow-up-r"></i>' : btn.innerHTML = 'Read more<i class="gg-arrow-down-r"></i>';
         });
    }

});

let form = document.querySelector("#form-section form");
form.addEventListener('submit', function(e){
    
    var fileUploadInput = document.querySelector("#fileupload");

    if(fileUploadInput.value == ""){
        e.preventDefault();
        const formData = new FormData(form);
        var stringData = new URLSearchParams(formData).toString();
        console.log("stringdata = ", stringData);
        var action = form.getAttribute('action');
        ajaxRequest("POST", action, stringData, function(){
            formSuccess();
            toaster("Thanks, we've recieved your message and will be in touch!", 4500)
        });
    }
    else {
        console.log("yeet");
        return true;
    }

});

function formSuccess(){
    form.classList.add("hide");
    var formSuccessMsg = document.querySelector(".form-success");
    formSuccessMsg.classList.add("true");
};

function toaster(message, timer) {
    var x = document.getElementById("bread");
    x.innerHTML = '<i class="gg-comment"></i><span>' + message + '</span>';
    x.className = "show";
    setTimeout(function(){ 
        x.className = x.className.replace("show", ""); 
    }, timer);
}

