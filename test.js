
// Premier problème

// Pour chaque nombre n de la liste, on veut effectuer les opérations suivantes :
// si le nombre est divisible par 3 : on affiche Garçon
// si le nombre est divisible par 5 : on affiche Fille
// si le nombre est divisible par 3 et par 5 : on affiche GarçonFille
// sinon : on affiche le nombre n

for (n = 1; n <101; n++) {
    if ( n % 3 === 0 && n % 5 === 0) {
      console.log("GarçonFille")}
    else if ( n % 5 === 0 ) {
      console.log("Fille")} 
    else if ( n % 3 === 0 ) {
      console.log("Garçon")}
    else {console.log(n)}
  }
  
  // Second Problème 
  
  // Pour chaque date n dans une liste, on veut avoir ces résultats affichés en fonction des dates de la liste :
  var n = new Date();
  
  // la date qui correspond au dernier jour du mois précédant 
  var lastDayPrevMonth = new Date(n.getFullYear(), n.getMonth(), 0);
  console.log(lastDayPrevMonth);
  
  // la date avec les heures et minutes mises à 0
  var dateReset = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  console.log(dateReset);
  
  // la date au format DD/MM/YYYY hh:mm
  function formatDate(n) {
    var minutes= n.getMinutes();
    var hours= n.getHours();
    return n.getDate() + "/" + (n.getMonth()+1) + "/" +n.getFullYear()+" "+ correct(hours) +":"+correct(minutes);
  }
  function correct(value) {
    if (value<10) {
      return "0"+value;
    }
  }
  console.log(formatDate(n));
  
  // le nombre de la semaine dans l’année
  function getWeek(n) {
    var startOfYear = new Date(n.getFullYear(), 0, 1);
    var numberDays = Math.floor( (n - startOfYear) / (24*60*60*1000) );
    var numberWeeks = Math.floor((numberDays+startOfYear.getDay()-1)/7);
    return "We are in the " + numberWeeks +"th week of this year";
  }
  
  console.log(getWeek(n));
  
  