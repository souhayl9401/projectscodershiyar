/////////////////////////////////////////////video84////////////////////////////////////////////////////////////////////////////////////////////////////



/*AUFGABE : Title ==> ein radio kanal erstellen 
  A:
  -wenn du auf pause klickst Kanal  pausieren  
  -wenn du auf play klickst  Kanal   abspielen  

  B:
  Wenn du auf die "back" oder "next" butoon  klickst => Kanal  wechseln und den Namen des Kanals auch 

  C:
  -input range erstellen damit =>  Lautstärke des Audios ändern 
  -input range erstellen damit =>  Geschwindigkeit des Audios ändern 

  D:
  -Das Problem ist : wenn ich mich auf Kanal 3 oder 4 befinde und die Seite neu lade  was passiert => Der Kanal kehrt automatisch
  zum Ausgangskanal 1 zurück und nicht zum 3 oder 4 
  -Lösung : ist mit benutzung localstorage

*/





//1-incha2 class player wastha constructor 
class Player 
{
constructor()
{
//2-tgol lih bach height nta3 main howa nfso height nta3 jihaz li msta3ml
this.main.document.getElementById("main-id");
this.main.style.height=screen.height+"px";

if(screen.width<500)
{
// ida kan width nta3 screen sghar mn 500 => width nta3 main = width nta3 screen
this.main.style.width=screen.width+"px";
}

}


}
onload=new Player();











//////////////////////////////////////////////////////////////////////video85////////////////////////////////////////////////////////////////////////////////
//TITLE : ida klikit 3la button play yachtaghil wida clikit 3la pause yatwa9af


class Audio_Player
{
constructor()
{   //3-da5il constructor ta7did 2 element : audio_file + button_play_pause 
    //and declaration var ismo isPlayed
    this.audio_file.document.getElementById("audio_file");
    this.play_pause_button.document.getElementById("play_pause_button");
    this.isPlayed;
}


//incha2 function ismha play_pause()
play_pause()
{
    //ida kant variable isplayed false : var isplayed  + audio yachtaghal + soura d button play pause tbdl
    if(this.isPlayed==false)
    {
         this.isPlayed==true; 
         this.audio_file=play();
         this.play_pause_button.src="img/pause.png";     
    }


    else 
    { 
        //ida kant variable isplayed true  : var isplayed ytbdl +audio y3ml pause + soura d button play pause tbdl 
        this.isPlayed=false; 
        this.audio_file.pause();
        this.play_pause_button.src="img/play.png";
    }
}



}
onload = new Audio_Player();














/////////////////////////////////////////////////////////////////////video86////////////////////////////////////////////////////////////////////////////
// ida clikit 3la back-button and next chno yaw9a3  ==> 9anat tbdl w ism 9anat ytbdl


class Change_Canal{

    constructor()
    {
 //declaration jadwal names_radio
 this.names_radio=[];
 this.names_radio=["0"]="Marokko";
 this.names_radio=["1"]="ALGERIE";
 this.names_radio=["2"]="ESPAGNE";


 //declaration jadwal src_radio
 this.src_radio=[];
 this.src_radio=["0"]="www.google.com";
 this.src_radio=["1"]="www.facebook.com";
 this.src_radio=["2"]="www.youtube.com";


 // hada just counteur wie i
 this.server=0

 
 //hadi b7ala kan3yat lhad function chaq fois f constructor
 this.setRessource();









//ida klikit 3la next hachno ayaw9a3 
document.getElementById("next_button").addEventListener("click",()=> {

     //ida kan compteur < mn length jdwal - 1 : 3mlo ++ and var isplayed=false   
if(this.server < this.source_audio.length - 1) 
{
    this.server++;
    this.isPlayed=false;
}
//et apres appeler function setRessource bx tbdl name and src
this.setRessource();   
 } );









//ida klikit 3la back hachno ayaw9a3 b addeventlistenere
document.getElementById("back_button").addEventListener("click",()=>{

//ida kan compteur > 0  ==> dir lih -- et var isplayed=false           
if(this.server>0)
{this.server--;  this.isPlayed=false;}  
//sinon counter= 0 li hya length-1 nta3 jdwal  w com tjrs var isplayed false
else
{ this.server=this.names_radio.length-1;  this.isPlayed=false;} 

});
this.setRessource();






    // declaration methode ismha setRessource() 
    setRessource()
    {   //src nta3 audio howa jdwal nta3 src b counteur
        this.audio_file.src=this.src_radio[this.server];
        //name nta3 radio howa jdwal nta3 name  b counteur
        this.names_radio.innerHTML=this.names_radio[this.server];
        //appeler function playpause bach y5dm automatiq
        this.play_pause();

        //ps: setressource 3ayatna liha da5il constructor w aslan fiha playpause() dimniyann
    }


    }
}
onload = Change_Canal() ;












//////////////////////////////////////////video87////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3onwan kbir changiw vitess w volume en fonction d input range


class Volume
{
    constructor()
    {
        ///Title:hna changina volume d audio en fonction d input_range ;; omatnsach initialisation

        //id verbinden audio_file 
        this.audio_file=document.getElementById("audio_file");
        //volume nta3 audio initilisieren ;; audio volum automatik ykon bin 0 and 1  ;;
        this.audio_file.Volume=50/100; 
        //volume range verbinden mit id 
        this.Volume_range_input.document.getElementById("volume_range_input");
        

        //ps:range input kikon b 100 dkchi 3lach fach kan7awloh l volum kan9smoh 3la 100
        //ida 3mlna change f range => volume = la value de range volum(ps raho mn 0 1 )
        this.Volume_range_input.addEventListener("change",()=>{
        this.audio_file.Volume=this.Volume_range_input.value/100;


}                                                                             );





        


        ////TITLE:changiw speed d audio en fonction d speed range omatnsach initialisation
        //zuerst speed initiali f 1
        this.audio_file.speed=1;
        //speeninputrange verbinden mit id
        this.speed_input_range.document.getElementById("speed_input_range");
         
        //ida w9a3 change f range => vitess nta3 audio(playbackRate)=range -ps:range 100 and vlum 0 a 1 -
        this.speed_input_range.addEventListener("change",()=>{
        this.audio_file.playbackRate=this.speed_input_range.value/100;
        });
    }
}
onload=new Volume();










//87 part 3 : n3mlo localstorage : prblm c qe ida matalan ana f kanal num 2 o3malt reload ayrja3 liya automatiq 
//l canal 1 ana bghito tjrs yb9a f 1 l7al howa localstorage 

document.getElementById("next_button").addEventListener("click",()=>
{
if(this.server<this.source_audio.length-1) 
{
    ++this.server;
    this.isPlayed=false;
}


else
{ this.server=0;  }

//hna katgolo valeur nta3 this.server enegistriha  f (var SAVE-POSITION)
 localStorage.setItem("SAVE-POSITION",this.server);


this.setRessource();   
});




  //w f methode setRessource an3yat llocalstorage com ca 
  setRessource()
   {
if (localStorage.getItem("SAVE-POSITION")!==null)
{
    this.server=localStorage.getItem("SAVE-POSITION");
}

   } 


