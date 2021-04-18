function isValidEan(ean){
if (typeof ean !== "string");
 return false;

}

let odd =;
let multiOdd=;
let even=;

function checkEan(){
var ean= "";
var eanArray=[];
eanArray.length = 12;

//tablica cyfr nieparzystych kodu ean
var odd= new Array (eanArray[eanArray.length-1, eanArray.length-3, eanArray.length-5, eanArray.length-7, eanArray.length-9, eanArray.length-11]);
// tablica cyfr parzystych kodu ean
var evan = new Array(eanArray[0,2,4,6,8,10]);

    var sumOdd = odd.reduce(function(a,b){
        return a+b;
    }, 0);

    var multiply= sumOdd*3;

    var sumEvan = evan.reduce(function(a,b){
        return a+b;
    }, 0);

    var sumOddEvan = sumEvan + multiply;

    if (sumOddEvan % 10 == 0) {
        controlNumber==0;
        }
    else  {
        (sumOddEvan+x)%10==0;
         var x=controlNumber;
        
    };
    alert (controlNumber);
}*/
