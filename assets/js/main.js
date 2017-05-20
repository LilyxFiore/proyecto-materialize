//** js para zoom de imágenes **/
$(document).ready(function(){
    $('.materialboxed').materialbox();
  });


//js para validar formulario **//
var form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("first_name");
  var last_name = document.getElementById("last_name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  validateNull(name, last_name, email, message);
  this.reset();
});

function validateNull(name, last_name, email, message){
  /** Validacion para nombre**/
  if(name.value.trim().length==0 || last_name.value.trim().length==0 || email.value.trim().length==0 || message.value.trim().length==0){
    return false;
  }

  if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test(email.value))){
    return false;
  }

  else{
    alert("Sus datos han sido registrados correctamente");
  }

}
