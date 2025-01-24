const screen = document.getElementById("screen");
const btn = document.getElementById("btn");
const scr = document.getElementById("scr");
const mvs = document.getElementById("mvs");
const heading = document.getElementById("heading");
const rv01 = document.getElementById("rv01");
const rv02 = document.getElementById("rv02");
const optionstrip = document.getElementById("optionstrip");
const options = document.querySelectorAll(".opton");
let rndrv;
let clicked = 0;
let movesleft;
let score= 0;


const reveal = ['rv01', 'rv02'];
const arr = [ 'Apple', 'Bell', 'Burger', 'Football', 'Cheese', 'Lantern', 'Rocket','Monkey','Art','Headphones','Telephone'];
const Obj = {
    Apple : "url('images/apple.png')",
    Bell : "url('images/bell.png')",
    Burger : "url('images/burger.png')",
    Football : "url('images/football.png')",
    Cheese : "url('images/cheese.png)",
    Lantern : 'url(images/lantern.png)',
    Rocket : 'url(images/rocket.png)',
    Monkey : 'url(images/monkey_face.png)',
    Art : 'url(images/art.png)',
    Headphones : 'url(images/headphones.png)',
    Telephone : 'url(images/telephone.png)'
}


const rest=()=>{
  score=0;
  clicked=0;
  movesleft=3;
  heading.textContent="Guess The Number";
  scr.textContent=`Score: ${score}`;
  mvs.textContent=`Moves: ${movesleft}/3`;
  optionstrip.style.bottom= "80px";
  btn.textContent="Start";
  btn.removeEventListener("click",rest);
  btn.addEventListener("click", start);
}




function start(){

  btn.textContent="Next";

if(clicked<3){
    clicked++;
    movesleft=3-clicked;
    options[0].addEventListener("click", one=()=>{ chk('rv01')});
    options[1].addEventListener("click", two= ()=>{ chk('rv02')});
    
    mvs.textContent= `Moves: ${movesleft}/3 `;
    optionstrip.style.bottom= "80px";
    screen.style.backgroundImage= "none";
    heading.textContent="Guess The Card";
    let rnd = arr[Math.round(Math.floor()*arr.length)];
    rndrv= reveal[Math.round(Math.floor()*reveal.length)];
    console.log(rndrv);
    screen.style.animationName="shaking";

    if (rndrv==="rv01"){
        setTimeout(()=>{
        rv01.style.backgroundImage=Obj[rnd];
        rv02.style.backgroundImage="url(images/cross.png)";
        },400);
    }

    else{
        setTimeout(()=>{
        rv02.style.backgroundImage=Obj[rnd];
        rv01.style.backgroundImage="url(images/cross.png)";
        },400);
    }

    setTimeout(()=>{
        screen.style.animationName="";
        screen.style.backgroundImage= Obj[rnd];
        heading.textContent=rnd;
     },900);
}

else{

  if(score>1){
  heading.textContent="You Won";
  options[0].removeEventListener("click", one);
  options[1].removeEventListener("click", two);
  btn.textContent="Reset";
  btn.addEventListener("click", rest);

  }

  else{
    heading.textContent="You Lost";
    options[0].removeEventListener("click", one);
    options[1].removeEventListener("click", two);
    btn.addEventListener("click", rest);
    btn.textContent="Reset";
  }

}

}


function chk(bxnum){
  
  optionstrip.style.bottom= "345px";
  optionstrip.style.gap= "30px";
  options[0].removeEventListener("click", one);
  options[1].removeEventListener("click", two);
  btn.textContent="Next";
  if(bxnum==rndrv){
   heading.textContent="Right";
   score++;
   scr.textContent= `Score: ${score}`;
  }
  else{
    heading.textContent="Wrong";
  }
}





btn.addEventListener("click", start);
