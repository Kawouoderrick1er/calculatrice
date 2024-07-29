var screem=document.querySelector('#screem');
var btn=document.querySelectorAll('.btn');
// saiie de nombre a lecran
// for(item of btn){
//     item.addEventListener('click',(e)=>{
//         btntext=e.target.innerText;
//         screem.value+=btntext;
//     })
// }

for(item of btn){
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        if(btntext=='x'){btntext=='*';}
        if(btntext=='%'){btntext=='/';}

        screem.value+=btntext;
    })
}


function expotentiel(){
    screem.value=2.7182
}
function sqrt(){
    screem.value=Math.sqrt(screem.value,2)
}

function log(){
    screem.value=Math.log(screem.value)
}

function pow(){
    screem.value=Math.pow(screem.value,2)
}
function fact(){
    var i, m , f;
    f=1
    m=screem.value
    for(i=1;i<=m; i++)
    {
        f=f*i;
    }
    i--;
    screem.value=f;
}

function sin(){
    screem.value=Math.sin(screem.value)
}

function cos(){
    screem.value=Math.cos(screem.value)
}
function pi(){
    screem.value=3.14159265
}


function ac(){
    screem.value="";
}

function backspc(){
    screem.value = screem.value.substr(0,screem.value.lenght-1)
}

