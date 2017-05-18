
var nombre=document.getElementById("first_name");
var apellido=document.getElementById("last_name");
function typeOracion(){
  if(this.getAttribute("type")=="text"){
     var arrDato=this.value.split(" ");
     var datoConMayuscula="";
     for (var i = 0; i < arrDato.length; i++) {
       datoConMayuscula+=arrDato[i].charAt(0).toUpperCase()+ arrDato[i].substring(1).toLowerCase() + " " ;
     }
     this.value=datoConMayuscula;
   }
}

var validaLetras=function(e){
  var codigoTecla=e.keyCode;
  if ((codigoTecla>=97 && codigoTecla <=122)|| (codigoTecla>=65 && codigoTecla <= 90) || codigoTecla==32 || codigoTecla==39) {
return true;
  }else {
    return false;
  }
};

nombre.onkeypress=validaLetras;
apellido.onkeypress=validaLetras;
nombre.onblur=typeOracion;
apellido.onblur=typeOracion;
