/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

<<<<<<< HEAD
function anni (annoCorr,annoNascita)
{
eta = annoCorr-annoNascita;
anniManc = 100-eta;

}
anni(2020,1954);
console.log(eta,anniManc);
=======
var annoCorr = 2020;
var annoNascita = 1954;


var eta = (annoCorr-annoNascita);

var anniManc = 100-eta;

console.log('Se sono nato nel '+ annoNascita + ' e siamo nel '+annoCorr + ' quest\'\anno compio ' +eta + ' anni e me ne mancano ' +anniManc +' per arrivare a 100' );
>>>>>>> 52e24c63f0c54c1e1c263e7115275918857f9d5f
