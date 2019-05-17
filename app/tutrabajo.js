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
	var docRef = db.collection("monos_modelos").add({
    nombre: formulario1.name.value,
    email: formulario1.email.value
	})
  .then(function(docRef) {
    key = docRef.id
    console.log("Document written with ID: ", key);
    
})
  .catch(function(error) {
    console.error("Error adding document: ", error);
});
});
 
//Firebase: storage buscamos modelos
//Multiple files
  const storage = firebase.storage();
  const storageRef = storage.ref();
  var InputPhoto = document.getElementById('InputPhoto');

  InputPhoto.addEventListener('change', function(e) {
     
      //Get files
     for (var i = 0; i < e.target.files.length; i++) {
        var imageFile = e.target.files[i];
         uploadImageAsPromise(imageFile); //Function uploads every single file
        
      }
  });
  function send() {
    db.collection("monos_modelos").doc(key).get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data().email);
        userEmail = doc.data().email;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
  }
  function uploadImageAsPromise (imageFile) {
    
    
      //Upload file
      
        console.log(userEmail)
        var modelsRef = storage.ref('BuscamosModelos/'+userEmail+'/'+imageFile.name);
        var task = modelsRef.put(imageFile);
   

  };
        

 /*Firebase: formulario crea tu diseño */

 formulario2.addEventListener('submit',(e) => {
	e.preventDefault();
	var docRef = db.collection("monos_diseños").add({
    nombre: formulario2.name.value,
    email: formulario2.email.value
	})
  .then(function(docRef) {
    key2 = docRef.id
    console.log("Document written with ID: ", key2);
    
})
  .catch(function(error) {
    console.error("Error adding document: ", error);
});
});

// Recargar página al oprimir botón de "Enviar todo"
function reload() {
  location.reload();
}

var InputPhoto2 = document.getElementById('InputPhoto2');

  InputPhoto2.addEventListener('change', function(e) {
     
      //Get files
     for (var i = 0; i < e.target.files.length; i++) {
        var imageFile = e.target.files[i];
         uploadImageAsPromise2(imageFile); //Function uploads every single file
        
      }
  });
  function send2() {
    db.collection("monos_diseños").doc(key2).get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data().email);
        userEmail2 = doc.data().email;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
  }
  function uploadImageAsPromise2 (imageFile) {
    
   
      //Upload file
      
        console.log(userEmail2)
        var designsRef = storage.ref('CreaTuDiseño/'+userEmail2+'/'+imageFile.name);
        var task = designsRef.put(imageFile);
   

  };