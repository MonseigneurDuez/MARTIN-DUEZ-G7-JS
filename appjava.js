// MENU BURGER :

// on rend l'icône clickable afin qu'elle active la classe "active" losqu'on clique dessus
// la classe "active" fait apparaitre le menu déroulant qui n'est pas visible, le "top" passe de -100% à 10%. Et l'icone va se transformer en croix.
// on peut faire apparaitre des icones précises grace à un certain code dans le CSS. 

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
})



// Formulaire : 


let form = document.querySelector("#my-form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let age = document.querySelector("#age");
let country = document.querySelector("#country");
let errors = document.querySelector("#errors");
let body = document.querySelector("body");
let selectionnez = document.querySelector("selectionnez");
let ville = document.querySelector("#ville");
let adresse = document.querySelector("#adresse");
let email = document.querySelector("#email");
let CodePostal = document.querySelector("#CodePostal");


form.addEventListener("submit", function (event) {
  event.preventDefault();
  errors.innerHTML = "";

  if (firstName.value.length < 2) {
    firstName.style.background = "red";
    errors.innerHTML +=
      "<div> Veuillez renseigner un nom avec 2 caractères minimum. </div>";
  } else {
    firstName.style.background = "green";

    

  }
  if (ville.value.length < 2) {
    ville.style.background = "red";
    errors.innerHTML +=
      "<div> Veuillez renseigner un nom avec 2 caractères minimum. </div>";
  } else {
    ville.style.background = "green";
  }

  if (adresse.value.length < 2) {
    adresse.style.background = "red";
    errors.innerHTML +=
      "<div> Veuillez renseigner un nom avec 2 caractères minimum. </div>";
  } else {
    adresse.style.background = "green";
  }


  if (lastName.value.length < 2) {
    lastName.style.background = "red";
    errors.innerHTML +=
      "<div> Veuillez renseigner un nom avec 2 caractères minimum. </div>";
  } else {
    lastName.style.background = "green";
  }

  if (age.value < 18 || age.value > 70) {
    age.style.background = "red";
    errors.innerHTML +=
      "<div> Veuillez renseigner un age entre 18 et 70 balais </div>";
  } else {
    age.style.background = "green";
  }

  if (CodePostal.value < 5 || CodePostal.value > 5) {
    CodePostal.style.background = "red";
    errors.innerHTML +=
      "<div> Veuillez renseigner un code postal valide </div>";
  } else {
    CodePostal.style.background = "green";
  }

//   if (firstName.value.length >= 2 && lastName.value.length >= 2 && age.value >= 18 && age.value <= 70){
// alert("bravo frero");
// console.log("hfdsjk")}

if(errors.innerHTML ==="") {
    let p = document.createElement("p"); // créer un p en JS
    p.append("Formulaire envoyé"); //ajouter du texte à mon p
    body.appendChild(p); // ajouter l p au dom
    document.getElementById("my-form").reset();
}

if (country.value == "null") {
  country.style.backgroundColor= "red";
  errors.innerHTML += "<div> veuillez selectionner un pays ! <div/>"
}else {
  country.style.backgroundColor = "green";
}

//si j'ai pas d'erreur
if (errors.innerHTML === "") {
  let p = document.createElement("p");
  p.append("formulaire envoyé")
  body.appendChild(p);
}

var email = document.forms["Form"]["email"].value;
if (email.indexOf('@') == -1) {
    alert("Email invalide");
}else {
  email.style.backgroundColor = "green";
}
var mdp = document.forms["Form"]["password"].value;
    if (mdp.length < 6 || !mdp.match(/[a-z]/i) || !mdp.match(/\d/)) {
    }else {
      alert("Mot de passe invalide")
    }



   }
);

