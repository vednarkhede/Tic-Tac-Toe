let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".reset");
let nwBtn = document.querySelector(".play");
let nwCntnr = document.querySelector(".msg-container");
let nwMsg = document.querySelector(".msg");
let tieCntnr = document.querySelector(".tie-container");
let nwBtn1 = document.querySelector(".playDraw");
let turnO = true;
let cnt = 0;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

const disable = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
   
};
const enable = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const rst =()=>{
    turnO=true;
    cnt=0;
    enable();

    nwCntnr.classList.add("hide");
    tieCntnr.classList.add("hide");
}

boxes.forEach( (box) => {
    box.addEventListener("click", ()=>{
       
            if(turnO){
                box.innerText="O";
                turnO=false;

            }
            else{
                box.innerText="X";
                turnO=true;
            }
            box.disabled=true;

            check();
    });
    
});

const show = ((winner)=>{
       nwMsg.innerText=`Congratulations! Winner is ${winner}`;
       disable();
       nwCntnr.classList.remove("hide");
       
});

const check = ( ()=>{
    cnt++;
       for( let pattern of winPattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText
        let val3 = boxes[pattern[2]].innerText
        
            if( val1 != "" && val2 != "" && val3 != ""){

                if(val1 == val2 && val1 == val3 && cnt!=9 ){
                     show(val1);
                    
                }
                else if(cnt == 9 ){
                    tieCntnr.classList.remove("hide");

                }
                
            }
            
       }

});

nwBtn.addEventListener("click",rst);
rstBtn.addEventListener("click",rst);
nwBtn1.addEventListener("click",rst);