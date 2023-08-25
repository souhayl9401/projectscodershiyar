
//AUFGABE
/*
  title :aktuelle Uhrzeit und Datum in numerischer Form zeigen
-oben numerische Uhrzeit  (Stunde:Minute:Sekunde)" => Beispiel: 11:40:36.
-unten gibt es das Datum im Format Tag-Monat-Jahr => Beispiel: 14-8-2023. 
- unten Input-Typ 'Farbe' damit kann man die backgroundColor des Body ändern

wie hier :
11:48:28
14-8-2023
(input type color)
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//incha2 function ismha machDate
function machDate()
{

    // incha2 3 var : 9a3ida por appeler minutes= new Date().getMinutes; hna hajtna b hours minutes seconds
    var date=new Date();                                 
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    

    // f h1 nta3i anafichi les vars li deja declarit com ca : bsp=> 11:18:38
    var setTimeh1=document.getElementById("setTimeh1");
    setTimeh1.innerHTML= hours+":" + minutes+":"+seconds;
    
    // hna an3yat L: date bsp=> 14-8-2023 
    //ps: day=date.getDate()  getMonth()  getFullYear
    var setDatep=document.getElementById("setDatep");
    var day=date.getDate();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
    
    setDatep.innerHTML=day+"-"+month+"-"+year;

}
//l function machDate atjdad kol 100 ms bsti3mal setInterval
// andir aussi onload 
setInterval(machDate,100);
onload=machDate();




//tawa n3yat function changeColor 
function changeColor()
{
    // f html n3ml input type color 
    // n3ml var colorinputvalue fih value nta3 input nta3 color 
    // n3ml dakira ma7alya item ismo Colorstrg w ndir fih colorinputvalue
    // backgroundColor nta3 body = colorstrg li 5znt f localStorage
    // function change color  t5dam chaq 100ms 
    var colorinputvalue=document.getElementById("colorinput").value;
    localStorage.setItem("Colorstrg",colorinputvalue);

    document.getElementById("body").style.backgroundColor=localStorage.getItem("Colorstrg");
    ;
}
setInterval(changeColor,100);














