var minutosDescanso=15;
var minutosPasados=0;
var horasPasadas=0;
var fecha=new Date();
var dia=fecha.getDay();
var pausa=false;
document.querySelector(".dot1").addEventListener("click",reloj);
document.querySelector("button").addEventListener("click",pausado);



function reloj(){
    document.querySelector("p").innerHTML=minutosPasados+"m";
    document.getElementById("hora").innerHTML="Te quedan 3 hrs de trabajo";
    setInterval(function(){
        if(minutosPasados>=60&&minutosPasados<75){
            minutosDescanso--;
            document.getElementById("hora").innerHTML="Hora de descansar";
            document.querySelector("p").innerHTML=minutosDescanso+"m";
        }
        if(minutosPasados>=75){
            minutosDescanso=15;
            minutosPasados=0;
            horasPasadas++;
        }
        if(horasPasadas<3&&minutosPasados<60){
            let horasTesis=3-horasPasadas;
            document.getElementById("hora").innerHTML="Te quedan "+horasTesis+" hrs de trabajo";
        }
        if(horasPasadas==3&&minutosPasados<60){
            let horasCurso=4-horasPasadas;
            document.getElementById("hora").innerHTML="Te queda "+horasCurso+" hr de curso";
        }
        if(dia==1||dia==3||dia==5){
            if(horasPasadas==4&&minutosPasados<60){
                let horasEjercicio=5-horasPasadas; 
                document.getElementById("hora").innerHTML="Te queda "+horasEjercicio+" hr de ejercicio";
            }
            if(horasPasadas==5&&minutosPasados<60){
                minutosPasados=0;
                document.getElementById("hora").innerHTML="Terminaste por hoy";
            }
        }
        else{
            if(horasPasadas==4&&minutosPasados<60){
                minutosPasados=0;
                document.getElementById("hora").innerHTML="Terminaste por hoy";
            }
        }
        if(minutosPasados<60){
            document.querySelector("p").innerHTML=minutosPasados+"m";
        }
        if(pausa===false){
            minutosPasados++
        }
        if(minutosDescanso<=0){
            pausa=true;
            document.querySelector("button").innerHTML="Reaunudar trabajo";
            var audio = new Audio("blue.mp3");
            audio.play();
            
        }
    },60000)
}

function pausado(){
    pausa=!pausa;
    document.querySelector("button").innerHTML="Pausa";
}
