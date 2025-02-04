const email = "test.test@email.com";

module.exports = {
  // 1) Séparer l'email en deux parties au niveau du caractère '@', renvoyer le tableau correspondant
  Q1() {
    return email.split("@"); // .split("@") coupe l'email en 2 à partir du "@"
  },

  // 2) Vérifier qu'il n'y a qu'un seul caractère '@' dans email. Renvoyer un booléen
  Q2() {
    return email.split("@").length === 2; // vérif si 2 partie après split  -> split("caractère")
  },

  // 3) Renvoyer l'index du caractère '@'
  Q3() {
    return email.indexOf("@"); //  retourne la pos du premier "@"  -> indexOf("caractère")
  },

  // 4) Renvoyer la sous-chaîne se situant après le caractère '@'
  Q4() {
    return email.split("@")[1]; // Prend la part index1 (donc partie 2) qui y'a après le "@"
  },

  // 5) Renvoyer la variable en majuscule
  Q5() {
    return email.toUpperCase(); // l'email changé en maj avec toUpperCase() comme en java
  },

  // 6) Renvoyer le type de la variable email
  Q6() {
    return typeof email; // retourne le type "string" un string "contenu" -> typeof  
  },
  
  // 7) Changez "email.com" par "gmail.com", renvoyez la chaîne modifiée
  Q7() {
    return email.replace("email.com", "gmail.com"); // change "email.com" par "gmail.com"  -> .replace("contenu remplaceable", "contenu remplacé") 
  }
};
