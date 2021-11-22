import {ruswords} from "./words.js"
let checkButton= document.getElementById('Check');
let newButton= document.getElementById("New");
let userInput= document.getElementById("In");
let h1= document.getElementById("title")
let words= ["собака" , "кошка" ,"олень"];
// words=["нападающий"]
words= ruswords;
let secret= words[Math.floor(Math.random()*words.length)]
let img= document.getElementById("img")
let shifr= document.getElementById("shifr")
let imgNumber=0;
let p= document.getElementById("p")
let letters="";
shifr.innerHTML= "*".repeat(secret.length)
// userInput.focus()
checkButton.onclick= function (event){
	event.preventDefault();
    if (!letters.includes(userInput.value)) {     
    letters=letters + userInput.value+" "
        if (secret.includes(userInput.value)) {
        // h1.innerHTML="Виселица:верно";
        let newShifr="";
        for (let i=0; i<secret.length; i=i+1){
            if (secret[i]==userInput.value) {
                newShifr=newShifr+secret[i] 
            }
            else{
                console.log("no")
                newShifr=newShifr+shifr.innerHTML[i]
            }
            // console.log(secret[i]
           //  if (secret[i]==userInput.value) {
           //      newShifr=newShifr+userInput.value;
           //  }
           //  else{
           //     newShifr=newShifr+shifr.innerHTML[i]
           // }
       }
       shifr.innerHTML=newShifr;
       if(shifr.innerHTML==secret){
        checkButton.disabled= true;
        h1.innerHTML="Виселица:победа"
       }

   } else{
    // h1.innerHTML="Виселица: не верно";
    imgNumber=imgNumber+1;
    img.src="hangman"+imgNumber+".png";
    if (imgNumber==6) {
        checkButton.disabled= true;
        h1.innerHTML="ты проиграл! Сектретное слово:"+secret;
    } 
}
    }
        p.innerHTML="использованные буквы:"+" "+letters;
	// console.log(userInput.value);
    // if (In="а") {
    // 	else{
    // 		h1.innerHTML="не верно"
    // 	}
    // }
    console.log(h1.innerHTML[2],h1.innerHTML[4],h1.innerHTML[6])
userInput.value=""
userInput.focus()
}
newButton.onclick=function (event){
    event.preventDefault();
    console.log("игра")
    h1.innerHTML="Виселица"
    img.src="hangman0.png"
    checkButton.disabled= false;
    imgNumber=0;
    secret= words[Math.floor(Math.random()*words.length)]
    shifr.innerHTML= "*".repeat(secret.length)
    p.innerHTML="Правила игры: вводи букву и нажимай проверить"
    letters="";
  }