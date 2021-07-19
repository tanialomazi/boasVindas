// DOM elements

const time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    userName = document.getElementById("name"),
    userFocus = document.getElementById("focus");

console.log(userName);
console.log(userFocus);

function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    //output time
    time.innerHTML = addZero(hour) + ":" + addZero(minute) + ":" + addZero(second);

    //update function
    setTimeout(showTime, 1000); //chama a função a cada 1000 milissegundos, ou seja, a cada segundo.
}

function addZero (n) {
    if (n < 10) {
        return("0"+ n);
    }else {
        return (n);
    }
}

function setGreetingAndBackground (){
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    if (hour < 12) {
        greeting.textContent = "Bom dia";
        document.body.style.backgroundImage = "url('images/morning.jpg')";
        document.body.style.backgroundSize = "100%";
        document.body.style.color = 'white';
    } else if (hour < 18) {
        greeting.textContent = "Boa tarde";
        document.body.style.backgroundImage = "url('images/afternoon.jpg')";
        document.body.style.backgroundSize = "100%";
    }else {
        console.log(1);
        greeting.textContent = 'Boa noite';
        document.body.style.backgroundImage = "url('images/night.jpg')";
        document.body.style.backgroundSize = "100%";
        document.body.style.color = 'white';
    }
}

function getName() {
    if (localStorage.getItem('userName') === null) {
        userName.textContent = '[Enter name]';
    } else {
        userName.textContent = localStorage.getItem('userName');
    }
}

//this function saves things on localStorage
function setName(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.keyCode == 13) {
            localStorage.setItem('userName', e.target.innerText);
            userName.blur(); //essa função "clica" fora sozinha
        }
    }else {
        localStorage.setItem('userName', e.target.innerText); //o else acontecen quando o blur é acionado
    }
}

function getFocus(){
    if (localStorage.getItem('userFocus') === null) {
        userFocus.textContent = "[Enter]";
    } else {
        userFocus.textContent = localStorage.getItem('userFocus');
    }
}

function setFocus(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.keyCode == 13) {
            localStorage.setItem('userFocus', e.target.innerText);
            userName.blur(); //essa função "clica" fora sozinha
        }
    }else {
        localStorage.setItem('userFocus', e.target.innerText); //o else acontecen quando o blur é acionado
    }
}

//listen keyboard and mouse
userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName); //quando o usuário clica com o mouse fora da área de seleção

userFocus.addEventListener('keypress', setFocus);
userFocus.addEventListener('blur', setFocus);

// RUN
showTime();
setGreetingAndBackground();
getName();
getFocus();