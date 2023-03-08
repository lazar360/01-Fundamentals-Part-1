const isConnected = "Je suis connecté";
console.log(isConnected);

const firstName = 'Jonas';
const job = 'teacher';
const birthDate = 1991;
const cetteAnnee = new Date().getFullYear();

// Pas de template : c'est moche
const jonas = "I'm " + firstName + ', a '
+ (cetteAnnee - birthDate) + ' years old !' + job;
console.log(jonas);

// Avec template : pas mal
const jonasNew = `Les caractéristiques de Jonas :
- Prénom : ${firstName} ; 
- Âge : ${cetteAnnee - birthDate} ;
- Travail : ${job}.`;
console.log(jonasNew);

// Multiline string
console.log(
    'String with \n\
    multiple \n\
    lines'
);

