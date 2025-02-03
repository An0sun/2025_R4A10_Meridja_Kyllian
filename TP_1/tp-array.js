// TP JavaScript - Kyllian Meridja BUT2A
function getArray() {
  return [12, 7, 6, 15, 41, 24, 13];
}

module.exports = {
  // Renvoyer la valeur true depuis la fonction
  Q0() {
    return true;
  },

  //1) Récupérer le tableau depuis getArray() et renvoyer un nouveau tableau ne contenant que les valeurs supérieures ou égales à 15 
  // en utilisant une méthode de tableau
  Q1() {
    return getArray().filter(value=>value>=15); // premier "value" c chaque element du tab => fonction fléchée pour on conditionne les valeurs (retourne un autre tab mais pas stocké)
  },

  //2) Renvoyer l'index de la première valeur strictement inférieure à 7
  Q2() {
    return getArray().findIndex(value=>value<7);  // findindex = recherche première valeur conditionnée ( retourne UN SEUL élément !!)
  },

  //3) Inverser le tableau en utilisant une méthode spécifiquement prévue à cet effet. Renvoyez ce tableau inversé
  Q3() {
    let tab = getArray();
    tab.reverse(); // inverser = reverse()
    return tab;
  },

  //4) Trier le tableau dans l'ordre croissant, renvoyez le tableau trié
  Q4() {
    let tab = getArray();
    tab.sort((a,b) => a - b); // tri ordre croissant = a - b
    return tab;
  },

  //5) Ajouter la valeur 0 en premier index du tableau, renvoyez le tableau modifié
  Q5() {
    let tab = getArray();
    tab.unshift(0); // unshift = ajout au début tab ( on peut pas faire return getArray().unshift(0) car ça donne la nouvelle longueur du tab à la place)
    return tab;
  },

  //6) Faire la somme des éléments du tableau avec une boucle for. Renvoyez la somme
  Q6() {
    let sum = 0;  // variables : let ça change, const ça change pas
    let tab = getArray();
    for (let i = 0; i < tab.length; i++) {   // pas oublier le let sur le i
      sum += tab[i];
    }
    return sum;
  },

  //7) Faire la somme des éléments du tableau avec une méthode spécifique de tableau (reduce), renvoyez la somme
  Q7() {
    return getArray().reduce((cpt, value) => cpt + value, 0); // cpt = 0 , chaque element value on l'ajoute au compteur, reduce retourne la somme direct
  },

  //8) Remplacer la troisième valeur du tableau par "ici", renvoyez le tableau
  Q8() {
    let tab = getArray(); //recup tab
    tab.splice(2,1,"ici"); // splice = supprime,modif,ajoute élement -> mémo: (où,combien,remplacement)
    return tab;
  },

  //9) Retirer le dernier index, renvoyez le tableau
  Q9() {
    let tab = getArray(); //recup tab car on peut pas faire (return getArray().pop(); sinon ça retourne l'élement supp prcque j'ai déja essayé )
    tab.pop(); // pop = supp le dernier élément
    return tab;
  },

  //10) Renvoyez le type de la variable ARRAY
  Q10() {
    return typeof getArray(); // typeof = savoir le type  & on peut utiliser : Array.isArray()
  },

  //11) En utilisant une méthode spécifique aux tableaux, renvoyer un booléen vérifiant que le résultat de getArray() est bien un tableau
  Q11() {
    return Array.isArray(getArray()); // isArray booléen qui dit vrai ou faux si c un array
  },

  //12) Renvoyer le tableau sous forme de chaîne de caractère où les éléments sont séparés par un tiret (-)
  Q12() {
    return getArray().join('-');  // on sépare chaqué élement par ce qu'on met dans le join
  },

  //13) Renvoyer le tableau en gardant uniquement les 2 derniers éléments
  Q13() {
    return getArray().slice(-2); // garde 2 dernier éléments
  }
};
