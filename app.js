const log = console.log;    //global scope

const date = new Date();  //Possibilité d'utiliser une autre date 1/15/2005
 const moiss = ['Janvier', 'Février', 'Mars', 'Avril',
                      'Mai','Juin', 'Juillet', 'Août',
                      'Septembre','Octobre', 'Novembre', 'Décembre'];
      const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi',
                    'Jeudi', 'Vendredi', 'Samedi',]

      let indexm = date.getMonth();
      let mois = moiss[indexm]
      log(mois);
      
      let indexj = date.getDay();
      let joursem = jours[indexj];                                       
      log(joursem);

      let jourmoi = date.getDate();
      log(jourmoi);  

      let an = date.getFullYear();     
      log(an);

      let sentence = `${joursem}, ${jourmoi} ${mois} ${an}`;
      log(sentence); 

      document.body.innerHTML = sentence;