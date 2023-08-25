
/*
   AUFGABE :
* Du hast zwei Textareas um ein text zu codieren oder decodieren:
 -In einer davon kannst du Text eingeben 
 -in der anderen wird das Ergebnis angezeigt.

*Es gibt auch ein  (Select), in dem du entweder :
 -coder Text 
 - oder decoder text auswählen kannst.


*PS :
 -Die Textkodierung erfolgt mit der Methode "btoa"
 -Die Textdekodierung erfolgt mit der Methode "atob"
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// textarea1  textarea1 select verbinden 
let textarea1=document.getElementById("textarea1");
let textarea2=document.getElementById("textarea2");
let select=document.getElementById("select");


//wa9tach tactiva had function swa nktp f input or select tchange 
textarea1.addEventListener("input",()=>{make_result();});
select.addEventListener("change",()=>{make_result();});


//decl function if select=decode  mach window b atob la valeur nta3 textarea1
//if select=decode  mach window b atob la valeur nta3 textarea1
function make_result()
{

if(select.value=="decode")
{
textarea2.value=window.atob(textarea1.value);
}

else 
{
textarea2.value=window.btoa(textarea1.value);
}

}
make_result();






































// The btoa() method encodes a string in base-64.
// btoa() : يتم استخدامها لتشفير بيانات النصية إلى تشفير بنظام القاعدة64
// ----------------------------------------------------------------------------
// This method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string. 
// هذا عنصر يستخدم احرف اللغة الإنجليزية , الصغيرة والكبيرة , الأرقام و علامة 
// +  و  /  و =
// عندما يقوم بتشفير النص
//------------------------------------------------------------------------------
// Tip: Use the atob() method to decode a base-64 encoded string.
// atob() : يتم استخدام هذا العنصر لفك تشفير نص مشفر بنظام قاعدة64
/*
let text = "Coder Shiyar";
let coderText = window.btoa(text);
let decoder_text = window.atob(coderText);

/*
let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");

textarea.addEventListener("input",()=>{
    make_result();
});


select.addEventListener("change",()=>{
    make_result();
});


function make_result(){
   if(select.value == "decode")
   {
    result.value = window.atob(textarea.value) ;
   }

   else
   {
    result.value = window.btoa(textarea.value) ;
   }
} 
*/