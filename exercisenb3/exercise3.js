
function findTheLongestWord (str) {
    
    var strSplit = str.split(" ");
    var longestWord = "";
    var longestWordLength = 0;

    for (i=0; i<strSplit.length; i++)
    if (strSplit[i].length >longestWordLength) {
       longestWord=strSplit[i];
       longestWordLength=longestWord.length;
    }
    alert (longestWord);
    return longestWord;
    
}

