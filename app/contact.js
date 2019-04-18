var contact = document.getElementById("contact_form");

contact.addEventListener('submit',(e) => {
	e.preventDefault();
	db.collection("contacto").add({
    nombre: contact.name.value,
    email: contact.email.value,
    asunto: contact.subject.value,
    mensaje: contact.message.value
	})
});

/*function llevar() {
	db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
};	
*/