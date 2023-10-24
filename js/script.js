//! SNACK 1
//! Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
//! Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
//! [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
//! Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
//! nome del tavolo, (tableName)
//! nome dell'ospite,  (guestName)
//! posto occupato. (place)
//! Generiamo e stampiamo in console la lista per i segnaposto.

//! forEach: IL forEach NON HA RETURN, QUINDI BISOGNERA' PUSHARE IN UN ALTRO EVENTUALE Array
//! map: TRASFORMA l'eventuale array 
//! filter: filtra

//!Snack 1

const vipMembers = ['Brad Pitt', 
'Johnny Depp',
'Lady Gaga', 
'Cristiano Ronaldo',
'Georgina Rodriguez',
'Chiara Ferragni', 
'Fedez', 
'George Clooney', 
'Amal Clooney', 
'Maneskin'
];

let result = vipMembers.map ((element, index)=>  {
    return {
        tableName: 'Tavolo Vip',
        guestName: element,
        place: index + 1
    }
})
console.log(result);
console.log(vipMembers);

//! SNACK 2
//! Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
//! 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
//! ES (Marco della Rovere => MARCO DELLA ROVERE);
//! 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
//! 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
//! Buon pomeriggio e buon lavoro !!! :faccia_nerd:
//! Questo è l'elenco degli studenti:
//! Id  Name                Grades
//! 213 Marco della Rovere      78
//! 110 Paola Cortellessa       96
//! 250 Andrea Mantegna         48
//! 145 Gaia Borromini          74
//! 196 Luigi Grimaldello       68
//! 102 Piero della Francesca   50
//! 120 Francesca da Polenta    84

//!Snack 2

const students = [
    
    {
        name: 'Marco della Rovere',
        id: '213',
        grades: '78'
    },
    {
        name: 'Paola Cortellessa',
        id: '110',
        grades: '96'
    },
    {
        name: 'Andrea Mantegna',
        id: '250',
        grades: '48'
    },
    {
        name: 'Gaia Borromini',
        id: '145',
        grades: '74'
    },
    {
        name: 'Luigi Grimaldello',
        id: '196',
        grades: '68'
    },
    {
        name: 'Piero della Francesca',
        id: '102',
        grades: '50'
    },
    {  
        name: 'Francesca da Polenta',
        id: '120',
        grades: '84'
    },
]

let namePlate = students.map ((element) =>  {
    return element.name.toUpperCase()
})
console.log(namePlate);

let gradesStudents = students.filter((element) => {
    return element.grades > 70;
})
console.log(gradesStudents);

let gradesIdStudents = students.filter((element) => {
    return element.grades > 70 && element.id > 120;
})
console.log(gradesIdStudents);

