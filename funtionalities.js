
//import {data} from './dictionary.js';
 const data = {
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
     ".": ".-.-.-",
     ",": "--..--",
     "?": "..--..",
     "'": ".----.",
     "!": "-.-.--",
     "/": "-..-.",
     "(": "-.--.",
     ")": "-.--.-",
     "&": ".-...",
     ":": "---...",
     ";": "-.-.-.",
     "=": "-...-",
     "+": ".-.-.",
     "-": "-....-",
     "_": "..--.-",
     '"': ".-..-.",
     "$": "...-..-",
     "@": ".--.-.",
     " ": "/",
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
   inputText = "";
   document.getElementById("translatedText").innerHTML = ``;
    document.querySelector("#inputText").value = '';
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
    let splitSentence = decodeToEnglish.split(/[.\?]/);
    console.log(splitSentence);
    let takeFirstOut =
        splitSentence.shift();

    console.log(takeFirstOut.charAt(0).toUpperCase() + takeFirstOut.slice(1));
    console.log(splitSentence);
    let capitalizedFirstWord = splitSentence.map(
        (sentence) => sentence.charAt(1).toUpperCase() + sentence.slice(2),
    );
    console.log(
        `${ takeFirstOut.charAt(0).toUpperCase() + takeFirstOut.slice(1)} ${capitalizedFirstWord.join(".")}`,
    );
    
    return `${
        takeFirstOut.charAt(0).toUpperCase() + takeFirstOut.slice(1)
    } ${capitalizedFirstWord.join(".")}`;
}
