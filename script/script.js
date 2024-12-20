// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email




// Creo una lista utenti
const emailList = ["paolo@gmail.com", "marco@gmail.com", "giulio@gmail.com", "andrea@gmail.com", "lucia@gmail.com", "chiara@gmail.com", "sara@gmail.com"];


// propt per inserimento mail utente
let email = prompt ("inserisci la tua e-mail");
console.log(email);

// verifico sia dentro la lista
let findEmail = false;

for (let i = 0; i < email.length; i++){
    
    // SE la mail è presente
    if (email === emailList[i]){
        //stampo messaggio di conferma
        findEmail = true;  
        
    }else{
    }
         
}

if (findEmail){
    console.log("congratuazione sei invitato alla festa!");
}else{
    console.log("Mi dispiace, non sei invitato");
}
