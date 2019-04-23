/* Formulario: buscamos modelos*/
var modelos = document.getElementById('models_div');
var form1 = document.getElementById('form1');
 
 function hacerclick() {
 	modelos.style.display = "none";
 	form1.style.display = "inline-block";
 }

 function atras() {
 	modelos.style.display= "inline-block";
 	form1.style.display = "none";
 }

/* Formulario: crea tu diseño*/

var diseños = document.getElementById('designs_div');
var form2 = document.getElementById('form2');
 
 function hacerclick2() {
 	diseños.style.display = "none";
 	form2.style.display = "inline-block";
 }

 function atras2() {
 	diseños.style.display= "inline-block";
 	form2.style.display = "none";
 }

  /* Firebase*/
  var formulario1 = document.getElementById('formulario1');
  var formulario2 = document.getElementById('formulario2');
  /*Firebase: formulario buscamos modelos*/
  
formulario1.addEventListener('submit',(e) => {
	e.preventDefault();
	db.collection("monos_modelos").add({
    nombre: formulario1.name.value,
    email: formulario1.email.value
	})
});

 /*Firebase: formulario crea tu diseño */

 formulario2.addEventListener('submit',(e) => {
	e.preventDefault();
	db.collection("monos_diseños").add({
    nombre: formulario2.name.value,
    email: formulario2.email.value
	})
});