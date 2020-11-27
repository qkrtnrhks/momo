const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      hello = document.querySelector(".js-hello");


const USER_LS = "currentUser",
      SHOWING_CN = "showing";


function paintHello(text) {
    form.classList.remove(SHOWING_CN);
    hello.classList.add(SHOWING_CN);
    hello.innerText = `Hello ${text}`;
};

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // he is not 
    } else{
       paintHello(currentUser);
    }
};

function init(){
      loadName()   
};


init()