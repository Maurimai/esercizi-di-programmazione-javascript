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

var annoCorr = 2020;
var annoNascita = 1954;


var eta = (annoCorr-annoNascita);

var anniManc = 100-eta;

console.log('Se sono nato nel '+ annoNascita + ' e siamo nel '+annoCorr + ' quest\'\anno compio ' +eta + ' anni e me ne mancano ' +anniManc +' per arrivare a 100' );
