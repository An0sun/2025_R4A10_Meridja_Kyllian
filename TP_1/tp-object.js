const email = "test.test@email.com";

// Toutes les questions nécessitent d'aller récupérer l'objet depuis cette fonction
function getObject() {
  return {
    name: "Mon objet",
    description: "Un très bel objet JS",
    value: 7,
    isBestObject: false,
    address: {
      city: "Paris",
      zipCode: 75000,
    },
  };
}

module.exports = {
  // 1) Renvoyer la propriété description
  Q1() {
    return getObject().description; // affiche la desc objet récup
  },

  // 2) Renvoyer la propriété city
  Q2() {
    return getObject().address.city; // affiche ville depuis adress de l'objet récup
  },

  // 3) Renvoyer les clés de l'objet sous forme de tableau
  Q3() {
    return Object.keys(getObject()); // affiche un tab clés de l'objt Object.keys()
  },

  // 5) Ajouter la propriété email à myObject et renvoyer l'objet modifié
  Q5() {
    let myObject = getObject(); // Récup objet
    myObject.email = email;
    return myObject;
  },

  // 6) Ajouter une propriété dynamique étant le résultat de la concaténation des chaînes "hello" et "world" et dont la valeur est true
  Q6() {
    let myObject = getObject();
    let key = "hello" + "world"; // le + pour que les deux se mettent d'affilé
    myObject[key] = true; // Ajout Propriété dynamique en val true
    return myObject;
  },

  // 7) Supprimer la propriété isBestObject et renvoyer l'objet
  Q7() {
    let myObject = getObject();
    delete myObject.isBestObject; // Supp de la prop
    return myObject;
  },

  // 8) Vérifier que la propriété description existe dans l'objet, renvoyer un booléen
  Q8() {
    return "description" in getObject(); // se demande si : est ce que "description" est une clé dans l'obj ?
  },
};
