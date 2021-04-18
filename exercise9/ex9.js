var lettersA = new Set ("AGNIESZKA");
var lettersM = new Set ("MACIEK");

var differences = new Set([...lettersA].filter(x => !lettersM.has(x)));
var difference2 = new Set ([...lettersM].filter(x => !lettersA.has(x)));


    
Set.prototype.union = function(setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
} 


 