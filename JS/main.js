/* Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto
 */


//1.imposto un layout di partenza su HTML
//2.creo un arrey di oggetti contenenti nome,immagine,condizione true, 
//2.1 ed gli eventuali messaggi di partenza(primo giorno scritti a mano nell'html),
//2.2 faccio un ciclo v-for che mi scorra gli oggetti 
//2.3  stampo immagine e nome sull'html
var app = new Vue({
    el: '#app',
    data: {
        cercainiziale:'',
        activechatt: 0,
        nuovomessaggio:{
            date:'10/12/2021 14:30:50',
            text:'',
            status:'sent'
        },
        risposta:{
            date:'10/12/2021 14:30:50',
            text:'ok',
            status:'received'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    /* questo mi serve per richiamarmi l'indici */
    methods: {
        attivaLachatt(index) {
            this.activechatt = index;
        /* la risposta lo messa in alto e le richiamo qui nel metodo (metodo che mi serve per acquisire il messaggio e rispondere)*/
        },
        aggiungimessaggio(i) {
            this.contacts[this.activechatt].messages.push(this.nuovomessaggio);
            setTimeout(()=>this.contacts[this.activechatt].messages.push(this.risposta), 2000);

            this.nuovomessaggio = {
                date:'10/12/2021 14:30:50',
                text:'',
                status:'sent'
            }
                
        },
        
        
    }
}
);


