// 3ml vebinden by id l tt
let titleSpan     = document.getElementById("titleSpan");
let germanButton  = document.getElementById("germanButton");
let englishButton = document.getElementById("englishButton");
let welcomeText   = document.getElementById("welcomeText");
let aboutDiv      = document.getElementById("aboutDiv");
let aboutText     = document.getElementById("aboutText");
let contactA      = document.getElementById("contactA");






// ida kilikit 3l BUTTON arabic function ikon fiha als parameter arabic
// w3ml incha2 localstorage dyal arabic

germanButton.onclick = ()=> 
{ 
 changelanguage("german");
localStorage.setItem("languageStorage","german");
}




// ida kilikit 3l BUTTON ARABIC function ikon fiha als parameter english
// w3ml incha2 localstorage dyal english

englishButton.onclick = ()=> 
{
  changelanguage("english");
  localStorage.setItem("languageStorage","english");
}






//ida 3mlt onload parametre nta3 function hwa localstorage li sjlt 

onload = () => 
{
   changelanguage(localStorage.getItem("languageStorage"));
}









//hna function 
// ida kan parametre howa arabic i3mal bilarabi : titleSpan   welcomeText  aboutDiv contactA
function changelanguage(language)
{

if (language === "german")
{
    titleSpan.innerHTML=" Souhail Houssaini"
    welcomeText.innerHTML="Willkommen auf der Website von Souhail Houssaini";
    
    aboutDiv.innerHTML="über uns ";
    aboutText.innerHTML= " Ich bin web entwickler ";
    contactA.innerHTML= "kontaktieren Sie uns ";
}



// ida kan parametre howa english i3mal bilarabi : titleSpan   welcomeText  aboutDiv contactA
else if (language === "english")
{
    titleSpan.innerHTML="Coder Shiyar";
    welcomeText.innerHTML="Welcome to website of souhail Houssaini";
    
    aboutDiv.innerHTML="About us ";
    aboutText.innerHTML= " I am  a Software Developer";
    contactA.innerHTML= "Contact us";

}


}







