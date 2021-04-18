function showLeftDays(){
    var now = new Date();
    var thisYear = now.getFullYear();
    var Xmas = "December 24, " + thisYear;
    var nextXmas = new Date(Xmas);

    var msPerDay = 24 * 60 * 60 * 1000 ;  
    var daysLeft = (nextXmas.getTime() 
      - now.getTime()) / msPerDay;
    daysLeft = Math.round(daysLeft);
    alert("Number of Days until Christmas: "
      + daysLeft);
}



function showLeftDays2(){
    var chosenDate = document.getElementById("start").value;
    var thisYear = new Date(chosenDate).getFullYear();
    var Xmas = "December 24, " + thisYear;
    var nextXmas = new Date(Xmas);

    var msPerDay = 24 * 60 * 60 * 1000 ;  
    var daysLeft = (nextXmas.getTime() 
      - Date.parse (chosenDate)) / msPerDay;
    daysLeft = Math.round(daysLeft);
    alert("Number of Days until Christmas: "
      + daysLeft);
}