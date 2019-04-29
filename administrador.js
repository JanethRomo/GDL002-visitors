//Ingresar a la sesion
function getInToAdministration (){
  const email2 = document.getElementById('email2').value;
  const password2 = document.getElementById('password2').value;

  firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });
  }
// para saber si algun usuario esta con una sesion iniciada
  function validateLoggedInUser() {
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              console.log('existe usuario activo');
              showUserInformation(user);
            // User is signed in.

            const displayName = user.displayName;
            const email = user.email;

            console.log(user.emailVerified);//informa si el correo ha sido verificado mediante true o false


            const emailVerified = user.emailVerified;
            const photoURL = user.photoURL;
            const isAnonymous = user.isAnonymous;
            const uid = user.uid;
            const providerData = user.providerData;
            // ...
          } else {
            // User is signed out.
            console.log('no existe usuario activo');
            // ...
          }
        });
  }
  validateLoggedInUser();

//cerrar sesion
  function showUserInformation(user){
     /*  const user = user; */
      const container = document.getElementById('container');
      if (user.emailVerified){
      container.innerHTML = `
      <p>Bienvenido!</p>
      <button onclick="cerrar()">Cerrar sesion</button>
      `;
  }
}
function cerrar(){
  firebase.auth().signOut()
  .then(function(){
      console.log("saliendo....")
  })
  .catch(function(error){
      console.log(error)
  })
}
