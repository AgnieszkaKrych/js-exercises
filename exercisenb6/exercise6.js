function isValidPesel(pesel) {
    if(typeof pesel !== 'string')
        return false;
// tablica z wagami
    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;

// do zmiennej controlNumber przypisuje ostatnią cyfrę z nr pesel
    let controlNumber = parseInt(pesel.substring(10, 11));

//mnożenie cyfry z nr pesel przez wagę 

for (let i = 0; i < weight.length; i++) {
        sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
}
// resztę z dzielenia odejmuję od 10 i uzyskuję controlNumber
    sum = sum % 10;
    return (10 - sum) % 10 === controlNumber; 



}
// funkcja zwraca true jezeli wyrazenie jest rowne controlNumber
