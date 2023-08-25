// 3mal verbinden by id tt les var 
let codeTextarea=document.getElementById("codeTextarea");
let playButton=document.getElementById("playButton");
let removeButton=document.getElementById("removeButton");
let resultDiv=document.getElementById("resultDiv");


// ida klikit 3la playbutton dakchi li f textarea howa li aydhar f divresultat
playButton.onclick = () => {
    resultDiv.innerHTML=codeTextarea.value ;
    //anchi2 dakira ma7alya 5zan fiha dkchi li tktab f codetextarea ochaq fois 3mlti onload tji automatik f textarea 
    localStorage.setItem("RESULTSTORAGE",codeTextarea.value)
}



//ida klikit 3la button remove  dik div nta3 result tkon 5awya 
removeButton.onclick = () => {
    resultDiv.innerHTML="";
}



onload=()=> {
    codeTextarea.value = localStorage.getItem("RESULTSTORAGE");
            }