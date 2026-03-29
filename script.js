const q1=document.querySelector('.question1');
const drawer=document.querySelector('.drawer');
const plus=document.querySelector("#plus");
q1.addEventListener("click",function(e){
    if(drawer.style.display==="none"||drawer.style.display===""){
        drawer.style.display="block";
        plus.innerHTML="x";
    }
    else{
        drawer.style.display="none";
        plus.innerHTML="+";
    }
});
const q2=document.querySelector('.question2');
const drawer2=document.querySelector('.drawer2');
const plus2=document.querySelector("#plus2");
q2.addEventListener("click",(e)=>{
    if(drawer2.style.display==="none"||drawer2.style.display===""){
        drawer2.style.display="block";
        plus2.innerHTML="x";
    }
    else{
        drawer2.style.display="none";
        plus2.innerHTML="+";
    }
});
const q3=document.querySelector('.question3');
const drawer3=document.querySelector('.drawer3');
const plus3=document.querySelector("#plus3");
q3.addEventListener("click",(e)=>{
    if(drawer3.style.display==="none"||drawer3.style.display===""){
        drawer3.style.display="block";
        plus3.innerHTML="x";
    }
    else{
        drawer3.style.display="none";
        plus3.innerHTML="+";
    }
});

const q4=document.querySelector('.question4');
const drawer4=document.querySelector('.drawer4');
const plus4=document.querySelector('#plus4');
q4.addEventListener("click",(e)=>{
    if(drawer4.style.display==="none"||drawer4.style.display===""){
        drawer4.style.display="block";
        plus4.innerHTML="x";
    }
    else{
        drawer4.style.display="none";
        plus4.innerHTML='+';
    }
})
const q5=document.querySelector('.question5');
const drawer5=document.querySelector('.drawer5');
const plus5=document.querySelector('#plus5');
q5.addEventListener("click",(e)=>{
    if(drawer5.style.display==="none"||drawer5.style.display===""){
        drawer5.style.display="block";
        plus5.innerHTML="x";
    }
    else{
        drawer5.style.display="none";
        plus5.innerHTML='+';
    }
})
const q6=document.querySelector('.question6');
const drawer6=document.querySelector('.drawer6');
const plus6=document.querySelector('#plus6');
q6.addEventListener("click",(e)=>{
    if(drawer6.style.display==="none"||drawer6.style.display===""){
        drawer6.style.display="block";
        plus6.innerHTML="x";
    }
    else{
        drawer6.style.display="none";
        plus6.innerHTML='+';
    }
})

const question=document.querySelector('.question');
question.addEventListener("click",(e)=>{
    if(question.style.display==="none"||question.style.display===""){
        question.style.display="block";
    }
})

