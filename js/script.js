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

//! SNACK 3
//! Creare un array di oggetti:
//! Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//! Stampare in console la bici con peso minore utilizzando destructuring e template literal


//! creare array di oggetti info dati da noi
//! creare variabile bici peso minore 
//! ciclo for chi cicla array e confronta peso 
//! destrutturare info bici leggera
//! usare template literal per stambare in html


const peso = [];
const bici = [
    
    {
        name: 'Bergamont',
        weight: '20'
    },
    {
        name: 'Bianchi',
        weight: '18'
    },
    {
        name: 'Cinelli',
        weight: '14'
    },
    {
        name: 'Gazelle',
        weight: '17'
    },
    {
        name: 'Trek',
        weight: '12'
    }
];

bici.forEach((element, index) => {
    peso.push(element.weight);
    //! destructuring weight/name bici
    const {name} = bici[index];
    const {weight} = bici[index];
    console.log({name});
    console.log({weight});
});

const biciLeggera = Math.min(...peso);
console.log(biciLeggera);
const risposta = `La bici più leggera pesa ${biciLeggera}kg'`;
console.log(risposta);


//! SNACK 4
//! Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//! Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//! Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
//! Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const soccerTeams = [
        {
            name: 'Besiktas',
            puntiFatti: '0',
            falliSubiti: '0'

        },
        {
            name: 'Galatasaray',
            puntiFatti: '0',
            falliSubiti: '0'
        },
        {
            name: 'Istanbulspor',
            puntiFatti: '0',
            falliSubiti: '0'
        },
        {
            name: 'Fenerbahce',
            puntiFatti: '0',
            falliSubiti: '0'
        },
        {
            name: 'Trabzonspor',
            puntiFatti: '0',
            falliSubiti: '0'
        }

]

const finalResult = [];

soccerTeams.forEach((element, index) =>{
    element.puntiFatti = getRndInteger(2, 69);
    element.falliSubiti = getRndInteger(2, 69);
    const {name} = soccerTeams[index];
    const {falliSubiti} = soccerTeams[index];
    finalResult.push({name, falliSubiti})
})
console.log(soccerTeams);
console.log(finalResult);


const row = document.querySelector(".row");

for (let i = 0; i < finalResult.length; i++) {
    const col = document.createElement("div");
    col.classList.add("my-5","text-center", "fs-2");        
    let template = `
    <div>
        <p>Squadra: ${finalResult[i].name}, Falli subiti: ${finalResult[i].falliSubiti}</p>
    </div>
`;
col.innerHTML = template;
row.append(col);    
    
}

//UTILITY
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
