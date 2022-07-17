
//import {data} from './dictionary.js';
 const data = {
     0: "-----",
     1: ".----",
     2: "..---",
     3: "...--",
     4: "....-",
     5: ".....",
     6: "-....",
     7: "--...",
     8: "---..",
     9: "----.",
     A: ".-",
     B: "-...",
     C: "-.-.",
     D: "-..",
     E: ".",
     F: "..-.",
     G: "--.",
     H: "....",
     I: "..",
     J: ".---",
     K: "-.-",
     L: ".-..",
     M: "--",
     N: "-.",
     O: "---",
     P: ".--.",
     Q: "--.-",
     R: ".-.",
     S: "...",
     T: "-",
     U: "..-",
     V: "...-",
     W: ".--",
     X: "-..-",
     Y: "-.--",
     Z: "--..",
     "!": "-.-.--",
     ".": ".-.-.-",
     ",": "--..--",
     " ": "/",
     "?": "..__..",
 };

 const addButton = document.getElementById("submit");
 const clearButton = document.getElementById("clear");
 let inputText = '';


 function translateToMorse(string) {
     const Capitalized = string.toUpperCase();
     //console.log(Capitalized);
     const splitString = Capitalized.split("\\b");
    // console.log(splitString);

     const decode = splitString
         .map((a) =>
             a
                 .split("")
                 .map((c) => data[c])
                 .join(" "),
         )
         .join(" ");

     return decode;
 }


function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
}


addButton.addEventListener("click", () => {
  const inputText = document.querySelector("#inputText").value;
 // console.log(inputText);
    let isAlphabetic = containsAnyLetter(inputText);
    //console.log(isAlphabetic);
    if(isAlphabetic){
         let returnedMorseCode = translateToMorse(inputText);
            document.getElementById(
                "translatedText",
            ).innerHTML = `${returnedMorseCode}`;
    }else{
          
        let toEnglish = translateToEnglish(inputText);
          document.getElementById("translatedText").innerHTML = `${toEnglish}`;
    }
   
});
clearButton.addEventListener("click", () => {
   location.reload();
});





let reverseData = {};

function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}

reverseData = swap(data);

function translateToEnglish(morse) {
   
 
    const splitMorse = morse.split(" ");
    //console.log(splitMorse);
 
   const decodeToEnglish = splitMorse
       .map((a) =>
           a
               .split(" ")
               .map((c) => reverseData[c])
               .join(""),
       )
       .join("")
       .trim().toLowerCase();    
   //console.log(decodeToEnglish);
   /*  let upperCasing = decodeToEnglish.split('.').map(c => c[1].toUpperCase()).join('');
    console.log(upperCasing); */
    return decodeToEnglish.charAt(0).toUpperCase() + decodeToEnglish.slice(1);
}
