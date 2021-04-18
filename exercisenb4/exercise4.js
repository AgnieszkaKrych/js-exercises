var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (x in alphabet) document.writeln(x);
document.write("index to type: " + typeof x + " !<br><br>");  

function toCode (text, move){
var code = "";
var text= "";
for (x in text) {
    for (letter in alphabet) {
    if (text.chartAt(x)== alphabet.charAt(letter))  {
       index= (Number(letter) + move)%26;
    }
}
}
document.write(code + "<br>")
}






