$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

/*MODAL-IMAGEN*/
var imgPortafolio = document.getElementsByClassName('imagen-portafolio');
var imgmodal = document.getElementById("img1");

for(var i = 0; i<imgPortafolio.length; i++){
	
	imgPortafolio[i].addEventListener('click',function(){

		var ruta = this.getAttribute("src");
		img1.src = ruta;

	})


	


}
console.log(imgPortafolio[1].src);