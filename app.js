firebase.initializeApp({
    apiKey: "AIzaSyDX2ee9UXZiy3LtvxI7-iAWxuCDK6PR1bE",
    authDomain: "registro-de-visitantes-ae509.firebaseapp.com",
    projectId: "registro-de-visitantes-ae509",
  });

//Initialize Cloud Firestore through Firebase
  const db = firebase.firestore(); //Iniciacion de Firestore (db)
  //agregar documentos
  function saveDataUser(){
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("last_name").value;
    const host = document.getElementById("host_name").value;
    const picture = document.getElementById("hiddenPicture").value;
    db.collection("users").add({
        first: name,
        last: lastName,
        hosttest: host,
        picture: picture 
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("name").value = '';
        document.getElementById("last_name").value = '';
        document.getElementById("host_name").value = '';
        document.getElementById("hiddenPicture").value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  }

//Lee datos del visitante
const table = document.getElementById('table');// Se guarda todo lo que esta dentro de tabla  
db.collection("users").onSnapshot((querySnapshot) => {//se reemplazo .get() por onSnapshot()
  table.innerHTML = ''; //Limpia los datos de la tabla
    querySnapshot.forEach((doc) => {
        console.log(`${doc} => ${doc.data()}`);
        console.log(doc.data())
        table.innerHTML +=`
                      <tr>
                        <td>${doc.data().first}</td>
                        <td>${doc.data().last}</td>
                        <td>${doc.data().hosttest}</td>
                        <td>${doc.data().picture}</td>
                        <td><button onclick = "deleteData('${doc.id}')">Eliminar</button></td>
                      </tr>
        `
    });
});
//Borrar documentos
function deleteData (id){
  db.collection("users").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
}

//funcion del selector
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('select');
  const instances = M.FormSelect.init(elems);
});