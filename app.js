let sec2 = document.querySelector("#sec2");
let sec1 = document.querySelector("#sec1");
let input = document.querySelector("#number");
let btn =document.querySelector(".check");
let p = document.querySelector(".result");
let span = document.querySelector(".max");
function start(max){
    sec2.style.display="flex";
    sec1.style.display="none";
    let ran = random(1,max);
    console.log(ran);
    btn.addEventListener("click" ,function(){
        if(input.value>max){
            alert("out of limit")
        }else if(ran==input.value){
            p.innerText=input.value +" is the value congratulation you won"
           ran = random(1,10);
        }else if(ran>input.value){
            p.innerText=input.value +" is the smaller value choose bigger"
            input.value="";
        }else if(ran<input.value){
            p.innerText=input.value +" is the bigger choose smaller"
            input.value="";
        }
    })
    
}

function random(min,max){
    let a =Math.floor(Math.random()*max)+min;
    return a;
}
function easy(){
    start(10);
}
function medium(){
    start(100);
    span.innerText="100";
}
function hard(){
    start(1000);
    span.innerText="1000";
}