function ajaxRequest(e,t,n,a){let s=new XMLHttpRequest;s.open(e,t,!0),"POST"==e&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){if(4==s.readyState&&200==s.status){let e=s.responseText;a(e)}},s.send(n)}
document.addEventListener("DOMContentLoaded", function(){

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
            contactBtn.style.top = e.pageY+"px";
            contactBtn.style.left =  e.pageX+"px";

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
    var readmore = document.querySelector(".more-button");
    var profilesEl = document.querySelector(".who-profiles");
    
    readmore.addEventListener("click", function(){
       profilesEl.classList.contains("open") ?  profilesEl.classList.remove("open") : profilesEl.classList.add("open");
       profilesEl.classList.contains("open") ?  readmore.innerHTML = 'Read less <i class="gg-arrow-up-r"></i>' : readmore.innerHTML = 'Read more<i class="gg-arrow-down-r"></i>';
    });
});

// .erLLhsnyT6p4vQh1

let form = document.querySelector("#form-section form");
form.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(form);
    var stringData = new URLSearchParams(formData).toString();
    var action = form.getAttribute('action');
    ajaxRequest("POST", action, stringData, function(response){
        alert("hullo!");
        console.log("res = ", response);
    });
});

