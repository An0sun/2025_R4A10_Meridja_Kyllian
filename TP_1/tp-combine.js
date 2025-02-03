// TP JavaScript2 - Kyllian Meridja BUT2A
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
  return [
    { name: "Thomas", age: "30" },
    { name: "Theo", age: "25" },
    { name: "Philippe", age: "45" },
    { name: "Jeremy", age: "28" },
    { name: "Minnie", age: "50" },
  ];
}

module.exports = {
  // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
  B1() {
    return getEmployees().filter(person => person.name.endsWith("e")); // appliquer filtre dans personne au nom de la personne avec endsWith(finiPar...)
  },

  // 2) Trouver la première personne dont l'âge est inférieur à 30
  B2() {
    return getEmployees().find(person => person.age < 30); // Consigne Trouver = find (Anglais) puis condition
  },

  // 3) Renvoyer l'index où se trouve "Jeremy"
  B3() {
    return getEmployees().findIndex(person => person.name === "Jeremy"); // Renvoyer Index = findIndex condition nom ==
  },

  // 4) Trier le tableau par âge des personnes
  B4() {
    let employees = getEmployees();
    employees.sort((a,b) => a.age - b.age);  // sort (ordre croissant age)
    return employees;
  },

  // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
  B5() {
    let employees = getEmployees();
    employees.push({name: "Kasimu", age: "38"}); // push(attributs) = ajout à la fin
    return employees;
  },

  // 6) Renvoyer la longueur du tableau
  B6() {
    return getEmployees().length; // Length = tableau (anglais)
  },

  // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié
  B7() {
    let employees = getEmployees();
    let theo = employees.find(person => person.name === "Theo"); // On trouve Theo, avec === comparaison stricte ça évite des erreurs
    // "10" === 10 retourne False alors que  "10" == 10 retourne true
    if (theo) theo.name = theo.name.replace("o","a");  // redéfinir avec replace pour remplacer (anglais) et "if (theo)"" car si on ltrouve pas = créer erreur dans le tab, 
    return employees;
  },

  // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
  B8() {
    return getEmployees().filter(person => person.name.includes("e")); // filtre personne avec INCLUS dans le nom "e"
  },
};
